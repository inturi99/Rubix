require('./globals');

var fs = require('fs');
var path = require('path');
var express = require('express');
var compression = require('compression');
var cookieParser = require('cookie-parser');

var app = express();
app.use(compression());
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

var rpackage = require('./package.json');
var Router = require('react-router').Router;
var Location = require('react-router/lib/Location');

var defaultAppName = process.env.APP ? process.env.APP : 'app';

var routes = require('./public/js/' + defaultAppName + '/' + defaultAppName + '.node.js');

var webpack_host = process.env.WHOST ? process.env.WHOST : 'localhost';
var webpack_dev_server_port = process.env.WPORT ? process.env.WPORT : 8079;

var html = fs.readFileSync(path.join(process.cwd(), 'src', 'jsx', defaultAppName, 'index.html'), {
  encoding: 'utf8'
});

var createStyleTag = function(file, media) {
  media = media || 'screen';
  return "    <link media='"+media+"' rel='stylesheet' type='text/css' href='"+file+"'>\n";
};

var stylesheets = '';
if(process.env.NODE_ENV === 'development') {
  stylesheets += createStyleTag('/css/'+defaultAppName+'/raw/{dir}/main.css', 'screen,print');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/raw/{dir}/theme.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/raw/{dir}/colors.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/raw/{dir}/font-faces.css');
  html = html.replace(new RegExp('{appscript}', 'g'), 'http://'+webpack_host+':'+webpack_dev_server_port+'/scripts/bundle.js');
} else {
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/main-blessed1.css', 'screen,print');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/main.css', 'screen,print');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/theme.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/colors-blessed1.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/colors.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/font-faces.css');
  html = html.replace(new RegExp('{appscript}', 'g'), '/js/'+defaultAppName+'/'+defaultAppName+'.js');
}

html = html.replace(new RegExp('{app}', 'g'), defaultAppName);
html = html.replace(new RegExp('{stylesheets}', 'g'), stylesheets);
html = html.replace(new RegExp('{version}', 'g'), rpackage.version);

var ltr = html.replace(new RegExp('{dir}', 'g'), 'ltr');
var rtl = html.replace(new RegExp('{dir}', 'g'), 'rtl');

/** BEGIN X-EDITABLE ROUTES */

app.get('/xeditable/groups', function(req, res) {
  res.send([
    {value: 0, text: 'Guest'},
    {value: 1, text: 'Service'},
    {value: 2, text: 'Customer'},
    {value: 3, text: 'Operator'},
    {value: 4, text: 'Support'},
    {value: 5, text: 'Admin'}
  ]);
});

app.get('/xeditable/status', function(req, res) {
  res.status(500).end();
});

app.post('/xeditable/address', function(req, res) {
  res.status(200).end();
});

app.post('/dropzone/file-upload', function(req, res) {
  res.status(200).end();
});

/** END X-EDITABLE ROUTES */

app.get('/ltr', function(req, res, next) {
  res.redirect('/');
});

app.get('/rtl', function(req, res, next) {
  res.redirect('/');
});

/** CATCH-ALL ROUTE **/
app.get('*', function(req, res, next) {
  if(req.url === '/favicon.ico'
    || (req.url.search('.l20n') !== -1)) return next();
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  var isRTL = req.cookies.rubix_dir === 'rtl' ? true : false;

  var location = new Location(req.path, req.query);

  try {
    Router.run(routes(), location, function(e, i, t) {
      var str = React.renderToString(
                  React.createElement(Router, i));

      if(isRTL) {
        res.send(rtl.replace(new RegExp('{container}', 'g'), str));
      } else {
        res.send(ltr.replace(new RegExp('{container}', 'g'), str));
      }
    });
  } catch(e) {
    return next();
  }
});

var server = app.listen(process.env.PORT, function() {
  try {
    process.send('CONNECTED');
  } catch(e) {}
});

process.on('uncaughtException', function(err) {
  console.log(arguments);
  process.exit(-1);
});
