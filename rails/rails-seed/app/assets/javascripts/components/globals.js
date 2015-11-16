window.navigator = {
  userAgent: {
    indexOf: function() {return true;},
    toLowerCase: function() {
      return "";
    }
  }
};
window.setTimeout = window.setTimeout || function() {};
window.setInterval = window.setInterval || function() {};
window.Modernizr = window.Modernizr || {};
window.localStorage = window.localStorage || {getItem: function() {}, setItem: function() {}};
window.Pace = window.Pace || {once: function() {}, restart: function() {}};
window.l20n = window.l20n || {initializeLocales: function() {}, ready: function() {}};
window.ReactBootstrap = {
  Dispatcher: {
    on: function() {},
    off: function() {},
    emit: function() {},
    removeAllListeners: function() {}
  }
};
