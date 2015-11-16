global.window = global;
global.navigator = {
  userAgent: {
    indexOf: function() {return true;},
    toLowerCase: function() {
      return "";
    }
  }
};

window.$ = require('jquery');
global.React = require('react');
global.ReactRouter = require('react-router');
global.Link = ReactRouter.Link;
global.Router = ReactRouter.Router;
global.Route = ReactRouter.Route;
global.EventEmitter2 = require('eventemitter2').EventEmitter2;
global.Modernizr = {};
global.localStorage = {getItem: function() {}, setItem: function() {}};
global.Pace = {once: function() {}, restart: function() {}};
global.l20n = {initializeLocales: function() {}, ready: function() {}};

global.ReactBootstrap = {
  Dispatcher: new global.EventEmitter2({
    maxListeners: 999999999
  })
};

global.uuid = require('uuid');

require('./public/js/common/rubix-bootstrap/rubix-bootstrap.js');
require('./public/js/common/react-l20n/react-l20n.js');
