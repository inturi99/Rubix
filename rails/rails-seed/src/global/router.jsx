import { Router } from 'react-router';
import Location from 'react-router/lib/Location';

if(window.hasOwnProperty('vex')) {
  vex.defaultOptions.className = 'vex-theme-flat-attack';
}

var onUpdate = (notReady) => {
  // cleanup (do not modify)
  rubix_bootstrap.core.reset_globals_BANG_();
  if(window.Rubix) window.Rubix.Cleanup();

  Pace.restart();
  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
    window.ga('send', 'pageview', {
     'page': window.location.pathname + window.location.search  + window.location.hash
    });
  }

  if(!notReady) {
    // l20n initialized only after everything is rendered/updated
    l20n.ready();
    setTimeout(() => {
      $('body').removeClass('fade-out');
    }, 500);
  }
};

var InitializeRouter = (routes) => {
  onUpdate(true);
  var rootInstance = React.render(routes, document.getElementById('app-container'), () => {
    // l20n initialized only after everything is rendered/updated
    l20n.ready();
    setTimeout(() => {
      $('body').removeClass('fade-out');
    }, 500);
  });

  // initialize react-hot-loader
  if(module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
      getRootInstances() {
        // Help React Hot Loader figure out the root component instances on the page:
        return [rootInstance];
      }
    });
  }
};

module.exports = (routes) => {
  if('document' in window) {
    InitializeRouter(routes(true, onUpdate));
  } else {
    // called only server side!
    if(__BACKEND__ === 'rails') {
      global.StaticComponent = React.createClass({
        render() {
          var Handler = null;
          var location = new Location(this.props.path, this.props.query);
          ReactBootstrap.Dispatcher.removeAllListeners();
          rubix_bootstrap.core.reset_globals_BANG_();
          Router.run(routes(false), location, (e, i, t) => {
            Handler = <Router {...i} />;
          });
          return Handler;
        }
      });
    } else {
      return () => {
        ReactBootstrap.Dispatcher.removeAllListeners();
        rubix_bootstrap.core.reset_globals_BANG_();
        return routes(false);
      };
    }
  }
};
