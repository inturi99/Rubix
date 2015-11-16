'use strict';

var loaderUtils = require("loader-utils");
var path   = require('path');
var recast = require('recast');

var annotateStyleName = require('./annotateStyleName');

module.exports = function annotate(src, map) {
  if (this && this.cacheable) {
    this.cacheable();
  }

  if (/StyleSheet\.create/.exec(src)) {
    var tree   = recast.parse(src);
    var prefix = path.basename(this.resourcePath).split('.')[0];
    var query = {};
    if (this.query) {
      query = loaderUtils.parseQuery(this.query);
    }
    tree = annotateStyleName(tree, prefix, query);
    src = recast.print(tree).code;
  }
  this.callback(null, src, map);
};
