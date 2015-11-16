'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var entry = require.resolve('./entry');
var ExtractTextPlugin__dirname = path.dirname(
  require.resolve('extract-text-webpack-plugin'));
var ConcatSource = require("webpack/lib/ConcatSource");


function ReactStylePlugin(id, filename, options) {
  this.extractTextPlugin = new ExtractTextPlugin(id, filename, options);
}
function extractEntries(request, id) {
  var type = typeof request;
  if (Array.isArray(request)) {
    var objArr = [];
    for (var j = 0, l2 = request.length; j < l2; j++) {
      if (typeof request[j] === 'string') {
        objArr = objArr.concat(extractEntries(request[j], id));
      }
      else {
        objArr.push(extractEntries(request[j], id));
      }
    }
    return objArr;
  }
  else if (type === 'object') {
    var obj = {};
    var requestKeys = Object.keys(request);
    for (var i = 0, l = requestKeys.length; i < l; i++) {
      var requestKey = requestKeys[i];
      var requestEntry = request[requestKey];
      obj[requestKey] = extractEntries(requestEntry, requestKey);
    }
    return obj;
  }
  else {
    return [request, styleEntryLoader(request, id)];
  }
}

ReactStylePlugin.prototype.patchEntries = function(compiler) {
  var entries = extractEntries(compiler.options.entry);
  compiler.options.entry = entries;
};

var classNames = {};
ReactStylePlugin.prototype.apply = function(compiler) {
  this.patchEntries(compiler);
  this.extractTextPlugin.apply(compiler);

  var counter = 1;
  compiler.plugin('this-compilation', function(compilation) {
    compilation.plugin('normal-module-loader', function(loaderContext, module) {

      var extractText = loaderContext[ExtractTextPlugin__dirname];
      loaderContext[ExtractTextPlugin__dirname] = function(content, opt) {
        if (content && content.__classNames) {
          var id = opt.id || 'main';
          if (!classNames[id]) {
            classNames[id] = {};
          }
          for (var k in content.__classNames) {
            if (content.__classNames.hasOwnProperty(k)) {
              classNames[id][k] = counter++;
            }
          }
        }
        return extractText(content, opt);
      };
    });
  });
  compiler.plugin('compilation', function(compilation) {
    compilation.mainTemplate.plugin('startup', function(source, module, hash) {
      if (!module.chunks.length && source.indexOf('__ReactStyle__') === -1) {
        var originName = module.origins && module.origins.length ? module.origins[0].name : 'main';
        return ['if (typeof window !== "undefined") {',
            '  window.__ReactStyle__ = ' + JSON.stringify(classNames[originName]) + ';',
            '}'
          ].join('\n') + source;
      }
      return source;
    });
    compilation.chunkTemplate.plugin('render', function(modules, chunk){
      var source = new ConcatSource();
      var hasStylingAlready = false;
      if(modules._node) {
        hasStylingAlready = modules._node.children.filter(function(child) {
          if (typeof(child) === 'string') {
            return child.indexOf('__ReactStyle__') === -1;
          }
        }).length;
      }
      if (!hasStylingAlready) {
        source.add('if (typeof window !== "undefined") {\n' +
        '  window.__ReactStyle__ = ' + JSON.stringify(classNames[chunk.name]) + ';\n' +
        '}\n');
      }
      source.add(modules);
      return source;
    });
  });

};

ReactStylePlugin.loader = function(options) {
  return require.resolve('./annotate') + (options ? '?' + options : '');
};

function styleEntryLoader(request, id) {
  var extractLoader = ExtractTextPlugin.extract().split('?');
  var newExtractLoader = JSON.parse(extractLoader[1].split('!')[0]);
  newExtractLoader.id = id;
  var stringifiedNewExtractLoader = extractLoader[0] + '?' + JSON.stringify(newExtractLoader);
  return [require.resolve('./emptyLoader'), stringifiedNewExtractLoader, entry, request].join('!');
}

module.exports = ReactStylePlugin;
