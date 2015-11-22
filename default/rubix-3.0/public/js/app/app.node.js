module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	var _routes = __webpack_require__(2);

	var _routes2 = _interopRequireDefault(_routes);

	var _globalRouter = __webpack_require__(62);

	var _globalRouter2 = _interopRequireDefault(_globalRouter);

	/* Initialize Locales */
	l20n.initializeLocales(("app"), {
	  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
	  'default': 'en-US'
	});

	Pace.once('hide', function () {
	  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
	});

	module.exports = (0, _globalRouter2['default'])(_routes2['default']);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var Ploader = React.createClass({
	  displayName: 'Ploader',

	  getInitialState: function getInitialState() {
	    return {
	      display: 'none'
	    };
	  },
	  show: function show(cb) {
	    this.setState({ display: 'block' }, cb);
	  },
	  hide: function hide(cb) {
	    this.setState({ display: 'none' }, cb);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'preloader', style: { display: this.state.display } },
	      React.createElement('img', { src: '/imgs/preloader.gif', width: '128', height: '128' })
	    );
	  }
	});

	if ('document' in window) {
	  window.Preloader = React.render(React.createElement(Ploader, null), document.getElementById('app-preloader'));
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(3);

	var _reactRouterLibBrowserHistory = __webpack_require__(32);

	var _reactRouterLibBrowserHistory2 = _interopRequireDefault(_reactRouterLibBrowserHistory);

	var _reactRouterLibHashHistory = __webpack_require__(34);

	var _reactRouterLibHashHistory2 = _interopRequireDefault(_reactRouterLibHashHistory);

	var _routesBlank = __webpack_require__(35);

	var _routesBlank2 = _interopRequireDefault(_routesBlank);

	var _routesLock = __webpack_require__(54);

	var _routesLock2 = _interopRequireDefault(_routesLock);

	var _routesLogin = __webpack_require__(55);

	var _routesLogin2 = _interopRequireDefault(_routesLogin);

	var _routesInbox = __webpack_require__(56);

	var _routesInbox2 = _interopRequireDefault(_routesInbox);

	var _routesMail = __webpack_require__(57);

	var _routesMail2 = _interopRequireDefault(_routesMail);

	var _routesCompose = __webpack_require__(58);

	var _routesCompose2 = _interopRequireDefault(_routesCompose);

	var _routesCalendar = __webpack_require__(59);

	var _routesCalendar2 = _interopRequireDefault(_routesCalendar);

	var _routesPopulation = __webpack_require__(60);

	var _routesPopulation2 = _interopRequireDefault(_routesPopulation);

	exports['default'] = function (withHistory, onUpdate) {
	  var history = withHistory ? Modernizr.history ? new _reactRouterLibBrowserHistory2['default']() : new _reactRouterLibHashHistory2['default']() : null;
	  return React.createElement(
	    _reactRouter.Router,
	    { history: history, onUpdate: onUpdate },
	    React.createElement(_reactRouter.Route, { path: '/', component: _routesLock2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/lock', component: _routesLock2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/dashboard', component: _routesBlank2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/populationdashboard', component: _routesPopulation2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/login', component: _routesLogin2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/mailbox/inbox', component: _routesInbox2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/mailbox/mail', component: _routesMail2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/mailbox/compose', component: _routesCompose2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/calendar', component: _routesCalendar2['default'] })
	  );
	};

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(4);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(26);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	/* components (configuration) */

	var _Redirect2 = __webpack_require__(27);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(28);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _Navigation2 = __webpack_require__(29);

	var _Navigation3 = _interopRequireDefault(_Navigation2);

	exports.Navigation = _Navigation3['default'];

	var _TransitionHook2 = __webpack_require__(30);

	var _TransitionHook3 = _interopRequireDefault(_TransitionHook2);

	exports.TransitionHook = _TransitionHook3['default'];

	var _State2 = __webpack_require__(31);

	var _State3 = _interopRequireDefault(_State2);

	exports.State = _State3['default'];

	/* utils */

	var _RouteUtils = __webpack_require__(9);

	exports.createRoutesFromReactChildren = _RouteUtils.createRoutesFromReactChildren;

	var _PropTypes2 = __webpack_require__(17);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _AsyncUtils = __webpack_require__(8);

	var _RouteUtils = __webpack_require__(9);

	var _RoutingUtils = __webpack_require__(10);

	var _PropTypes = __webpack_require__(17);

	var _RouterContextMixin = __webpack_require__(22);

	var _RouterContextMixin2 = _interopRequireDefault(_RouterContextMixin);

	var _ScrollManagementMixin = __webpack_require__(23);

	var _ScrollManagementMixin2 = _interopRequireDefault(_ScrollManagementMixin);

	var _Location = __webpack_require__(18);

	var _Transition = __webpack_require__(25);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _React$PropTypes = _react2['default'].PropTypes;
	var arrayOf = _React$PropTypes.arrayOf;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	function runTransition(prevState, routes, location, hooks, callback) {
	  var transition = new _Transition2['default']();

	  (0, _RoutingUtils.getState)(routes, location, function (error, nextState) {
	    if (error || nextState == null || transition.isCancelled) {
	      callback(error, null, transition);
	    } else {
	      nextState.location = location;

	      var transitionHooks = (0, _RoutingUtils.getTransitionHooks)(prevState, nextState);
	      if (Array.isArray(hooks)) transitionHooks.unshift.apply(transitionHooks, hooks);

	      (0, _AsyncUtils.loopAsync)(transitionHooks.length, function (index, next, done) {
	        transitionHooks[index](nextState, transition, function (error) {
	          if (error || transition.isCancelled) {
	            done(error); // No need to continue.
	          } else {
	            next();
	          }
	        });
	      }, function (error) {
	        if (error || transition.isCancelled) {
	          callback(error, null, transition);
	        } else {
	          (0, _RoutingUtils.getComponents)(nextState.branch, function (error, components) {
	            if (error || transition.isCancelled) {
	              callback(error, null, transition);
	            } else {
	              nextState.components = components;
	              callback(null, nextState, transition);
	            }
	          });
	        }
	      });
	    }
	  });
	}

	var Router = _react2['default'].createClass({
	  displayName: 'Router',

	  mixins: [_RouterContextMixin2['default'], _ScrollManagementMixin2['default']],

	  statics: {

	    /**
	     * Runs a transition to the given location using the given routes and
	     * transition hooks (optional) and calls callback(error, state, transition)
	     * when finished. This is primarily useful for server-side rendering.
	     */
	    run: function run(routes, location, transitionHooks, callback) {
	      if (typeof transitionHooks === 'function') {
	        callback = transitionHooks;
	        transitionHooks = null;
	      }

	      (0, _invariant2['default'])(typeof callback === 'function', 'Router.run needs a callback');

	      runTransition(null, routes, location, transitionHooks, callback);
	    }

	  },

	  propTypes: {
	    createElement: func.isRequired,
	    onAbort: func,
	    onError: func,
	    onUpdate: func,

	    // Client-side
	    history: _PropTypes.history,
	    routes: _PropTypes.routes,
	    // Routes may also be given as children (JSX)
	    children: _PropTypes.routes,

	    // Server-side
	    location: _PropTypes.location,
	    branch: _PropTypes.routes,
	    params: object,
	    components: arrayOf(_PropTypes.components)
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react.createElement
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isTransitioning: false,
	      location: null,
	      branch: null,
	      params: null,
	      components: null
	    };
	  },

	  _updateState: function _updateState(location) {
	    var _this = this;

	    (0, _invariant2['default'])((0, _Location.isLocation)(location), 'A <Router> needs a valid Location');

	    var hooks = this.transitionHooks;
	    if (hooks) hooks = hooks.map(function (hook) {
	      return (0, _RoutingUtils.createTransitionHook)(hook, _this);
	    });

	    this.setState({ isTransitioning: true });

	    runTransition(this.state, this.routes, location, hooks, function (error, state, transition) {
	      if (error) {
	        _this.handleError(error);
	      } else if (transition.isCancelled) {
	        if (transition.redirectInfo) {
	          var _transition$redirectInfo = transition.redirectInfo;
	          var pathname = _transition$redirectInfo.pathname;
	          var query = _transition$redirectInfo.query;
	          var state = _transition$redirectInfo.state;

	          _this.replaceWith(pathname, query, state);
	        } else {
	          (0, _invariant2['default'])(_this.state.location, 'You may not abort the initial transition');

	          _this.handleAbort(transition.abortReason);
	        }
	      } else if (state == null) {
	        (0, _warning2['default'])(false, 'Location "%s" did not match any routes', location.pathname);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }

	      _this.setState({ isTransitioning: false });
	    });
	  },

	  /**
	   * Adds a transition hook that runs before all route hooks in a
	   * transition. The signature is the same as route transition hooks.
	   */
	  addTransitionHook: function addTransitionHook(hook) {
	    if (!this.transitionHooks) this.transitionHooks = [];

	    this.transitionHooks.push(hook);
	  },

	  /**
	   * Removes the given transition hook.
	   */
	  removeTransitionHook: function removeTransitionHook(hook) {
	    if (this.transitionHooks) this.transitionHooks = this.transitionHooks.filter(function (h) {
	      return h !== hook;
	    });
	  },

	  handleAbort: function handleAbort(reason) {
	    if (this.props.onAbort) {
	      this.props.onAbort.call(this, reason);
	    } else {
	      // The best we can do here is goBack so the location state reverts
	      // to what it was. However, we also set a flag so that we know not
	      // to run through _updateState again since state did not change.
	      this._ignoreNextHistoryChange = true;
	      this.goBack();
	    }
	  },

	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably originated in getChildRoutes or getComponents.
	    }
	  },

	  handleHistoryChange: function handleHistoryChange() {
	    if (this._ignoreNextHistoryChange) {
	      this._ignoreNextHistoryChange = false;
	    } else {
	      this._updateState(this.props.history.location);
	    }
	  },

	  componentWillMount: function componentWillMount() {
	    var _props = this.props;
	    var history = _props.history;
	    var routes = _props.routes;
	    var children = _props.children;
	    var location = _props.location;
	    var branch = _props.branch;
	    var params = _props.params;
	    var components = _props.components;

	    if (history) {
	      (0, _invariant2['default'])(routes || children, 'Client-side <Router>s need routes. Try using <Router routes> or ' + 'passing your routes as nested <Route> children');

	      this.routes = (0, _RouteUtils.createRoutes)(routes || children);

	      if (typeof history.setup === 'function') history.setup();

	      // We need to listen first in case we redirect immediately.
	      if (history.addChangeListener) history.addChangeListener(this.handleHistoryChange);

	      this._updateState(history.location);
	    } else {
	      (0, _invariant2['default'])(location && branch && params && components, 'Server-side <Router>s need location, branch, params, and components ' + 'props. Try using Router.run to get all the props you need');

	      this.setState({ location: location, branch: branch, params: params, components: components });
	    }
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    (0, _invariant2['default'])(this.props.history === nextProps.history, '<Router history> may not be changed');

	    if (nextProps.history) {
	      var currentRoutes = this.props.routes || this.props.children;
	      var nextRoutes = nextProps.routes || nextProps.children;

	      if (currentRoutes !== nextRoutes) {
	        this.routes = (0, _RouteUtils.createRoutes)(nextRoutes);

	        // Call this here because _updateState
	        // uses this.routes to determine state.
	        if (nextProps.history.location) this._updateState(nextProps.history.location);
	      }
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var history = this.props.history;

	    if (history && history.removeChangeListener) history.removeChangeListener(this.handleHistoryChange);
	  },

	  _createElement: function _createElement(component, props) {
	    return typeof component === 'function' ? this.props.createElement(component, props) : null;
	  },

	  render: function render() {
	    var _this2 = this;

	    var _state = this.state;
	    var branch = _state.branch;
	    var params = _state.params;
	    var components = _state.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = branch[index];
	        var routeParams = (0, _RoutingUtils.getRouteParams)(route, params);
	        var props = _extends({}, _this2.state, { route: route, routeParams: routeParams });

	        if ((0, _react.isValidElement)(element)) {
	          props.children = element;
	        } else if (element) {
	          // In render, do var { header, sidebar } = this.props;
	          _extends(props, element);
	        }

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) if (components.hasOwnProperty(key)) elements[key] = _this2._createElement(components[key], props);

	          return elements;
	        }

	        return _this2._createElement(components, props);
	      }, element);
	    }

	    (0, _invariant2['default'])(element === null || element === false || (0, _react.isValidElement)(element), 'The root route must render a single element');

	    return element;
	  }

	});

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var __DEV__ = process.env.NODE_ENV !== 'production';

	var warning = function() {};

	if (__DEV__) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var __DEV__ = process.env.NODE_ENV !== 'production';

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (__DEV__) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	exports.hashAsync = hashAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      currentTurn += 1;
	      work.call(this, currentTurn - 1, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false;
	  var doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

	function hashAsync(object, work, callback) {
	  var keys = Object.keys(object);

	  mapAsync(keys, function (key, index, callback) {
	    work(object[key], callback);
	  }, function (error, valuesArray) {
	    if (error) {
	      callback(error);
	    } else {
	      var values = valuesArray.reduce(function (memo, results, index) {
	        memo[keys[index]] = results;
	        return memo;
	      }, {});

	      callback(null, values);
	    }
	  });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	function isValidChild(object) {
	  return object == null || (0, _react.isValidElement)(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      if (error instanceof Error) (0, _warning2['default'])(false, error.message);
	    }
	  }
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = _extends({}, type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    route.childRoutes = createRoutesFromReactChildren(route.children);
	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router';
	 *   
	 *   var routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   );
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if ((0, _react.isValidElement)(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        routes.push(element.type.createRouteFromReactElement(element));
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (!Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getState = getState;
	exports.createTransitionHook = createTransitionHook;
	exports.getTransitionHooks = getTransitionHooks;
	exports.getComponents = getComponents;
	exports.getRouteParams = getRouteParams;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(9);

	var _URLUtils = __webpack_require__(11);

	var _AsyncUtils = __webpack_require__(8);

	function getChildRoutes(route, locationState, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(locationState, callback);
	  } else {
	    callback();
	  }
	}

	function getIndexRoute(route, locationState, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(callback, locationState);
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduceRight(function (params, paramName, index) {
	    var paramValue = paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].unshift(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [paramValue, params[paramName]];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, pathname, locationState, callback) {
	  var _matchPattern = (0, _URLUtils.matchPattern)(route.path, pathname);

	  var remainingPathname = _matchPattern.remainingPathname;
	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  var isExactMatch = remainingPathname === '';

	  if (isExactMatch && route.path) {
	    var params = createParams(paramNames, paramValues);
	    var branch = [route];

	    getIndexRoute(route, locationState, function (error, indexRoute) {
	      if (error) {
	        callback(error);
	      } else {
	        if (indexRoute) branch.push(indexRoute);

	        callback(null, { params: params, branch: branch });
	      }
	    });
	  } else if (remainingPathname != null) {
	    // This route matched at least some of the path.
	    getChildRoutes(route, locationState, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, remainingPathname, locationState, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            assignParams(match.params, paramNames, paramValues);
	            match.branch.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        });
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}

	function matchRoutes(routes, pathname, locationState, callback) {
	  routes = (0, _RouteUtils.createRoutes)(routes);

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], pathname, locationState, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object may have the
	 * following properties:
	 *
	 * - branch       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may return synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */

	function getState(routes, location, callback) {
	  matchRoutes(routes, (0, _URLUtils.stripLeadingSlashes)(location.pathname), location.state, callback);
	}

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _URLUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Runs a diff on the two router states and returns an array of two
	 * arrays: 1) the routes that we are leaving, starting with the leaf
	 * route and 2) the routes that we are entering, ending with the leaf
	 * route.
	 */
	function computeDiff(prevState, nextState) {
	  var fromRoutes = prevState && prevState.branch;
	  var toRoutes = nextState.branch;

	  var leavingRoutes, enteringRoutes;
	  if (fromRoutes) {
	    leavingRoutes = fromRoutes.filter(function (route) {
	      return toRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });

	    // onLeave hooks start at the leaf route.
	    leavingRoutes.reverse();

	    enteringRoutes = toRoutes.filter(function (route) {
	      return fromRoutes.indexOf(route) === -1 || leavingRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leavingRoutes = [];
	    enteringRoutes = toRoutes;
	  }

	  return [leavingRoutes, enteringRoutes];
	}

	function createTransitionHook(fn, context) {
	  return function (nextState, transition, callback) {
	    if (fn.length > 2) {
	      fn.call(context, nextState, transition, callback);
	    } else {
	      // Assume fn executes synchronously and
	      // automatically call the callback for them.
	      fn.call(context, nextState, transition);
	      callback();
	    }
	  };
	}

	function getTransitionHooksFromRoutes(routes, hookName) {
	  return routes.reduce(function (hooks, route) {
	    if (route[hookName]) hooks.push(createTransitionHook(route[hookName], route));

	    return hooks;
	  }, []);
	}

	/**
	 * Compiles and returns an array of transition hook functions that
	 * should be called before we transition to a new state. Transition
	 * hook signatures are:
	 *
	 *   - route.onLeave(nextState, transition[, callback ])
	 *   - route.onEnter(nextState, transition[, callback ])
	 *
	 * Transition hooks run in order from the leaf route in the branch
	 * we're leaving, up the tree to the common parent route, and back
	 * down the branch we're entering to the leaf route.
	 *
	 * If a transition hook needs to execute asynchronously it may have
	 * a 3rd argument that it should call when it is finished. Otherwise
	 * the transition executes synchronously.
	 */

	function getTransitionHooks(prevState, nextState) {
	  var _computeDiff = computeDiff(prevState, nextState);

	  var leavingRoutes = _computeDiff[0];
	  var enteringRoutes = _computeDiff[1];

	  var hooks = getTransitionHooksFromRoutes(leavingRoutes, 'onLeave');

	  hooks.push.apply(hooks, getTransitionHooksFromRoutes(enteringRoutes, 'onEnter'));

	  return hooks;
	}

	function getComponentsForRoute(route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponents) {
	    route.getComponents(callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may return synchronously if no routes have an
	 * asynchronous getComponents method.
	 */

	function getComponents(routes, callback) {
	  (0, _AsyncUtils.mapAsync)(routes, function (route, index, callback) {
	    getComponentsForRoute(route, callback);
	  }, callback);
	}

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */

	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = (0, _URLUtils.getParamNames)(route.path);

	  for (var p in params) if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];

	  return routeParams;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.stringifyQuery = stringifyQuery;
	exports.getPathname = getPathname;
	exports.getQueryString = getQueryString;
	exports.stripLeadingSlashes = stripLeadingSlashes;
	exports.isAbsolutePath = isAbsolutePath;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _qs = __webpack_require__(12);

	var _qs2 = _interopRequireDefault(_qs);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var parseQueryString = _qs2['default'].parse;

	exports.parseQueryString = parseQueryString;

	function stringifyQuery(query) {
	  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
	}

	var queryMatcher = /\?([\s\S]*)$/;

	function getPathname(path) {
	  return path.replace(queryMatcher, '');
	}

	function getQueryString(path) {
	  var match = path.match(queryMatcher);
	  return match ? match[1] : '';
	}

	function stripLeadingSlashes(path) {
	  return path ? path.replace(/^\/+/, '') : '';
	}

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  var _compilePattern2 = compilePattern(stripLeadingSlashes(pattern));

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Ignore trailing slashes

	  var captureRemaining = tokens[tokens.length - 1] !== '*';

	  if (captureRemaining) regexpSource += '([\\s\\S]*?)';

	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

	  var remainingPathname, paramValues;
	  if (match != null) {
	    paramValues = Array.prototype.slice.call(match, 1).map(function (v) {
	      return v != null ? decodeURIComponent(v.replace(/\+/g, '%20')) : v;
	    });

	    if (captureRemaining) {
	      remainingPathname = paramValues.pop();
	    } else {
	      remainingPathname = pathname.replace(match[0], '');
	    }
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, stripLeadingSlashes(pathname));

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token, paramName, paramValue;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing splat #%s for path "%s"', splatIndex, pattern);

	      if (paramValue != null) pathname += encodeURI(paramValue).replace(/%20/g, '+');
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing "%s" parameter for path "%s"', paramName, pattern);

	      if (paramValue != null) pathname += encodeURIComponent(paramValue).replace(/%20/g, '+');
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(14);
	var Parse = __webpack_require__(16);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(15);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	            return prefix;
	        }
	    }
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix) {

	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

	    var keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	// Load modules


	// Declare internals

	var internals = {};


	exports.arrayToObject = function (source) {

	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else {
	            target[source] = true;
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target);
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};


	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	        obj.constructor.isBuffer &&
	        obj.constructor.isBuffer(obj));
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(15);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (Object.prototype.hasOwnProperty(key)) {
	                continue;
	            }

	            if (!obj.hasOwnProperty(key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            index <= options.arrayLimit) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Don't allow them to overwrite object prototype properties

	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return {};
	    }

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Location = __webpack_require__(18);

	var _Location2 = _interopRequireDefault(_Location);

	var _History = __webpack_require__(21);

	var _History2 = _interopRequireDefault(_History);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	var arrayOf = _React$PropTypes.arrayOf;
	var instanceOf = _React$PropTypes.instanceOf;
	var oneOfType = _React$PropTypes.oneOfType;
	var element = _React$PropTypes.element;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var component = func;
	var components = oneOfType([component, object]);
	var history = instanceOf(_History2['default']);
	var location = instanceOf(_Location2['default']);
	var route = oneOfType([object, element]);
	var routes = oneOfType([route, arrayOf(route)]);

	module.exports = {
	  falsy: falsy,
	  component: component,
	  components: components,
	  history: history,
	  location: location,
	  route: route,
	  routes: routes
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _NavigationTypes = __webpack_require__(19);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	/**
	 * A Location answers two important questions:
	 *
	 * 1. Where am I?
	 * 2. How did I get here?
	 */

	var Location = (function () {
	  function Location() {
	    var pathname = arguments[0] === undefined ? '/' : arguments[0];
	    var query = arguments[1] === undefined ? null : arguments[1];
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var navigationType = arguments[3] === undefined ? _NavigationTypes2['default'].POP : arguments[3];

	    _classCallCheck(this, Location);

	    this.pathname = pathname;
	    this.query = query;
	    this.state = state;
	    this.navigationType = navigationType;
	  }

	  Location.isLocation = function isLocation(object) {
	    return object instanceof Location;
	  };

	  return Location;
	})();

	exports['default'] = Location;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _keymirror = __webpack_require__(20);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	var NavigationTypes = (0, _keymirror2['default'])({

	  /**
	   * Indicates that navigation was caused by a call to history.push.
	   */
	  PUSH: null,

	  /**
	   * Indicates that navigation was caused by a call to history.replace.
	   */
	  REPLACE: null,

	  /**
	   * Indicates that navigation was caused by some other action such
	   * as using a browser's back/forward buttons and/or manually manipulating
	   * the URL in a browser's location bar. This is the default.
	   *
	   * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	   * for more information.
	   */
	  POP: null

	});

	exports['default'] = NavigationTypes;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(11);

	var _Location = __webpack_require__(18);

	var _Location2 = _interopRequireDefault(_Location);

	var RequiredHistorySubclassMethods = ['pushState', 'replaceState', 'go'];

	function createRandomKey() {
	  return Math.random().toString(36).substr(2);
	}

	/**
	 * A history interface that normalizes the differences across
	 * various environments and implementations. Requires concrete
	 * subclasses to implement the following methods:
	 *
	 * - pushState(state, path)
	 * - replaceState(state, path)
	 * - go(n)
	 */

	var History = (function () {
	  function History() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, History);

	    RequiredHistorySubclassMethods.forEach(function (method) {
	      (0, _invariant2['default'])(typeof this[method] === 'function', '%s needs a "%s" method', this.constructor.name, method);
	    }, this);

	    this.parseQueryString = options.parseQueryString || _URLUtils.parseQueryString;
	    this.changeListeners = [];
	    this.location = null;
	  }

	  History.prototype._notifyChange = function _notifyChange() {
	    for (var i = 0, len = this.changeListeners.length; i < len; ++i) this.changeListeners[i].call(this);
	  };

	  History.prototype.addChangeListener = function addChangeListener(listener) {
	    this.changeListeners.push(listener);
	  };

	  History.prototype.removeChangeListener = function removeChangeListener(listener) {
	    this.changeListeners = this.changeListeners.filter(function (li) {
	      return li !== listener;
	    });
	  };

	  History.prototype.back = function back() {
	    this.go(-1);
	  };

	  History.prototype.forward = function forward() {
	    this.go(1);
	  };

	  History.prototype._createState = function _createState(state) {
	    state = state || {};

	    if (!state.key) state.key = createRandomKey();

	    return state;
	  };

	  History.prototype.createLocation = function createLocation(path, state, navigationType) {
	    var pathname = (0, _URLUtils.getPathname)(path);
	    var queryString = (0, _URLUtils.getQueryString)(path);
	    var query = queryString ? this.parseQueryString(queryString) : null;
	    return new _Location2['default'](pathname, query, state, navigationType);
	  };

	  return History;
	})();

	exports['default'] = History;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(11);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	function pathnameIsActive(pathname, activePathname) {
	  if ((0, _URLUtils.stripLeadingSlashes)(activePathname).indexOf((0, _URLUtils.stripLeadingSlashes)(pathname)) === 0) return true; // This quick comparison satisfies most use cases.

	  // TODO: Implement a more stringent comparison that checks
	  // to see if the pathname matches any routes (and params)
	  // in the currently active branch.

	  return false;
	}

	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  for (var p in query) if (query.hasOwnProperty(p) && String(query[p]) !== String(activeQuery[p])) return false;

	  return true;
	}

	var RouterContextMixin = {

	  propTypes: {
	    stringifyQuery: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      stringifyQuery: _URLUtils.stringifyQuery
	    };
	  },

	  childContextTypes: {
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      router: this
	    };
	  },

	  /**
	   * Returns a full URL path from the given pathname and query.
	   */
	  makePath: function makePath(pathname, query) {
	    if (query) {
	      if (typeof query !== 'string') query = this.props.stringifyQuery(query);

	      if (query !== '') return pathname + '?' + query;
	    }

	    return pathname;
	  },

	  /**
	   * Returns a string that may safely be used to link to the given
	   * pathname and query.
	   */
	  makeHref: function makeHref(pathname, query) {
	    var path = this.makePath(pathname, query);
	    var history = this.props.history;

	    if (history && history.makeHref) return history.makeHref(path);

	    return path;
	  },

	  /**
	   * Pushes a new Location onto the history stack.
	   */
	  transitionTo: function transitionTo(pathname, query) {
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#transitionTo is client-side only (needs history)');

	    history.pushState(state, this.makePath(pathname, query));
	  },

	  /**
	   * Replaces the current Location on the history stack.
	   */
	  replaceWith: function replaceWith(pathname, query) {
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#replaceWith is client-side only (needs history)');

	    history.replaceState(state, this.makePath(pathname, query));
	  },

	  /**
	   * Navigates forward/backward n entries in the history stack.
	   */
	  go: function go(n) {
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#go is client-side only (needs history)');

	    history.go(n);
	  },

	  /**
	   * Navigates back one entry in the history stack. This is identical to
	   * the user clicking the browser's back button.
	   */
	  goBack: function goBack() {
	    this.go(-1);
	  },

	  /**
	   * Navigates forward one entry in the history stack. This is identical to
	   * the user clicking the browser's forward button.
	   */
	  goForward: function goForward() {
	    this.go(1);
	  },

	  /**
	   * Returns true if a <Link> to the given pathname/query combination is
	   * currently active.
	   */
	  isActive: function isActive(pathname, query) {
	    var location = this.state.location;

	    if (location == null) return false;

	    return pathnameIsActive(pathname, location.pathname) && queryIsActive(query, location.query);
	  }

	};

	exports['default'] = RouterContextMixin;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _DOMUtils = __webpack_require__(24);

	var _NavigationTypes = __webpack_require__(19);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	var func = _react2['default'].PropTypes.func;

	function getCommonAncestors(branch, otherBranch) {
	  return branch.filter(function (route) {
	    return otherBranch.indexOf(route) !== -1;
	  });
	}

	function shouldUpdateScrollPosition(state, prevState) {
	  var location = state.location;
	  var branch = state.branch;
	  var prevLocation = prevState.location;
	  var prevBranch = prevState.branch;

	  // When an onEnter hook uses transition.to to redirect
	  // on the initial load prevLocation is null, so assume
	  // we don't want to update the scroll position.
	  if (prevLocation === null) return false;

	  // Don't update scroll position if only the query has changed.
	  if (location.pathname === prevLocation.pathname) return false;

	  // Don't update scroll position if any of the ancestors
	  // has `ignoreScrollPosition` set to `true` on the route.
	  var sharedAncestors = getCommonAncestors(branch, prevBranch);
	  if (sharedAncestors.some(function (route) {
	    return route.ignoreScrollBehavior;
	  })) return false;

	  return true;
	}

	function updateWindowScrollPosition(navigationType, scrollX, scrollY) {
	  if (_DOMUtils.canUseDOM) {
	    if (navigationType === _NavigationTypes2['default'].POP) {
	      (0, _DOMUtils.setWindowScrollPosition)(scrollX, scrollY);
	    } else {
	      (0, _DOMUtils.setWindowScrollPosition)(0, 0);
	    }
	  }
	}

	var ScrollManagementMixin = {

	  propTypes: {
	    shouldUpdateScrollPosition: func.isRequired,
	    updateScrollPosition: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      shouldUpdateScrollPosition: shouldUpdateScrollPosition,
	      updateScrollPosition: updateWindowScrollPosition
	    };
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    var location = this.state.location;

	    var locationState = location && location.state;

	    if (locationState && this.props.shouldUpdateScrollPosition(this.state, prevState)) {
	      var scrollX = locationState.scrollX;
	      var scrollY = locationState.scrollY;

	      this.props.updateScrollPosition(location.navigationType, scrollX || 0, scrollY || 0);
	    }
	  }

	};

	exports['default'] = ScrollManagementMixin;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.getWindowScrollPosition = getWindowScrollPosition;
	exports.setWindowScrollPosition = setWindowScrollPosition;
	exports.supportsHistory = supportsHistory;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	exports.canUseDOM = canUseDOM;

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search;
	}

	function getWindowScrollPosition() {
	  return {
	    scrollX: window.pageXOffset || document.documentElement.scrollLeft,
	    scrollY: window.pageYOffset || document.documentElement.scrollTop
	  };
	}

	function setWindowScrollPosition(scrollX, scrollY) {
	  window.scrollTo(scrollX, scrollY);
	}

	/**
	 * taken from modernizr
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = (function () {
	  function Transition() {
	    _classCallCheck(this, Transition);

	    this.isCancelled = false;
	    this.redirectInfo = null;
	    this.abortReason = null;
	  }

	  Transition.prototype.to = function to(pathname, query, state) {
	    this.redirectInfo = { pathname: pathname, query: query, state: state };
	    this.isCancelled = true;
	  };

	  Transition.prototype.abort = function abort(reason) {
	    this.abortReason = reason;
	    this.isCancelled = true;
	  };

	  return Transition;
	})();

	exports["default"] = Transition;
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _React$PropTypes = _react2['default'].PropTypes;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	/**
	 * <Link> components are used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name (or the
	 * value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along query string parameters
	 * using the `query` prop.
	 *
	 *   <Link to="/posts/123" query={{ show:true }}/>
	 */
	var Link = _react2['default'].createClass({
	  displayName: 'Link',

	  contextTypes: {
	    router: object
	  },

	  propTypes: {
	    activeStyle: object,
	    activeClassName: string,
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onClick: func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: '',
	      activeClassName: 'active',
	      style: {}
	    };
	  },

	  handleClick: function handleClick(event) {
	    var allowTransition = true;
	    var clickResult;

	    if (this.props.onClick) clickResult = this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

	    event.preventDefault();

	    if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.query, this.props.state);
	  },

	  render: function render() {
	    var router = this.context.router;
	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;

	    var props = _extends({}, this.props, {
	      href: router.makeHref(to, query),
	      onClick: this.handleClick
	    });

	    // ignore if rendered outside of the context of a router, simplifies unit testing
	    if (router && router.isActive(to, query)) {
	      if (props.activeClassName) props.className += props.className !== '' ? ' ' + props.activeClassName : props.activeClassName;

	      if (props.activeStyle) props.style = _extends({}, props.style, props.activeStyle);
	    }

	    return _react2['default'].createElement('a', props);
	  }

	});

	exports.Link = Link;
	exports['default'] = Link;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(9);

	var _URLUtils = __webpack_require__(11);

	var _PropTypes = __webpack_require__(17);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	var Redirect = _react2['default'].createClass({
	  displayName: 'Redirect',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, transition) {
	        var location = nextState.location;
	        var params = nextState.params;

	        var pathname = route.to ? (0, _URLUtils.formatPattern)(route.to, params) : location.pathname;

	        transition.to(pathname, route.query || location.query, route.state || location.state);
	      };

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _PropTypes.falsy,
	    children: _PropTypes.falsy
	  },

	  render: function render() {
	    (0, _invariant2['default'])(false, '<Redirect> elements are for router configuration only and should not be rendered');
	  }

	});

	exports.Redirect = Redirect;
	exports['default'] = Redirect;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(9);

	var _PropTypes = __webpack_require__(17);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var bool = _React$PropTypes.bool;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the page when
	 * the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 */
	var Route = _react2['default'].createClass({
	  displayName: 'Route',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.handler) {
	        (0, _warning2['default'])(false, '<Route handler> is deprecated, use <Route component> instead');
	        route.component = route.handler;
	        delete route.handler;
	      }

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    ignoreScrollBehavior: bool,
	    handler: _PropTypes.component,
	    component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponents: func
	  },

	  render: function render() {
	    (0, _invariant2['default'])(false, '<Route> elements are for router configuration only and should not be rendered');
	  }

	});

	exports.Route = Route;
	exports['default'] = Route;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * A mixin for components that modify the URL.
	 *
	 * Example:
	 *
	 *   import { Navigation } from 'react-router';
	 *
	 *   var MyLink = React.createClass({
	 *     mixins: [ Navigation ],
	 *     handleClick(event) {
	 *       event.preventDefault();
	 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
	 *     },
	 *     render() {
	 *       return (
	 *         <a onClick={this.handleClick}>Click me!</a>
	 *       );
	 *     }
	 *   });
	 */
	var Navigation = {

	  contextTypes: {
	    router: object.isRequired
	  }

	};

	var RouterNavigationMethods = ['makePath', 'makeHref', 'transitionTo', 'replaceWith', 'go', 'goBack', 'goForward'];

	RouterNavigationMethods.forEach(function (method) {
	  Navigation[method] = function () {
	    var router = this.context.router;
	    return router[method].apply(router, arguments);
	  };
	});

	exports['default'] = Navigation;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var object = _react2['default'].PropTypes.object;

	var TransitionHook = {

	  contextTypes: {
	    router: object.isRequired
	  },

	  componentDidMount: function componentDidMount() {
	    (0, _warning2['default'])(typeof this.routerWillLeave === 'function', 'Components that mixin TransitionHook should have a routerWillLeave method, check %s', this.constructor.displayName || this.constructor.name);

	    if (this.routerWillLeave) this.context.router.addTransitionHook(this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.routerWillLeave) this.context.router.removeTransitionHook(this.routerWillLeave);
	  }

	};

	exports['default'] = TransitionHook;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * A mixin for components that need to know the path, routes, URL
	 * params and query that are currently active.
	 *
	 * Example:
	 *
	 *   import { State } from 'react-router';
	 *
	 *   var AboutLink = React.createClass({
	 *     mixins: [ State ],
	 *     render() {
	 *       var className = this.props.className;
	 *
	 *       if (this.isActive('about'))
	 *         className += ' is-active';
	 *
	 *       return React.createElement('a', { className: className }, this.props.children);
	 *     }
	 *   });
	 */
	var State = {

	  contextTypes: {
	    router: object.isRequired
	  }

	};

	var RouterStateMethods = ['isActive'];

	RouterStateMethods.forEach(function (method) {
	  State[method] = function () {
	    var router = this.context.router;
	    return router[method].apply(router, arguments);
	  };
	});

	exports['default'] = State;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DOMHistory2 = __webpack_require__(33);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _DOMUtils = __webpack_require__(24);

	var _NavigationTypes = __webpack_require__(19);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	function updateCurrentState(extraState) {
	  var state = window.history.state;

	  if (state) window.history.replaceState(_extends(state, extraState), '');
	}

	/**
	 * A history implementation for DOM environments that support the
	 * HTML5 history API (pushState, replaceState, and the popstate event).
	 * Provides the cleanest URLs and should always be used in browser
	 * environments if possible.
	 *
	 * Note: BrowserHistory automatically falls back to using full page
	 * refreshes if HTML5 history is not available, so URLs are always
	 * the same across browsers.
	 */

	var BrowserHistory = (function (_DOMHistory) {
	  function BrowserHistory(options) {
	    _classCallCheck(this, BrowserHistory);

	    _DOMHistory.call(this, options);
	    this.handlePopState = this.handlePopState.bind(this);
	    this.isSupported = (0, _DOMUtils.supportsHistory)();
	  }

	  _inherits(BrowserHistory, _DOMHistory);

	  BrowserHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var state = null;

	    if (this.isSupported) {
	      var historyState = window.history.state;
	      state = this._createState(historyState);

	      if (!historyState || !historyState.key) window.history.replaceState(state, '');
	    }

	    this.location = this.createLocation((0, _DOMUtils.getWindowPath)(), state, navigationType);
	  };

	  BrowserHistory.prototype.setup = function setup() {
	    if (this.location == null) this._updateLocation();
	  };

	  BrowserHistory.prototype.handlePopState = function handlePopState(event) {
	    if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	    this._updateLocation(_NavigationTypes2['default'].POP);
	    this._notifyChange();
	  };

	  BrowserHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);

	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.attachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  BrowserHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);

	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.detachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-pushstate

	  BrowserHistory.prototype.pushState = function pushState(state, path) {
	    if (this.isSupported) {
	      updateCurrentState(this.getScrollPosition());

	      state = this._createState(state);

	      window.history.pushState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);
	      this._notifyChange();
	    } else {
	      window.location = path;
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-replacestate

	  BrowserHistory.prototype.replaceState = function replaceState(state, path) {
	    if (this.isSupported) {
	      state = this._createState(state);

	      window.history.replaceState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);
	      this._notifyChange();
	    } else {
	      window.location.replace(path);
	    }
	  };

	  return BrowserHistory;
	})(_DOMHistory3['default']);

	var history = new BrowserHistory();
	exports.history = history;
	exports['default'] = BrowserHistory;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _History2 = __webpack_require__(21);

	var _History3 = _interopRequireDefault(_History2);

	var _DOMUtils = __webpack_require__(24);

	/**
	 * A history interface that assumes a DOM environment.
	 */

	var DOMHistory = (function (_History) {
	  function DOMHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, DOMHistory);

	    _History.call(this, options);
	    this.getScrollPosition = options.getScrollPosition || _DOMUtils.getWindowScrollPosition;
	  }

	  _inherits(DOMHistory, _History);

	  DOMHistory.prototype.go = function go(n) {
	    if (n === 0) return;

	    window.history.go(n);
	  };

	  return DOMHistory;
	})(_History3['default']);

	exports['default'] = DOMHistory;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _DOMHistory2 = __webpack_require__(33);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _NavigationTypes = __webpack_require__(19);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	var _DOMUtils = __webpack_require__(24);

	var _URLUtils = __webpack_require__(11);

	var DefaultQueryKey = '_qk';

	function ensureSlash() {
	  var path = (0, _DOMUtils.getHashPath)();

	  if ((0, _URLUtils.isAbsolutePath)(path)) return true;

	  (0, _DOMUtils.replaceHashPath)('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + ('' + key + '=' + value);
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	function saveState(path, queryKey, state) {
	  window.sessionStorage.setItem(state.key, JSON.stringify(state));
	  return addQueryStringValueToPath(path, queryKey, state.key);
	}

	function readState(path, queryKey) {
	  var sessionKey = getQueryStringValueFromPath(path, queryKey);
	  var json = sessionKey && window.sessionStorage.getItem(sessionKey);

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {}
	  }

	  return null;
	}

	function updateCurrentState(queryKey, extraState) {
	  var path = (0, _DOMUtils.getHashPath)();
	  var state = readState(path, queryKey);

	  if (state) saveState(path, queryKey, _extends(state, extraState));
	}

	/**
	 * A history implementation for DOM environments that uses window.location.hash
	 * to store the current path. This is essentially a hack for older browsers that
	 * do not support the HTML5 history API (IE <= 9).
	 *
	 * Support for persistence of state across page refreshes is provided using a
	 * combination of a URL query string parameter and DOM storage. However, this
	 * support is not enabled by default. In order to use it, create your own
	 * HashHistory.
	 *
	 *   import HashHistory from 'react-router/lib/HashHistory';
	 *   var StatefulHashHistory = new HashHistory({ queryKey: '_key' });
	 *   React.render(<Router history={StatefulHashHistory} .../>, ...);
	 */

	var HashHistory = (function (_DOMHistory) {
	  function HashHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, HashHistory);

	    _DOMHistory.call(this, options);
	    this.handleHashChange = this.handleHashChange.bind(this);
	    this.queryKey = options.queryKey;

	    if (typeof this.queryKey !== 'string') this.queryKey = this.queryKey ? DefaultQueryKey : null;
	  }

	  _inherits(HashHistory, _DOMHistory);

	  HashHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var path = (0, _DOMUtils.getHashPath)();
	    var state = this.queryKey ? readState(path, this.queryKey) : null;
	    this.location = this.createLocation(path, state, navigationType);
	  };

	  HashHistory.prototype.setup = function setup() {
	    if (this.location == null) {
	      ensureSlash();
	      this._updateLocation();
	    }
	  };

	  HashHistory.prototype.handleHashChange = function handleHashChange() {
	    if (!ensureSlash()) return;

	    if (this._ignoreNextHashChange) {
	      this._ignoreNextHashChange = false;
	    } else {
	      this._updateLocation(_NavigationTypes2['default'].POP);
	      this._notifyChange();
	    }
	  };

	  HashHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);

	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('hashchange', this.handleHashChange, false);
	      } else {
	        window.attachEvent('onhashchange', this.handleHashChange);
	      }
	    }
	  };

	  HashHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);

	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('hashchange', this.handleHashChange, false);
	      } else {
	        window.detachEvent('onhashchange', this.handleHashChange);
	      }
	    }
	  };

	  HashHistory.prototype.pushState = function pushState(state, path) {
	    (0, _warning2['default'])(this.queryKey || state == null, 'HashHistory needs a queryKey in order to persist state');

	    if (this.queryKey) updateCurrentState(this.queryKey, this.getScrollPosition());

	    state = this._createState(state);

	    if (this.queryKey) path = saveState(path, this.queryKey, state);

	    this._ignoreNextHashChange = true;
	    window.location.hash = path;

	    this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);

	    this._notifyChange();
	  };

	  HashHistory.prototype.replaceState = function replaceState(state, path) {
	    state = this._createState(state);

	    if (this.queryKey) path = saveState(path, this.queryKey, state);

	    this._ignoreNextHashChange = true;
	    (0, _DOMUtils.replaceHashPath)(path);

	    this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);

	    this._notifyChange();
	  };

	  HashHistory.prototype.makeHref = function makeHref(path) {
	    return '#' + path;
	  };

	  return HashHistory;
	})(_DOMHistory3['default']);

	var history = new HashHistory();
	exports.history = history;
	exports['default'] = HashHistory;

	// Ignore invalid JSON in session storage.

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(39);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(41);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _commonForecast = __webpack_require__(42);

	var _reactChartjs = __webpack_require__(43);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body() {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Body, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                TabContainer,
	                null,
	                React.createElement(
	                  TabList,
	                  { bsStyle: 'orange75', onTabSelect: this.handleSelect },
	                  React.createElement(
	                    Tab,
	                    { pane: 'tab1', active: true },
	                    'Labour Force Participation Rate'
	                  ),
	                  React.createElement(
	                    Tab,
	                    { pane: 'tab2' },
	                    'Worker Population Ratio'
	                  ),
	                  React.createElement(
	                    Tab,
	                    { pane: 'tab3' },
	                    'Un-Employment Rate'
	                  ),
	                  React.createElement(
	                    Tab,
	                    { pane: 'tab4' },
	                    'Proportion UnEmployment'
	                  )
	                ),
	                React.createElement(
	                  TabContent,
	                  null,
	                  React.createElement(
	                    TabPane,
	                    null,
	                    React.createElement(_commonForecast.LineChart, { bdata: { labels: ["rural", "urban", "rural_urban"], datasets: [{}] }, type: "labour-rate", title: "Labour Force Participation Rate", data: {
	                        labels: ["January", "February", "March", "April", "May", "June", "July"],
	                        datasets: [{}] } })
	                  ),
	                  React.createElement(
	                    TabPane,
	                    null,
	                    React.createElement(_commonForecast.LineChart, { bdata: {
	                        labels: ["rural", "urban", "rural_urban"],
	                        datasets: [{}]
	                      }, type: "worker-population", title: "Worker Population Ratio", data: {
	                        labels: ["January", "February", "March", "April", "May", "June", "July"],
	                        datasets: [{}] } })
	                  ),
	                  React.createElement(
	                    TabPane,
	                    null,
	                    React.createElement(_commonForecast.LineChart, { bdata: {
	                        labels: ["rural", "urban", "rural_urban"],
	                        datasets: [{}]
	                      }, type: "unemployment-rate", title: "Unemployment Rate", data: {
	                        labels: ["January", "February", "March", "April", "May", "June", "July"],
	                        datasets: [{}] } })
	                  ),
	                  React.createElement(
	                    TabPane,
	                    null,
	                    React.createElement(_commonForecast.LineChart, { bdata: {
	                        labels: ["rural", "urban", "rural_urban"],
	                        datasets: [{}]
	                      }, type: "proportion-unemployment", title: "Proportion Unemployed", data: {
	                        labels: ["January", "February", "March", "April", "May", "June", "July"],
	                        datasets: [{}] } })
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {

	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = SidebarMixin;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var openState = !Modernizr.touch ? localStorage.getItem('sidebar-open-state') === 'true' ? true : false : false;

	function SidebarMixin(ComposedComponent) {
	  return React.createClass({
	    displayName: 'SidebarMixin',
	    getInitialState: function getInitialState() {
	      return {
	        open: openState
	      };
	    },
	    isOpen: function isOpen() {
	      return this.state.open === open;
	    },
	    sidebarStateChangeCallback: function sidebarStateChangeCallback(open) {
	      if (this.isOpen()) return;
	      if (open !== undefined) {
	        openState = open;
	      } else {
	        openState = !this.state.open;
	      }
	      this.setState({
	        open: openState // toggle sidebar
	      });
	      localStorage.setItem('sidebar-open-state', openState);
	    },
	    componentWillMount: function componentWillMount() {
	      ReactBootstrap.Dispatcher.on('sidebar', this.sidebarStateChangeCallback);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      ReactBootstrap.Dispatcher.off('sidebar', this.sidebarStateChangeCallback);
	    },
	    render: function render() {
	      return React.createElement(ComposedComponent, _extends({}, this.props, { open: this.state.open }));
	    }
	  });
	}

	var SidebarControlBtn = React.createClass({
	  displayName: 'SidebarControlBtn',

	  getInitialState: function getInitialState() {
	    return {
	      active: this.props.active || false
	    };
	  },
	  handleClick: function handleClick(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', this.props);
	    ReactBootstrap.Dispatcher.emit('sidebar:keychange', this.props.sidebar);
	  },
	  handleState: function handleState(props) {
	    if (props.hasOwnProperty('sidebar')) {
	      if (props.sidebar === this.props.sidebar) {
	        this.setState({ active: true });
	      } else {
	        this.setState({ active: false });
	      }
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    ReactBootstrap.Dispatcher.on('sidebar:controlbtn', this.handleState);
	    var scrollToTop = function scrollToTop() {
	      if ($(window).scrollTop() === 0) return;
	      setTimeout(function () {
	        $('html, body, #body').scrollTop(0);
	        $(window).scrollTop(0);
	        scrollToTop();
	      }, 15);
	    };

	    scrollToTop();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('sidebar:controlbtn', this.handleState);
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-control-btn', {
	      'active': this.state.active
	    }, this.props.className);

	    var props = _extends({
	      tabIndex: '-1',
	      onClick: this.handleClick
	    }, this.props, {
	      className: classes.trim()
	    });
	    return React.createElement(
	      'li',
	      props,
	      React.createElement(
	        'a',
	        { href: '#', tabIndex: '-1' },
	        React.createElement(Icon, { bundle: this.props.bundle, glyph: this.props.glyph })
	      )
	    );
	  }
	});

	exports.SidebarControlBtn = SidebarControlBtn;
	var SidebarControls = React.createClass({
	  displayName: 'SidebarControls',

	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-controls-container', this.props.className);
	    var props = _extends({
	      dir: 'ltr'
	    }, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'div',
	      _extends({}, props, { children: null }),
	      React.createElement(
	        'div',
	        { className: 'sidebar-controls', tabIndex: '-1' },
	        this.props.children
	      )
	    );
	  }
	});

	exports.SidebarControls = SidebarControls;
	var timer = null;
	var Sidebar = React.createClass({
	  displayName: 'Sidebar',

	  getInitialState: function getInitialState() {
	    return {
	      left: this.props.sidebar * 100 + '%',
	      visibility: this.props.sidebar === 0 ? 'visible' : 'hidden'
	    };
	  },
	  handleKeyChange: function handleKeyChange(sidebar) {
	    var _this = this;

	    var newLeft = this.props.sidebar * 100 - sidebar * 100 + '%';
	    this.setState({
	      left: newLeft,
	      visibility: 'visible'
	    }, function () {
	      if (newLeft !== '0%') {
	        setTimeout(function () {
	          _this.setState({ visibility: 'hidden' });
	        }, 300);
	      } else if (newLeft === '0%') {
	        var height = $(React.findDOMNode(_this.refs.innersidebar)).height();
	        if ($('html').hasClass('static')) {
	          $('#body').css('min-height', height + 400);
	        } else {
	          $('#body').css('min-height', '');
	        }
	      }
	    });
	  },
	  updateScrollbar: function updateScrollbar() {
	    if (!Modernizr.touch) {
	      $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('update');
	    }
	  },
	  repositionScrollbar: function repositionScrollbar(child_node, top, height) {
	    clearTimeout(timer);
	    var node = $(React.findDOMNode(this.refs.sidebar));
	    var scrollTo = top - node.offset().top + node.scrollTop();
	    if (node.find(child_node).length) {
	      if (scrollTo > $(window).height() / 2) {
	        this.timer = setTimeout(function () {
	          node.scrollTop(scrollTo - $(window).height() / 2 + 100);
	        }, 15);
	      }
	    }
	    if (!Modernizr.touch) {
	      this.updateScrollbar();
	    }
	  },
	  destroyScrollbar: function destroyScrollbar() {
	    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('destroy');
	  },
	  initializeScrollbar: function initializeScrollbar() {
	    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar({
	      suppressScrollX: true
	    });
	  },
	  componentWillMount: function componentWillMount() {
	    ReactBootstrap.Dispatcher.on('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:keychange', this.handleKeyChange);
	  },
	  componentDidMount: function componentDidMount() {
	    var _this2 = this;

	    if (!Modernizr.touch) {
	      this.initializeScrollbar();
	    }

	    if (this.props.active) {
	      setTimeout(function () {
	        ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', { sidebar: _this2.props.sidebar });
	        ReactBootstrap.Dispatcher.emit('sidebar:keychange', _this2.props.sidebar);
	      }, 15);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:keychange', this.handleKeyChange);
	  },
	  render: function render() {
	    var props = _extends({
	      style: {
	        left: this.state.left,
	        visibility: this.state.visibility,
	        transition: 'all 0.3s ease',
	        OTransition: 'all 0.3s ease',
	        MsTransition: 'all 0.3s ease',
	        MozTransition: 'all 0.3s ease',
	        WebkitTransition: 'all 0.3s ease'
	      }
	    }, this.props, {
	      className: (0, _classnames2['default'])('sidebar', this.props.className)
	    });

	    return React.createElement(
	      'div',
	      _extends({ ref: 'sidebar' }, props, { children: null }),
	      React.createElement(
	        'div',
	        { ref: 'innersidebar' },
	        this.props.children
	      )
	    );
	  }
	});

	exports.Sidebar = Sidebar;
	var SidebarNavItem = React.createClass({
	  displayName: 'SidebarNavItem',

	  timer: null,
	  mixins: [_reactRouter.Navigation, _reactRouter.State],
	  propTypes: {
	    open: React.PropTypes.bool,
	    active: React.PropTypes.bool,
	    href: React.PropTypes.string,
	    autoHeight: React.PropTypes.bool
	  },
	  getInitialState: function getInitialState() {
	    return {
	      open: this.props.open || false,
	      active: this.props.active || false,
	      toggleOpen: this.props.open || false,
	      dir: 'left',
	      opposite: false
	    };
	  },
	  emitOpen: function emitOpen(open) {
	    var node = React.findDOMNode(this.refs.node);
	    if (open) {
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node, open);
	    } else {
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node);
	    }
	  },
	  handleClick: function handleClick(e) {
	    if (!this.props.href) {
	      e.preventDefault();
	      e.stopPropagation();
	    }
	    if (this.props.hasOwnProperty('onClick')) {
	      this.props.onClick();
	    }
	    this.emitOpen();
	  },
	  collapse: function collapse(node, cb) {
	    var _this3 = this;

	    this.setState({
	      toggleOpen: false
	    }, function () {
	      var height = $(node).height();
	      $(node).css('height', height).animate({
	        height: '45px'
	      }, 125, 'easeInOutSine', function () {
	        $(node).css('height', '');
	        try {
	          _this3.setState({
	            open: false,
	            toggleOpen: false
	          }, function () {
	            if (cb) cb();
	          });
	        } catch (e) {}
	      });
	    });
	  },
	  expand: function expand(node, cb, disableAnimation) {
	    var _this4 = this;

	    if (disableAnimation) {
	      $(node).css('height', '').addClass('open');
	    } else {
	      this.setState({
	        toggleOpen: true
	      }, function () {
	        var height = $(node).addClass('open').height();
	        $(node).removeClass('open');
	        $(node).css('height', '45px').animate({
	          height: height
	        }, 125, 'easeInOutSine', function () {
	          $(node).css('height', '');
	          try {
	            _this4.setState({
	              open: true
	            }, function () {
	              if (cb) cb();
	            });
	          } catch (e) {}
	        });
	      });
	    }
	  },
	  handleOpenState: function handleOpenState(child_node, open) {
	    var _this5 = this;

	    clearTimeout(this.timer);
	    this.timer = setTimeout(function () {
	      if (_this5.props.children && _this5.isMounted()) {
	        var node = React.findDOMNode(_this5.refs.node);
	        if (open) {
	          if ($(node).find(child_node).length) {
	            _this5.setState({
	              open: true,
	              toggleOpen: true
	            });
	            _this5.expand(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            }, true);
	          }
	          return;
	        }
	        if ($(node).is(child_node)) {
	          if (_this5.state.open) {
	            _this5.collapse(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            });
	          } else {
	            _this5.expand(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            });
	          }
	          return;
	        }
	        if (!$(node).find(child_node).length) {
	          if (_this5.state.open) _this5.collapse(node);
	        }
	      }
	    }, 15);
	  },
	  handleLayoutDirChange: function handleLayoutDirChange(dir) {
	    this.setState({
	      dir: dir === 'ltr' ? 'left' : 'right',
	      opposite: dir === 'ltr' ? false : true
	    });
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.off('sidebar:openstate', this.handleOpenState);
	  },
	  componentWillMount: function componentWillMount() {
	    ReactBootstrap.Dispatcher.on('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.on('sidebar:openstate', this.handleOpenState);
	  },
	  activateNavItem: function activateNavItem(props) {
	    var _this6 = this;

	    var active = props.active || false;
	    var currentLocation = this.context.router.state.location.pathname;

	    if (!active && props.href) {
	      active = this.isActive(props.href) && currentLocation == props.href;
	    }

	    if (active) {
	      this.emitOpen(true);
	      setTimeout(function () {
	        _this6.setState({ active: true });
	        var node = React.findDOMNode(_this6.refs.node);
	        var height = $(node).height();
	        var top = $(node).offset().top;
	        ReactBootstrap.Dispatcher.emit('sidebar:reposition', node, top, height);
	      }, 15);
	    } else {
	      this.setState({ active: false });
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.activateNavItem(nextProps);
	  },
	  componentDidMount: function componentDidMount() {
	    this.activateNavItem(this.props);
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])({
	      'open': this.state.open,
	      'active': this.state.active
	    });
	    var toggleClasses = (0, _classnames2['default'])({
	      'toggle-button': true,
	      'open': this.state.toggleOpen,
	      'opposite': this.state.opposite
	    });
	    var icon = null,
	        toggleButton = null;
	    if (this.props.children) {
	      toggleButton = React.createElement(Icon, { className: toggleClasses.trim(), bundle: 'fontello', glyph: this.state.dir + '-open-3' });
	    }
	    if (this.props.glyph || this.props.bundle) {
	      icon = React.createElement(Icon, { bundle: this.props.bundle, glyph: this.props.glyph });
	    }
	    var style = { height: this.props.autoHeight ? 'auto' : '' };

	    var props = _extends({
	      name: null,
	      style: style,
	      tabIndex: '-1'
	    }, this.props, {
	      className: classes.trim()
	    });

	    var RouteLink = 'a';
	    var componentProps = {
	      name: null,
	      tabIndex: -1,
	      href: this.props.href || '',
	      onClick: this.handleClick,
	      style: style
	    };

	    if (this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
	      RouteLink = _reactRouter.Link;
	      componentProps.to = this.props.href;
	      delete componentProps.href;
	    }

	    return React.createElement(
	      'li',
	      _extends({ ref: 'node' }, props),
	      React.createElement(
	        RouteLink,
	        componentProps,
	        icon,
	        React.createElement(
	          'span',
	          { className: 'name' },
	          this.props.name
	        ),
	        toggleButton
	      ),
	      this.props.children
	    );
	  }
	});

	exports.SidebarNavItem = SidebarNavItem;
	var SidebarNav = React.createClass({
	  displayName: 'SidebarNav',

	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-nav', this.props.className);

	    var props = _extends({}, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'ul',
	      _extends({}, props, { children: null }),
	      this.props.children
	    );
	  }
	});

	exports.SidebarNav = SidebarNav;
	var SidebarBtn = React.createClass({
	  displayName: 'SidebarBtn',

	  handleSidebarStateChange: function handleSidebarStateChange(props) {
	    if (props['data-id'] === 'sidebar-btn') {
	      ReactBootstrap.Dispatcher.emit('sidebar');
	    }
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('pull-left visible-xs-inline-block', this.props.className);
	    var props = _extends({}, this.props, {
	      classes: classes
	    });

	    return React.createElement(
	      NavContent,
	      props,
	      React.createElement(
	        Nav,
	        { onItemSelect: this.handleSidebarStateChange },
	        React.createElement(
	          NavItem,
	          { 'data-id': 'sidebar-btn', className: 'sidebar-btn', href: '/' },
	          React.createElement(Icon, { bundle: 'fontello', glyph: 'th-list-5' })
	        )
	      )
	    );
	  }
	});
	exports.SidebarBtn = SidebarBtn;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var Brand = (function (_React$Component) {
	  _inherits(Brand, _React$Component);

	  function Brand() {
	    _classCallCheck(this, Brand);

	    _get(Object.getPrototypeOf(Brand.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Brand, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        NavHeader,
	        this.props,
	        React.createElement('img', { src: '/imgs/Emblem1.png', alt: 'rubix' }),
	        React.createElement(
	          'span',
	          { style: { fontSize: "25px", color: "white" } },
	          'Ministry of Labour & Employment'
	        )
	      );
	    }
	  }]);

	  return Brand;
	})(React.Component);

	var HeaderNavigation = React.createClass({
	  displayName: 'HeaderNavigation',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  render: function render() {
	    var props = _extends({}, this.props, {
	      className: (0, _classnames2['default'])('pull-right', this.props.className)
	    });

	    return React.createElement(
	      NavContent,
	      props,
	      React.createElement(
	        Nav,
	        null,
	        React.createElement(
	          NavItem,
	          { className: 'logout', href: '#' },
	          React.createElement(Icon, { bundle: 'fontello', glyph: 'off-1' })
	        )
	      )
	    );
	  }
	});

	var Header = (function (_React$Component2) {
	  _inherits(Header, _React$Component2);

	  function Header() {
	    _classCallCheck(this, Header);

	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        _extends({ id: 'navbar' }, this.props),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              NavBar,
	              { fixedTop: true, id: 'rubix-nav-header' },
	              React.createElement(
	                Container,
	                { fluid: true },
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 3, visible: 'xs' },
	                    React.createElement(_globalJsxSidebar_component.SidebarBtn, null)
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 6, sm: 4 },
	                    React.createElement(Brand, null)
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 3, sm: 8 },
	                    React.createElement(HeaderNavigation, null)
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Header;
	})(React.Component);

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _reactRouter = __webpack_require__(3);

	var _globalJsxLoremipsum = __webpack_require__(40);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var ApplicationSidebar = (function (_React$Component) {
	  _inherits(ApplicationSidebar, _React$Component);

	  function ApplicationSidebar() {
	    _classCallCheck(this, ApplicationSidebar);

	    _get(Object.getPrototypeOf(ApplicationSidebar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ApplicationSidebar, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                'div',
	                { className: 'sidebar-header' },
	                'PAGES'
	              ),
	              React.createElement(
	                'div',
	                { className: 'sidebar-nav-container' },
	                React.createElement(
	                  _globalJsxSidebar_component.SidebarNav,
	                  { style: { marginBottom: 0 } },
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-fontello-gauge', name: 'Dashboard', href: '/app/dashboard' }),
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-fontello-gauge', name: 'Population', href: '/app/populationdashboard' }),
	                  React.createElement(
	                    _globalJsxSidebar_component.SidebarNavItem,
	                    { glyph: 'icon-feather-mail', name: React.createElement(
	                        'span',
	                        null,
	                        'Mailbox ',
	                        React.createElement(
	                          BLabel,
	                          { className: 'bg-darkgreen45 fg-white' },
	                          '3'
	                        )
	                      ) },
	                    React.createElement(
	                      _globalJsxSidebar_component.SidebarNav,
	                      null,
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-feather-inbox', name: 'Inbox', href: '/app/mailbox/inbox' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-outlined-mail-open', name: 'Mail', href: '/app/mailbox/mail' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Compose', href: '/app/mailbox/compose' })
	                    )
	                  ),
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { href: '/app/calendar', glyph: 'icon-fontello-calendar-alt', name: 'Calendar' })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ApplicationSidebar;
	})(React.Component);

	var DummySidebar = (function (_React$Component2) {
	  _inherits(DummySidebar, _React$Component2);

	  function DummySidebar() {
	    _classCallCheck(this, DummySidebar);

	    _get(Object.getPrototypeOf(DummySidebar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DummySidebar, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              'div',
	              { className: 'sidebar-header' },
	              'DUMMY SIDEBAR'
	            ),
	            React.createElement(_globalJsxLoremipsum2['default'], { query: '1p' })
	          )
	        )
	      );
	    }
	  }]);

	  return DummySidebar;
	})(React.Component);

	var _default = (function (_React$Component3) {
	  _inherits(_default, _React$Component3);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        _extends({ id: 'sidebar' }, this.props),
	        React.createElement(
	          'div',
	          { id: 'avatar' },
	          React.createElement(
	            Grid,
	            null,
	            React.createElement(
	              Row,
	              { className: 'fg-white' },
	              React.createElement(
	                Col,
	                { xs: 4, collapseRight: true },
	                React.createElement('img', { src: '/imgs/avatars/avatar0.png', width: '40', height: '40' })
	              ),
	              React.createElement(
	                Col,
	                { xs: 8, collapseLeft: true, id: 'avatar-col' },
	                React.createElement(
	                  'div',
	                  { style: { top: 23, fontSize: 16, lineHeight: 1, position: 'relative' } },
	                  'Venkat Chitturi'
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(Progress, { id: 'demo-progress', value: 30, min: 0, max: 100, color: '#ffffff' }),
	                  React.createElement(
	                    _reactRouter.Link,
	                    { to: '/app/lock' },
	                    React.createElement(Icon, { id: 'demo-icon', bundle: 'fontello', glyph: 'lock-5' })
	                  )
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          _globalJsxSidebar_component.SidebarControls,
	          null,
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'docs', sidebar: 0 }),
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'chat-1', sidebar: 1 }),
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'chart-pie-2', sidebar: 2 }),
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'th-list-2', sidebar: 3 }),
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'bell-5', sidebar: 4 })
	        ),
	        React.createElement(
	          'div',
	          { id: 'sidebar-container' },
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 0, active: true },
	            React.createElement(ApplicationSidebar, null)
	          ),
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 1 },
	            React.createElement(DummySidebar, null)
	          ),
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 2 },
	            React.createElement(DummySidebar, null)
	          ),
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 3 },
	            React.createElement(DummySidebar, null)
	          ),
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 4 },
	            React.createElement(DummySidebar, null)
	          )
	        )
	      );
	    }
	  }]);

	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	/**
	 * @copyright https://github.com/f/loremjs
	 * @licence https://github.com/f/loremjs/blob/master/LICENSE
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var Lorem;
	(function () {

	    //Create a class named Lorem and constructor
	    Lorem = function () {
	        //Default values.
	        this.type = null;
	        this.query = null;
	        this.data = null;
	    };
	    //Static variables
	    Lorem.IMAGE = 1;
	    Lorem.TEXT = 2;
	    Lorem.TYPE = {
	        PARAGRAPH: 1,
	        SENTENCE: 2,
	        WORD: 3
	    };
	    //Words to create lorem ipsum text.
	    Lorem.WORDS = ["lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "ut", "aliquam,", "purus", "sit", "amet", "luctus", "venenatis,", "lectus", "magna", "fringilla", "urna,", "porttitor", "rhoncus", "dolor", "purus", "non", "enim", "praesent", "elementum", "facilisis", "leo,", "vel", "fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi", "etiam", "dignissim", "diam", "quis", "enim", "lobortis", "scelerisque", "fermentum", "dui", "faucibus", "in", "ornare", "quam", "viverra", "orci", "sagittis", "eu", "volutpat", "odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae", "tortor", "condimentum", "lacinia", "quis", "vel", "eros", "donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices", "in", "iaculis", "nunc", "sed", "augue", "lacus,", "viverra", "vitae", "congue", "eu,", "consequat", "ac", "felis", "donec", "et", "odio", "pellentesque", "diam", "volutpat", "commodo", "sed", "egestas", "egestas", "fringilla", "phasellus", "faucibus", "scelerisque", "eleifend", "donec", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam", "malesuada", "bibendum", "arcu", "vitae", "elementum", "curabitur", "vitae", "nunc", "sed", "velit", "dignissim", "sodales", "ut", "eu", "sem", "integer", "vitae", "justo", "eget", "magna", "fermentum", "iaculis", "eu", "non", "diam", "phasellus", "vestibulum", "lorem", "sed", "risus", "ultricies", "tristique", "nulla", "aliquet", "enim", "tortor,", "at", "auctor", "urna", "nunc", "id", "cursus", "metus", "aliquam", "eleifend", "mi", "in", "nulla", "posuere", "sollicitudin", "aliquam", "ultrices", "sagittis", "orci,", "a", "scelerisque", "purus", "semper", "eget", "duis", "at", "tellus", "at", "urna", "condimentum", "mattis", "pellentesque", "id", "nibh", "tortor,", "id", "aliquet", "lectus", "proin", "nibh", "nisl,", "condimentum", "id", "venenatis", "a,", "condimentum", "vitae", "sapien", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "sed", "tempus,", "urna", "et", "pharetra", "pharetra,", "massa", "massa", "ultricies", "mi,", "quis", "hendrerit", "dolor", "magna", "eget", "est", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "integer", "eget", "aliquet", "nibh", "praesent", "tristique", "magna", "sit", "amet", "purus", "gravida", "quis", "blandit", "turpis", "cursus", "in", "hac", "habitasse", "platea", "dictumst", "quisque", "sagittis,", "purus", "sit", "amet", "volutpat", "consequat,", "mauris", "nunc", "congue", "nisi,", "vitae", "suscipit", "tellus", "mauris", "a", "diam", "maecenas", "sed", "enim", "ut", "sem", "viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras", "adipiscing", "enim", "eu", "turpis", "egestas", "pretium", "aenean", "pharetra,", "magna", "ac", "placerat", "vestibulum,", "lectus", "mauris", "ultrices", "eros,", "in", "cursus", "turpis", "massa", "tincidunt", "dui", "ut", "ornare", "lectus", "sit", "amet", "est", "placerat", "in", "egestas", "erat", "imperdiet", "sed", "euismod", "nisi", "porta", "lorem", "mollis", "aliquam", "ut", "porttitor", "leo", "a", "diam", "sollicitudin", "tempor", "id", "eu", "nisl", "nunc", "mi", "ipsum,", "faucibus", "vitae", "aliquet", "nec,", "ullamcorper", "sit", "amet", "risus", "nullam", "eget", "felis", "eget", "nunc", "lobortis", "mattis", "aliquam", "faucibus", "purus", "in", "massa", "tempor", "nec", "feugiat", "nisl", "pretium", "fusce", "id", "velit", "ut", "tortor", "pretium", "viverra", "suspendisse", "potenti", "nullam", "ac", "tortor", "vitae", "purus", "faucibus", "ornare", "suspendisse", "sed", "nisi", "lacus,", "sed", "viverra", "tellus", "in", "hac", "habitasse", "platea", "dictumst", "vestibulum", "rhoncus", "est", "pellentesque", "elit", "ullamcorper", "dignissim", "cras", "tincidunt", "lobortis", "feugiat", "vivamus", "at", "augue", "eget", "arcu", "dictum", "varius", "duis", "at", "consectetur", "lorem", "donec", "massa", "sapien,", "faucibus", "et", "molestie", "ac,", "feugiat", "sed", "lectus", "vestibulum", "mattis", "ullamcorper", "velit", "sed", "ullamcorper", "morbi", "tincidunt", "ornare", "massa,", "eget", "egestas", "purus", "viverra", "accumsan", "in", "nisl", "nisi,", "scelerisque", "eu", "ultrices", "vitae,", "auctor", "eu", "augue", "ut", "lectus", "arcu,", "bibendum", "at", "varius", "vel,", "pharetra", "vel", "turpis", "nunc", "eget", "lorem", "dolor,", "sed", "viverra", "ipsum", "nunc", "aliquet", "bibendum", "enim,", "facilisis", "gravida", "neque", "convallis", "a", "cras", "semper", "auctor", "neque,", "vitae", "tempus", "quam", "pellentesque", "nec", "nam", "aliquam", "sem", "et", "tortor", "consequat", "id", "porta", "nibh", "venenatis", "cras", "sed", "felis", "eget", "velit", "aliquet", "sagittis", "id", "consectetur", "purus", "ut", "faucibus", "pulvinar", "elementum", "integer", "enim", "neque,", "volutpat", "ac", "tincidunt", "vitae,", "semper", "quis", "lectus", "nulla", "at", "volutpat", "diam", "ut", "venenatis", "tellus", "in", "metus", "vulputate", "eu", "scelerisque", "felis", "imperdiet", "proin", "fermentum", "leo", "vel", "orci", "porta", "non", "pulvinar", "neque", "laoreet", "suspendisse", "interdum", "consectetur", "libero,", "id", "faucibus", "nisl", "tincidunt", "eget", "nullam", "non", "nisi", "est,", "sit", "amet", "facilisis", "magna", "etiam", "tempor,", "orci", "eu", "lobortis", "elementum,", "nibh", "tellus", "molestie", "nunc,", "non", "blandit", "massa", "enim", "nec", "dui", "nunc", "mattis", "enim", "ut", "tellus", "elementum", "sagittis", "vitae", "et", "leo", "duis", "ut", "diam", "quam", "nulla", "porttitor", "massa", "id", "neque", "aliquam", "vestibulum", "morbi", "blandit", "cursus", "risus,", "at", "ultrices", "mi", "tempus", "imperdiet", "nulla", "malesuada", "pellentesque", "elit", "eget", "gravida", "cum", "sociis", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes,", "nascetur", "ridiculus", "mus", "mauris", "vitae", "ultricies", "leo", "integer", "malesuada", "nunc", "vel", "risus", "commodo", "viverra", "maecenas", "accumsan,", "lacus", "vel", "facilisis", "volutpat,", "est", "velit", "egestas", "dui,", "id", "ornare", "arcu", "odio", "ut", "sem", "nulla", "pharetra", "diam", "sit", "amet", "nisl", "suscipit", "adipiscing", "bibendum", "est", "ultricies", "integer", "quis", "auctor", "elit", "sed", "vulputate", "mi", "sit", "amet", "mauris", "commodo", "quis", "imperdiet", "massa", "tincidunt", "nunc", "pulvinar", "sapien", "et", "ligula", "ullamcorper", "malesuada", "proin", "libero", "nunc,", "consequat", "interdum", "varius", "sit", "amet,", "mattis", "vulputate", "enim", "nulla", "aliquet", "porttitor", "lacus,", "luctus", "accumsan", "tortor", "posuere", "ac", "ut", "consequat", "semper", "viverra", "nam", "libero", "justo,", "laoreet", "sit", "amet", "cursus", "sit", "amet,", "dictum", "sit", "amet", "justo", "donec", "enim", "diam,", "vulputate", "ut", "pharetra", "sit", "amet,", "aliquam", "id", "diam", "maecenas", "ultricies", "mi", "eget", "mauris", "pharetra", "et", "ultrices", "neque", "ornare", "aenean", "euismod", "elementum", "nisi,", "quis", "eleifend", "quam", "adipiscing", "vitae", "proin", "sagittis,", "nisl", "rhoncus", "mattis", "rhoncus,", "urna", "neque", "viverra", "justo,", "nec", "ultrices", "dui", "sapien", "eget", "mi", "proin", "sed", "libero", "enim,", "sed", "faucibus", "turpis", "in", "eu", "mi", "bibendum", "neque", "egestas", "congue", "quisque", "egestas", "diam", "in", "arcu", "cursus", "euismod", "quis", "viverra", "nibh", "cras", "pulvinar", "mattis", "nunc,", "sed", "blandit", "libero", "volutpat", "sed", "cras", "ornare", "arcu", "dui", "vivamus", "arcu", "felis,", "bibendum", "ut", "tristique", "et,", "egestas", "quis", "ipsum", "suspendisse", "ultrices", "gravida", "dictum", "fusce", "ut", "placerat", "orci", "nulla", "pellentesque", "dignissim", "enim,", "sit", "amet", "venenatis", "urna", "cursus", "eget", "nunc", "scelerisque", "viverra", "mauris,", "in", "aliquam", "sem", "fringilla", "ut", "morbi", "tincidunt", "augue", "interdum", "velit", "euismod", "in", "pellentesque", "massa", "placerat", "duis", "ultricies", "lacus", "sed", "turpis", "tincidunt", "id", "aliquet", "risus", "feugiat", "in", "ante", "metus,", "dictum", "at", "tempor", "commodo,", "ullamcorper", "a", "lacus", "vestibulum", "sed", "arcu", "non", "odio", "euismod", "lacinia", "at", "quis", "risus", "sed", "vulputate", "odio", "ut", "enim", "blandit", "volutpat", "maecenas", "volutpat", "blandit", "aliquam", "etiam", "erat", "velit,", "scelerisque", "in", "dictum", "non,", "consectetur", "a", "erat", "nam", "at", "lectus", "urna", "duis", "convallis", "convallis", "tellus,", "id", "interdum", "velit", "laoreet", "id", "donec", "ultrices", "tincidunt", "arcu,", "non", "sodales", "neque", "sodales", "ut", "etiam", "sit", "amet", "nisl", "purus,", "in", "mollis", "nunc", "sed", "id", "semper", "risus", "in", "hendrerit", "gravida", "rutrum", "quisque", "non", "tellus", "orci,", "ac", "auctor", "augue", "mauris", "augue", "neque,", "gravida", "in", "fermentum", "et,", "sollicitudin", "ac", "orci", "phasellus", "egestas", "tellus", "rutrum", "tellus", "pellentesque", "eu", "tincidunt", "tortor", "aliquam", "nulla", "facilisi", "cras", "fermentum,", "odio", "eu", "feugiat", "pretium,", "nibh", "ipsum", "consequat", "nisl,", "vel", "pretium", "lectus", "quam", "id", "leo", "in", "vitae", "turpis", "massa", "sed", "elementum", "tempus", "egestas", "sed", "sed", "risus", "pretium", "quam", "vulputate", "dignissim", "suspendisse", "in", "est", "ante", "in", "nibh", "mauris,", "cursus", "mattis", "molestie", "a,", "iaculis", "at", "erat", "pellentesque", "adipiscing", "commodo", "elit,", "at", "imperdiet", "dui", "accumsan", "sit", "amet", "nulla", "facilisi", "morbi", "tempus", "iaculis", "urna,", "id", "volutpat", "lacus", "laoreet", "non", "curabitur", "gravida", "arcu", "ac", "tortor", "dignissim", "convallis", "aenean", "et", "tortor", "at", "risus", "viverra", "adipiscing", "at", "in", "tellus", "integer", "feugiat", "scelerisque", "varius", "morbi", "enim", "nunc,", "faucibus", "a", "pellentesque", "sit", "amet,", "porttitor", "eget", "dolor", "morbi", "non", "arcu", "risus,", "quis", "varius", "quam", "quisque", "id", "diam", "vel", "quam", "elementum", "pulvinar", "etiam", "non", "quam", "lacus", "suspendisse", "faucibus", "interdum", "posuere", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "duis", "tristique", "sollicitudin", "nibh", "sit", "amet", "commodo", "nulla", "facilisi", "nullam", "vehicula", "ipsum", "a", "arcu", "cursus", "vitae", "congue", "mauris", "rhoncus", "aenean", "vel", "elit", "scelerisque", "mauris", "pellentesque", "pulvinar", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "maecenas", "pharetra", "convallis", "posuere", "morbi", "leo", "urna,", "molestie", "at", "elementum", "eu,", "facilisis", "sed", "odio", "morbi", "quis", "commodo", "odio", "aenean", "sed", "adipiscing", "diam", "donec", "adipiscing", "tristique", "risus", "nec", "feugiat", "in", "fermentum", "posuere", "urna", "nec", "tincidunt", "praesent", "semper", "feugiat", "nibh", "sed", "pulvinar", "proin", "gravida", "hendrerit", "lectus", "a", "molestie"];
	    //random integer method.
	    Lorem.prototype.randomInt = function (min, max) {
	        return Math.floor(Math.random() * (max - min + 1)) + min;
	    };
	    //text creator method with parameters: how many, what
	    Lorem.prototype.createText = function (count, type) {
	        switch (type) {
	            //paragraphs are loads of sentences.
	            case Lorem.TYPE.PARAGRAPH:
	                var paragraphs = new Array();
	                for (var i = 0; i < count; i++) {
	                    var paragraphLength = this.randomInt(10, 20);
	                    var paragraph = this.createText(paragraphLength, Lorem.TYPE.SENTENCE);
	                    paragraphs.push('<p>' + paragraph + '</p>');
	                }
	                return paragraphs.join('\n');
	                break;
	            //sentences are loads of words.
	            case Lorem.TYPE.SENTENCE:
	                var sentences = new Array();
	                for (var i = 0; i < count; i++) {
	                    var sentenceLength = this.randomInt(5, 10);
	                    var words = this.createText(sentenceLength, Lorem.TYPE.WORD).split(' ');
	                    words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1);
	                    var sentence = words.join(' ');

	                    sentences.push(sentence);
	                }
	                return (sentences.join('. ') + '.').replace(/(\.\,|\,\.)/g, '.');
	                break;
	            //words are words
	            case Lorem.TYPE.WORD:
	                var wordIndex = this.randomInt(0, Lorem.WORDS.length - count - 1);

	                return Lorem.WORDS.slice(wordIndex, wordIndex + count).join(' ').replace(/\.|\,/g, '');
	                break;
	        }
	    };
	    Lorem.prototype.createLorem = function (element) {

	        var lorem = new Array();
	        var count;

	        if (/\d+-\d+[psw]/.test(this.query)) {
	            var range = this.query.replace(/[a-z]/, '').split("-");
	            count = Math.floor(Math.random() * parseInt(range[1])) + parseInt(range[0]);
	        } else {
	            count = parseInt(this.query);
	        }

	        if (/\d+p/.test(this.query)) {
	            var type = Lorem.TYPE.PARAGRAPH;
	        } else if (/\d+s/.test(this.query)) {
	            var type = Lorem.TYPE.SENTENCE;
	        } else if (/\d+w/.test(this.query)) {
	            var type = Lorem.TYPE.WORD;
	        }

	        lorem.push(this.createText(count, type));
	        lorem = lorem.join(' ');

	        if (element) {
	            if (this.type == Lorem.TEXT) element.innerHTML += lorem;else if (this.type == Lorem.IMAGE) {
	                //TODO: for now, using lorempixel.
	                var path = '';
	                var options = this.query.split(' ');
	                if (options[0] == 'gray') {
	                    path += '/g';
	                    options[0] = '';
	                }
	                if (element.getAttribute('width')) path += '/' + element.getAttribute('width');

	                if (element.getAttribute('height')) path += '/' + element.getAttribute('height');

	                path += '/' + options.join(' ').replace(/(^\s+|\s+$)/, '');
	                element.src = 'http://lorempixel.com' + path.replace(/\/\//, '/');
	            }
	        }

	        if (element == null) return lorem;
	    };
	})();

	exports["default"] = React.createClass({
	    displayName: "loremipsum",

	    propTypes: {
	        type: React.PropTypes.string,
	        query: React.PropTypes.string.isRequired
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            type: 'text'
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        var lorem = new Lorem();

	        switch (this.props.type) {
	            case 'img':
	                lorem.type = Lorem.IMAGE;
	                break;
	            case 'text':
	            default:
	                lorem.type = Lorem.TEXT;
	                break;
	        }

	        lorem.query = this.props.query;
	        var l = lorem.createLorem(this.refs.node.getDOMNode());
	    },
	    render: function render() {
	        var props = _extends({
	            type: null,
	            query: null,
	            ref: 'node'
	        }, this.props);

	        var ComponentClass;
	        if (this.props.type === 'text') return React.createElement("span", props);else return React.createElement("img", props);
	    }
	});
	module.exports = exports["default"];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default(props) {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);

	    this.state = {
	      version: 0
	    };
	  }

	  _createClass(_default, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({
	        version: document.getElementsByTagName('body')[0].getAttribute('data-version')
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'footer-container' },
	        React.createElement(
	          Grid,
	          { id: 'footer', className: 'text-center' },
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                'div',
	                null,
	                '© 2015 technoidentity '
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactChartjs = __webpack_require__(43);

	var _underscore = __webpack_require__(53);

	var _underscore2 = _interopRequireDefault(_underscore);

	function mean(data, prop) {
	  return _underscore2['default'].reduce(data, function (acc, d) {
	    return acc + d[prop];
	  }, 0) / data.length;
	}

	function a(xbar, ybar, b) {
	  return ybar - b * xbar;
	}

	function b(xmean, ymean, data) {
	  return _underscore2['default'].reduce(data, function (acc, d) {
	    return acc + (d.year - xmean) * (d.y - ymean);
	  }, 0) / _underscore2['default'].reduce(data, function (acc, d) {
	    return acc + Math.pow(d.year - xmean, 2);
	  }, 0);
	}

	function y(x, data) {
	  var xbar = mean(data, "year");
	  var ybar = mean(data, "y");
	  var bop = b(xbar, ybar, data);
	  return parseInt(a(xbar, ybar, bop) + bop * x);
	}

	function y1(a, b, x) {
	  return parseInt(a + b * x);
	}

	function labour_rate_persons_data() {

	  return [{ "year": 1, "y": 9.4 }, { "year": 3, "y": 3.55 }, { "year": 4, "y": 4.6 }, { "year": 5, "y": 4.15 }];
	}

	function getY(year, data) {
	  return y(year, data);
	}

	function getData(labeldata, dataarray) {
	  return { labels: labeldata,
	    datasets: [{
	      label: "original",
	      //fillColor: "rgba(220,220,220,0.2)",
	      //strokeColor: "rgba(220,220,220,1)",
	      //pointColor: "rgba(220,220,220,1)",
	      //pointrokeColor: "#fff",
	      //pointHighlightFill: "#fff",
	      //pointHighlightStroke: "rgba(220,220,220,1)",
	      fillColor: "rgba(128,170,212,0.7)", //"#80AAD4"//"rgba(151,187,205,0.2)"
	      strokeColor: "#0054A9", //"rgba(151,187,205,1)",
	      pointColor: "#0054A9", //"rgba(151,187,205,1)",
	      pointStrokeColor: "#0054A9", //"#fff",
	      pointHighlightFill: "#0054A9", //"#fff",
	      pointHighlightStroke: "#0054A9", //"rgba(151,187,205,1)",
	      data: dataarray
	    }] };
	}

	var options = { bezierCurve: true, datasetFill: true, pointDot: true };
	var baroptions = { barValueSpacing: 20, showTooltips: false,
	  onAnimationComplete: function onAnimationComplete() {

	    var ctx = this.chart.ctx;
	    ctx.font = this.scale.font;
	    ctx.fillStyle = this.scale.textColor;
	    ctx.textAlign = "center";
	    ctx.textBaseline = "bottom";

	    this.datasets.forEach(function (dataset) {
	      dataset.bars.forEach(function (bar) {
	        ctx.fillText(bar.value, bar.x, bar.y - 5);
	      });
	    });
	  } };

	var LineChart = (function (_Component) {
	  _inherits(LineChart, _Component);

	  function LineChart(props) {
	    _classCallCheck(this, LineChart);

	    _get(Object.getPrototypeOf(LineChart.prototype), 'constructor', this).call(this, props);
	    this.state = { data: props.data, tdata: [], bdata: this.props.bdata, knobval: 30 };
	  }

	  _createClass(LineChart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {

	      $('#dates').val(2014);
	      var fvalues = getFilterValues(this.props.type);
	      if (fvalues.year > 0) {
	        $.ajax({
	          url: "http://localhost:8091/" + getChartType(fvalues.type),
	          dataType: 'json',
	          cache: false,
	          success: (function (data) {
	            var dt = data.filter(function (i) {
	              return i.type === fvalues.datatype;
	            });
	            var maxminDates = getMinDateAndMaxDateInGivenData(_underscore2['default'].map(dt, function (d) {
	              return d.year;
	            }));
	            var newdata = fvalues.year >= maxminDates[0] && fvalues.year <= maxminDates[1] ? getPresentData(dt, fvalues) : PredictData(dt, fvalues);
	            this.setState({ tdata: newdata[0], data: newdata[1], bdata: barChartData(newdata[0]), knobval: newdata[1].datasets[0].data[newdata[1].datasets[0].data.length - 1] });
	          }).bind(this),
	          error: (function (xhr, status, err) {
	            console.log(xhr);
	            console.error(this.props.url, status, err.toString());
	          }).bind(this)
	        });
	      }
	    }
	  }, {
	    key: 'handleDataType',
	    value: function handleDataType() {
	      var fvalues = getFilterValues(this.props.type);
	      if (fvalues.year > 0) {
	        $.ajax({
	          url: "http://localhost:8091/" + getChartType(fvalues.type),
	          dataType: 'json',
	          cache: false,
	          success: (function (data) {
	            var dt = data.filter(function (i) {
	              return i.type === fvalues.datatype;
	            });
	            var maxminDates = getMinDateAndMaxDateInGivenData(_underscore2['default'].map(dt, function (d) {
	              return d.year;
	            }));
	            var newdata = fvalues.year >= maxminDates[0] && fvalues.year <= maxminDates[1] ? getPresentData(dt, fvalues) : PredictData(dt, fvalues);
	            this.setState({ tdata: newdata[0], data: newdata[1], bdata: barChartData(newdata[0]), knobval: newdata[1].datasets[0].data[newdata[1].datasets[0].data.length - 1] });
	          }).bind(this),
	          error: (function (xhr, status, err) {
	            console.log(xhr);
	            console.error(this.props.url, status, err.toString());
	          }).bind(this)
	        });
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	      var fvalues = getFilterValues(this.props.type);
	      if (fvalues.year > 0) {
	        $.ajax({
	          url: "http://localhost:8091/" + getChartType(fvalues.type),
	          dataType: 'json',
	          cache: false,
	          success: (function (data) {
	            var dt = data.filter(function (i) {
	              return i.type === fvalues.datatype;
	            });
	            var maxminDates = getMinDateAndMaxDateInGivenData(_underscore2['default'].map(dt, function (d) {
	              return d.year;
	            }));
	            var newdata = fvalues.year >= maxminDates[0] && fvalues.year <= maxminDates[1] ? getPresentData(dt, fvalues) : PredictData(dt, fvalues);
	            this.setState({ tdata: newdata[0], data: newdata[1], bdata: barChartData(newdata[0]), knobval: newdata[1].datasets[0].data[newdata[1].datasets[0].data.length - 1] });
	          }).bind(this),
	          error: (function (xhr, status, err) {
	            console.log(xhr);
	            console.error(this.props.url, status, err.toString());
	          }).bind(this)
	        });
	      }
	    }
	  }, {
	    key: 'casteHandle',
	    value: function casteHandle() {
	      var fvalues = getFilterValues(this.props.type);
	      if (fvalues.year > 0) {
	        $.ajax({
	          url: "http://localhost:8091/" + getChartType(fvalues.type),
	          dataType: 'json',
	          cache: false,
	          success: (function (data) {
	            var dt = data.filter(function (i) {
	              return i.type === fvalues.datatype;
	            });
	            var maxminDates = getMinDateAndMaxDateInGivenData(_underscore2['default'].map(dt, function (d) {
	              return d.year;
	            }));
	            var newdata = fvalues.year >= maxminDates[0] && fvalues.year <= maxminDates[1] ? getPresentData(dt, fvalues) : PredictData(dt, fvalues);
	            this.setState({ tdata: newdata[0], data: newdata[1], bdata: barChartData(newdata[0]), knobval: newdata[1].datasets[0].data[newdata[1].datasets[0].data.length - 1] });
	          }).bind(this),
	          error: (function (xhr, status, err) {
	            console.log(xhr);
	            console.error(this.props.url, status, err.toString());
	          }).bind(this)
	        });
	      }
	    }
	  }, {
	    key: 'genderHandle',
	    value: function genderHandle() {
	      var fvalues = getFilterValues(this.props.type);
	      if (fvalues.year > 0) {
	        $.ajax({
	          url: "http://localhost:8091/" + getChartType(fvalues.type),
	          dataType: 'json',
	          cache: false,
	          success: (function (data) {
	            var dt = data.filter(function (i) {
	              return i.type === fvalues.datatype;
	            });
	            var maxminDates = getMinDateAndMaxDateInGivenData(_underscore2['default'].map(dt, function (d) {
	              return d.year;
	            }));
	            var newdata = fvalues.year >= maxminDates[0] && fvalues.year <= maxminDates[1] ? getPresentData(dt, fvalues) : PredictData(dt, fvalues);
	            this.setState({ tdata: newdata[0], data: newdata[1], bdata: barChartData(newdata[0]), knobval: newdata[1].datasets[0].data[newdata[1].datasets[0].data.length - 1] });
	          }).bind(this),
	          error: (function (xhr, status, err) {
	            console.log(xhr);
	            console.error(this.props.url, status, err.toString());
	          }).bind(this)
	        });
	      }
	    }
	  }, {
	    key: 'geoHandle',
	    value: function geoHandle() {
	      var fvalues = getFilterValues(this.props.type);
	      if (fvalues.year > 0) {
	        $.ajax({
	          url: "http://localhost:8091/" + getChartType(fvalues.type),
	          dataType: 'json',
	          cache: false,
	          success: (function (data) {
	            var dt = data.filter(function (i) {
	              return i.type === fvalues.datatype;
	            });
	            var maxminDates = getMinDateAndMaxDateInGivenData(_underscore2['default'].map(dt, function (d) {
	              return d.year;
	            }));
	            var newdata = fvalues.year >= maxminDates[0] && fvalues.year <= maxminDates[1] ? getPresentData(dt, fvalues) : PredictData(dt, fvalues);
	            this.setState({ tdata: newdata[0], data: newdata[1], bdata: barChartData(newdata[0]), knobval: newdata[1].datasets[0].data[newdata[1].datasets[0].data.length - 1] });
	          }).bind(this),
	          error: (function (xhr, status, err) {
	            console.log(xhr);
	            console.error(this.props.url, status, err.toString());
	          }).bind(this)
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        Container,
	        { id: 'graph' },
	        _react2['default'].createElement(
	          PanelContainer,
	          { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	          _react2['default'].createElement(
	            Panel,
	            null,
	            _react2['default'].createElement(
	              PanelHeader,
	              { className: 'bg-orange75 fg-white center text-center' },
	              _react2['default'].createElement(
	                'h4',
	                null,
	                'Labour Force Parameters'
	              )
	            ),
	            _react2['default'].createElement(
	              PanelBody,
	              { style: { padding: 10 } },
	              _react2['default'].createElement(Filter, { handleDataType: this.handleDataType.bind(this),
	                data: this.state.data, tdata: this.state.tdata, casteHandle: this.casteHandle.bind(this),
	                genderHandle: this.genderHandle.bind(this), geoHandle: this.geoHandle.bind(this) }),
	              _react2['default'].createElement(
	                FormGroup,
	                null,
	                _react2['default'].createElement(
	                  Label,
	                  null,
	                  'Year'
	                ),
	                _react2['default'].createElement(
	                  'div',
	                  null,
	                  _react2['default'].createElement(ComboBox, { dates: yearsData(2012, 2030), onChange: this.onChange.bind(this), tdata: this.state.tabledata })
	                )
	              )
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          PanelContainer,
	          { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	          _react2['default'].createElement(
	            Panel,
	            null,
	            _react2['default'].createElement(
	              PanelHeader,
	              { className: 'bg-orange75 fg-white center text-center' },
	              _react2['default'].createElement(
	                'h4',
	                null,
	                'Labour Force Parameter Trend'
	              )
	            ),
	            _react2['default'].createElement(
	              PanelBody,
	              { style: { padding: 10 } },
	              _react2['default'].createElement('input', { type: 'text', value: this.state.knobval, className: 'dial autosize', 'data-width': '100%', 'data-fgcolor': '#F09FA6' })
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          PanelContainer,
	          { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	          _react2['default'].createElement(
	            Panel,
	            null,
	            _react2['default'].createElement(
	              PanelHeader,
	              { className: 'bg-orange75 fg-white center text-center' },
	              _react2['default'].createElement(
	                'h4',
	                null,
	                'Labour Force Parameter Trend'
	              )
	            ),
	            _react2['default'].createElement(
	              PanelBody,
	              null,
	              _react2['default'].createElement(_reactChartjs.Line, { id: 'chart', data: this.state.data, options: options, style: { "height": "250px", "width": "100%" },
	                margin: '10', redraw: true })
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          PanelContainer,
	          { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	          _react2['default'].createElement(
	            Panel,
	            null,
	            _react2['default'].createElement(
	              PanelHeader,
	              { className: 'bg-orange75 fg-white center text-center' },
	              _react2['default'].createElement(
	                'h4',
	                null,
	                'Comparative Labour Force Parameters'
	              )
	            ),
	            _react2['default'].createElement(
	              PanelBody,
	              null,
	              _react2['default'].createElement(
	                'title',
	                null,
	                'Guess what?'
	              ),
	              _react2['default'].createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: "\n<!--\n.side { vertical-align:absbottom; display:inline }\n-->\n" } }),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(141,211,199)" } },
	                ' SC-MALE '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(251,180,174)" } },
	                ': SC-FEMALE '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(190,186,218)" } },
	                ': SC-PERSON '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(251,128,114)" } },
	                ': ST-MALE  '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(128,177,211)" } },
	                ': ST-FEMALE '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(253,180,98)" } },
	                ': ST-PERSON '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(179,222,105)" } },
	                ': OBC-MALE '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(252,205,229)" } },
	                ': OBC-FEMALE '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(217,217,217)" } },
	                ': OBC-PERSON '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(188,128,189)" } },
	                ': OTHERS-MALE '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(204,235,197)" } },
	                ': OTHERS-FEMALE '
	              ),
	              _react2['default'].createElement(
	                'h6',
	                { className: 'side', style: { color: "rgb(255,237,111)" } },
	                ': OTHERS-PERSON'
	              ),
	              _react2['default'].createElement(_reactChartjs.Bar, { id: 'bchart', data: this.state.bdata, options: baroptions, style: { "height": "250px", "width": "100%" }, redraw: true })
	            )
	          )
	        ),
	        _react2['default'].createElement(DataTable, { tabledata: this.state.tdata, type: this.props.title })
	      );
	    }
	  }]);

	  return LineChart;
	})(_react.Component);

	exports.LineChart = LineChart;

	var Filter = (function (_Component2) {
	  _inherits(Filter, _Component2);

	  function Filter() {
	    _classCallCheck(this, Filter);

	    _get(Object.getPrototypeOf(Filter.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Filter, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        Container,
	        null,
	        _react2['default'].createElement(
	          Form,
	          null,
	          _react2['default'].createElement(
	            FormGroup,
	            null,
	            _react2['default'].createElement(
	              Label,
	              null,
	              'Gender'
	            ),
	            _react2['default'].createElement(
	              'div',
	              null,
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'male', value: 'option1', name: 'gen', onClick: this.props.genderHandle.bind(this) },
	                'Male'
	              ),
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'female', value: 'option2', name: 'gen', onClick: this.props.genderHandle.bind(this) },
	                'Female'
	              ),
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'person', value: 'option3', defaultChecked: true, name: 'gen', onClick: this.props.genderHandle.bind(this) },
	                'Person'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            FormGroup,
	            null,
	            _react2['default'].createElement(
	              Label,
	              null,
	              'Social Group'
	            ),
	            _react2['default'].createElement(
	              'div',
	              null,
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'SC', value: 'option1', name: 'cat', onClick: this.props.casteHandle.bind(this) },
	                'SC'
	              ),
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'ST', value: 'option2', name: 'cat', onClick: this.props.casteHandle.bind(this) },
	                'ST'
	              ),
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'OBC', value: 'option3', name: 'cat', onClick: this.props.casteHandle.bind(this) },
	                'OBC'
	              ),
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'OTHERS', value: 'option3', name: 'cat', onClick: this.props.casteHandle.bind(this) },
	                'OTHERS'
	              ),
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'OVERALL', value: 'option3', defaultChecked: true, name: 'cat', onClick: this.props.casteHandle.bind(this) },
	                'OVERALL'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            FormGroup,
	            null,
	            _react2['default'].createElement(
	              Label,
	              null,
	              'Category'
	            ),
	            _react2['default'].createElement(
	              'div',
	              null,
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'rural', value: 'option1', name: 'geo', onClick: this.props.geoHandle.bind(this) },
	                'RURAL'
	              ),
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'urban', value: 'option2', name: 'geo', onClick: this.props.geoHandle.bind(this) },
	                'URBAN'
	              ),
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'rural_urban', value: 'option3', defaultChecked: true, name: 'geo', onClick: this.props.geoHandle.bind(this) },
	                'RURAL+URBAN'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            FormGroup,
	            null,
	            _react2['default'].createElement(
	              Label,
	              null,
	              'Approach'
	            ),
	            _react2['default'].createElement(
	              'div',
	              null,
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'UPS', value: 'option1', defaultChecked: true, name: 'datatype', onClick: this.props.handleDataType.bind(this) },
	                'UPS'
	              ),
	              _react2['default'].createElement(
	                Radio,
	                { inline: true, id: 'UPSS', value: 'option2', name: 'datatype', onClick: this.props.handleDataType.bind(this) },
	                'UPSS'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Filter;
	})(_react.Component);

	exports.Filter = Filter;

	var ComboBox = (function (_Component3) {
	  _inherits(ComboBox, _Component3);

	  function ComboBox() {
	    _classCallCheck(this, ComboBox);

	    _get(Object.getPrototypeOf(ComboBox.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ComboBox, [{
	    key: 'render',
	    value: function render() {
	      var optionsarray = this.props.dates.map(function (d) {
	        return _react2['default'].createElement(
	          'option',
	          { key: d.val, value: d.val },
	          d.lbl
	        );
	      });
	      return _react2['default'].createElement(
	        'select',
	        { id: 'dates', onChange: this.props.onChange.bind(this) },
	        optionsarray
	      );
	    }
	  }]);

	  return ComboBox;
	})(_react.Component);

	exports.ComboBox = ComboBox;

	function getFilterValues(type) {
	  var Gen = $('input[name=gen]:checked')[0];
	  return {
	    gen: [Gen.id],
	    type: type,
	    cat: $('input[name=cat]:checked')[0].id,
	    geo: $('input[name=geo]:checked')[0].id,
	    datatype: $('input[name=datatype]:checked')[0].id,
	    year: $('#dates').val()
	  };
	}

	function yearsData(start, end) {
	  var cmbData = [{ lbl: "select", val: 0 }];
	  for (var i = start; i <= end; i++) cmbData.push({ lbl: i - 1 + "-" + i, val: i });
	  return cmbData;
	}

	function getPreviousData(cattype, prop, data) {
	  return _underscore2['default'].map(data, function (x) {
	    return { "year": x["year"], "y": x[prop] };
	  });
	}

	function getPredictedData(sampledata, year) {
	  var types = ["SC", "ST", "OBC", "OTHERS", "OVERALL"];
	  var props = ["rural_male", "rural_female", "rural_person", "urban_male", "urban_female", "urban_person", "rural_urban_male", "rural_urban_female", "rural_urban_person"];
	  var predictedData = [];
	  _underscore2['default'].each(types, function (obj) {
	    var transobj = { "caste": obj, "year": year };
	    var dat = _underscore2['default'].filter(sampledata, function (d) {
	      return d.caste === obj;
	    });
	    _underscore2['default'].each(props, function (k) {
	      var preData = getPreviousData(obj, k, dat);
	      var yval = getY(year, preData);
	      transobj[k] = yval < 0 ? 0 : yval;
	    });
	    predictedData.push(transobj);
	  });
	  return predictedData;
	}

	var DataTable = (function (_Component4) {
	  _inherits(DataTable, _Component4);

	  function DataTable() {
	    _classCallCheck(this, DataTable);

	    _get(Object.getPrototypeOf(DataTable.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DataTable, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('.tablesaw').table();

	      $('.dial').knob();
	      $('.knob').knob({
	        draw: function draw() {
	          // 'tron' case
	          if (this.$.data('skin') == 'tron') {
	            var a = this.angle(this.cv),
	                // Angle
	            sa = this.startAngle,
	                // Previous start angle
	            sat = this.startAngle,
	                // Start angle
	            ea,
	                // Previous end angle
	            eat = sat + a,
	                // End angle
	            r = true;

	            this.g.lineWidth = this.lineWidth;

	            this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

	            if (this.o.displayPrevious) {
	              ea = this.startAngle + this.angle(this.value);
	              this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
	              this.g.beginPath();
	              this.g.strokeStyle = this.previousColor;
	              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
	              this.g.stroke();
	            }

	            this.g.beginPath();
	            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
	            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
	            this.g.stroke();

	            this.g.lineWidth = 2;
	            this.g.beginPath();
	            this.g.strokeStyle = this.o.fgColor;
	            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
	            this.g.stroke();

	            return false;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var rows = [];
	      this.props.tabledata.forEach(function (dat) {
	        rows.push(_react2['default'].createElement(Row, { data: dat }));
	      });
	      return _react2['default'].createElement(
	        PanelContainer,
	        { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	        _react2['default'].createElement(
	          Panel,
	          null,
	          _react2['default'].createElement(
	            PanelHeader,
	            { className: 'bg-orange75 fg-white center text-center' },
	            _react2['default'].createElement(
	              'h4',
	              null,
	              this.props.type
	            )
	          ),
	          _react2['default'].createElement(
	            PanelBody,
	            null,
	            _react2['default'].createElement(
	              Table,
	              { striped: true, bordered: true, className: 'tablesaw' },
	              _react2['default'].createElement(
	                'thead',
	                null,
	                _react2['default'].createElement(
	                  'th',
	                  null,
	                  'Social Group'
	                ),
	                _react2['default'].createElement(
	                  'th',
	                  { colSpan: 3 },
	                  'Rural'
	                ),
	                _react2['default'].createElement(
	                  'th',
	                  { colSpan: 3 },
	                  'Urban'
	                ),
	                _react2['default'].createElement(
	                  'th',
	                  { colSpan: 3 },
	                  'Rural+Urban'
	                ),
	                _react2['default'].createElement(
	                  'tr',
	                  null,
	                  _react2['default'].createElement('th', null),
	                  _react2['default'].createElement(
	                    'th',
	                    null,
	                    'Male'
	                  ),
	                  _react2['default'].createElement(
	                    'th',
	                    null,
	                    'Female'
	                  ),
	                  _react2['default'].createElement(
	                    'th',
	                    null,
	                    'Person'
	                  ),
	                  _react2['default'].createElement(
	                    'th',
	                    null,
	                    'Male'
	                  ),
	                  _react2['default'].createElement(
	                    'th',
	                    null,
	                    'Female'
	                  ),
	                  _react2['default'].createElement(
	                    'th',
	                    null,
	                    'Person'
	                  ),
	                  _react2['default'].createElement(
	                    'th',
	                    null,
	                    'Male'
	                  ),
	                  _react2['default'].createElement(
	                    'th',
	                    null,
	                    'Female'
	                  ),
	                  _react2['default'].createElement(
	                    'th',
	                    null,
	                    'Person'
	                  )
	                )
	              ),
	              _react2['default'].createElement(
	                'tbody',
	                null,
	                rows
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DataTable;
	})(_react.Component);

	exports.DataTable = DataTable;

	var Row = (function (_Component5) {
	  _inherits(Row, _Component5);

	  function Row() {
	    _classCallCheck(this, Row);

	    _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Row, [{
	    key: 'render',
	    value: function render() {
	      var d = this.props.data;
	      return _react2['default'].createElement(
	        'tr',
	        null,
	        _react2['default'].createElement(
	          'td',
	          null,
	          d.caste
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'p',
	            { className: 'dataCell' },
	            d.rural_male
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'p',
	            { className: 'dataCell' },
	            d.rural_female
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'p',
	            { className: 'dataCell' },
	            d.rural_person
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'p',
	            { className: 'dataCell' },
	            d.urban_male
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'p',
	            { className: 'dataCell' },
	            d.urban_female
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'p',
	            { className: 'dataCell' },
	            d.urban_person
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'p',
	            { className: 'dataCell' },
	            d.rural_urban_male
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'p',
	            { className: 'dataCell' },
	            d.rural_urban_female
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'p',
	            { className: 'dataCell' },
	            d.rural_urban_person
	          )
	        )
	      );
	    }
	  }]);

	  return Row;
	})(_react.Component);

	exports.Row = Row;

	function getChartType(chartType) {
	  switch (chartType) {
	    case "labour-rate":
	      return "lfpr";
	      break;
	    case "worker-population":
	      return "wpr";
	      break;
	    case "unemployment-rate":
	      return "umr";
	      break;
	    default:
	      return "pur";
	  }
	}

	function genYears(selyear, min) {
	  var years = [];
	  for (var i = min; i < selyear; i++) years.push(i);
	  return years;
	}

	function getMinDateAndMaxDateInGivenData(data) {
	  return [_underscore2['default'].min(data), _underscore2['default'].max(data)];
	}

	function getPresentData(data, fvalues) {
	  var cData = _underscore2['default'].filter(data, function (d) {
	    return d.year <= fvalues.year && d.caste == fvalues.cat;
	  });
	  var sortedData = fvalues.datatype == "UPSS" || fvalues.cat == "OVERALL" ? cData : cData.sort(function (a) {
	    return a.year;
	  });
	  var labels = [];
	  var axisData = [];
	  _underscore2['default'].each(sortedData, function (c) {
	    labels.push(c.year.toString());
	    axisData.push(c[fvalues.geo + "_" + fvalues.gen]);
	  });
	  return [_underscore2['default'].filter(data, function (d) {
	    return d.year == fvalues.year;
	  }), getData(labels, axisData)];
	}

	function PredictData(data, fvalues) {
	  var predictData = getPredictedData(data, fvalues.year);
	  var eDataYears = getMinDateAndMaxDateInGivenData(_underscore2['default'].map(data, function (d) {
	    return d.year;
	  }));
	  var filteredData = _underscore2['default'].filter(data, function (d) {
	    return d.caste == fvalues.cat;
	  });
	  var fdata = fvalues.datatype == "UPSS" || fvalues.cat == "OVERALL" ? _underscore2['default'].map(filteredData, function (x) {
	    return { "year": x.year, "y": x[fvalues.geo + '_' + fvalues.gen] };
	  }) : _underscore2['default'].map(filteredData.sort(function (i) {
	    return i.year;
	  }), function (x) {
	    return { "year": x.year, "y": x[fvalues.geo + '_' + fvalues.gen] };
	  });
	  var xmean = mean(fdata, "year");
	  var ymean = mean(fdata, "y");
	  var b1 = b(xmean, ymean, fdata);
	  var a1 = a(xmean, ymean, b1);
	  var labels = _underscore2['default'].map(fdata, function (d) {
	    return d.year.toString();
	  });
	  var axisdata = _underscore2['default'].map(fdata, function (d) {
	    return d.y;
	  });
	  for (var i = eDataYears[1] + 1; i <= fvalues.year; i++) {
	    labels.push(i.toString());
	    var yval = y1(a1, b1, i);
	    axisdata.push(yval < 0 ? 0 : yval);
	  }
	  return [predictData, getData(labels, axisdata)];
	}

	function barChartData(data) {
	  var datasets = [];
	  var bsettings = barSettings();
	  var labels = ["rural", "urban", "rural_urban"];
	  var casts = ["SC", "ST", "OBC", "OTHERS"];
	  var gen = ["male", "female", "person"];
	  _underscore2['default'].each(casts, function (c) {
	    var catobj = _underscore2['default'].find(data, function (x) {
	      return x.caste == c;
	    });
	    _underscore2['default'].each(gen, function (g) {
	      var data = [];
	      _underscore2['default'].each(labels, function (l) {
	        data.push(catobj[l + "_" + g]);
	      });
	      datasets.push(createDataObj(bsettings[c + '-' + g], data));
	    });
	  });

	  return {
	    labels: ["Rural", "Urban", "Rural + Urban"],
	    datasets: datasets
	  };
	}

	function createDataObj(csettings, data) {

	  return {
	    label: csettings[0],
	    fillColor: csettings[1],
	    strokeColor: csettings[2],
	    highlightFill: csettings[3],
	    highlightStroke: csettings[4],
	    data: data
	  };
	}

	function barSettings() {
	  return {
	    "SC-person": ["SC-Person", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)"],
	    "ST-person": ["ST-Person", "rgb(253,180,98)", "rgb(253,180,98)", "rgb(253,180,98)", "rgb(253,180,98)"],
	    "OBC-person": ["OBC-Person", "rgb(217,217,217)", "rgb(217,217,217)", "rgb(217,217,217)", "rgb(217,217,217)"],
	    "OTHERS-person": ["OTHERS-Person", "rgb(255,237,111)", "rgb(255,237,111)", "rgb(255,237,111)", "rgb(255,237,111)"],
	    "SC-male": ["SC-Male", "rgb(141,211,199)", "rgb(141,211,199)", "rgb(141,211,199)", "rgb(141,211,199)"],
	    "SC-female": ["SC-Female", "rgb(251,180,174)", "rgb(251,180,174)", "rgb(251,180,174)", "rgb(251,180,174)"],
	    "ST-male": ["ST-Male", "rgb(251,128,114)", "rgb(251,128,114) ", "rgb(251,128,114) ", "rgb(251,128,114)"],
	    "ST-female": ["ST-Female", "rgb(128,177,211)", "rgb(128,177,211)", "rgb(128,177,211)", "rgb(128,177,211)"],
	    "OBC-male": ["OBC-Male", "rgb(179,222,105)", "rgb(179,222,105)", "rgb(179,222,105)", "rgb(179,222,105)"],
	    "OBC-female": ["OBC-Female", "rgb(252,205,229)", "rgb(252,205,229)", "rgb(252,205,229)", "rgb(252,205,229)"],
	    "OTHERS-male": ["Others-Male", "rgb(188,128,189)", "rgb(188,128,189)", "rgb(188,128,189)", "rgb(188,128,189)"],
	    "OTHERS-female": ["Others-Female", "rgb(204,235,197)", "rgb(204,235,197)", "rgb(204,235,197)", "rgb(204,235,197)"]
	  };
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  Bar: __webpack_require__(44),
	  Doughnut: __webpack_require__(48),
	  Line: __webpack_require__(49),
	  Pie: __webpack_require__(50),
	  PolarArea: __webpack_require__(51),
	  Radar: __webpack_require__(52),
	  createClass: __webpack_require__(45).createClass
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(45);

	module.exports = vars.createClass('Bar', ['getBarsAtEvent']);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  createClass: function(chartType, methodNames, dataKey) {
	    var classData = {
	      displayName: chartType + 'Chart',
	      getInitialState: function() { return {}; },
	      render: function() {
	        var _props = {
	          ref: 'canvass'
	        };
	        for (var name in this.props) {
	          if (this.props.hasOwnProperty(name)) {
	            if (name !== 'data' && name !== 'options') {
	              _props[name] = this.props[name];
	            }
	          }
	        }
	        return React.createElement('canvas', _props);
	      }
	    };

	    var extras = ['clear', 'stop', 'resize', 'toBase64Image', 'generateLegend', 'update', 'addData', 'removeData'];
	    function extra(type) {
	      classData[type] = function() {
	        this.state.chart[name].apply(this.state.chart, arguments);
	      };
	    }

	    classData.componentDidMount = function() {
	      this.initializeChart(this.props);
	    };

	    classData.componentWillUnmount = function() {
	      var chart = this.state.chart;
	      chart.destroy();
	    };

	    classData.componentWillReceiveProps = function(nextProps) {
	      var chart = this.state.chart;
	      if (this.props.redraw) {
	        chart.destroy();
	        this.initializeChart(nextProps);
	      } else {
	        dataKey = dataKey || dataKeys[chart.name];
	        updatePoints(nextProps, chart, dataKey);
	        chart.update();
	      }
	    };

	    classData.initializeChart = function(nextProps) {
	      var Chart = __webpack_require__(46);
	      var el = this.getDOMNode();
	      var ctx = el.getContext("2d");
	      var chart = new Chart(ctx)[chartType](nextProps.data, nextProps.options || {});
	      this.state.chart = chart;
	    };

	    // return the chartjs instance
	    classData.getChart = function() {
	      return this.state.chart;
	    };

	    // return the canvass element that contains the chart
	    classData.getCanvass = function() {
	      return this.refs.canvass.getDOMNode();
	    };

	    var i;
	    for (i=0; i<extras.length; i++) {
	      extra(extras[i]);
	    }
	    for (i=0; i<methodNames.length; i++) {
	      extra(methodNames[i]);
	    }

	    var React = __webpack_require__(5);
	    return React.createClass(classData);
	  }
	};

	var dataKeys = {
	  'Line': 'points',
	  'Radar': 'points',
	  'Bar': 'bars'
	};

	var updatePoints = function(nextProps, chart, dataKey) {
	  var name = chart.name;

	  if (name === 'PolarArea' || name === 'Pie' || name === 'Doughnut') {
	    nextProps.data.forEach(function(segment, segmentIndex) {
	      chart.segments[segmentIndex].value = segment.value;
	    });
	  } else {
	    nextProps.data.datasets.forEach(function(set, setIndex) {
	      set.data.forEach(function(val, pointIndex) {
	        chart.datasets[setIndex][dataKey][pointIndex].value = val;
	      });
	    });
	  }
	};






/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Chart.js
	 * http://chartjs.org/
	 * Version: 1.0.2
	 *
	 * Copyright 2015 Nick Downie
	 * Released under the MIT license
	 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
	 */


	(function(){

		"use strict";

		//Declare root variable - window in the browser, global on the server
		var root = this,
			previous = root.Chart;

		//Occupy the global variable of Chart, and create a simple base class
		var Chart = function(context){
			var chart = this;
			this.canvas = context.canvas;

			this.ctx = context;

			//Variables global to the chart
			var computeDimension = function(element,dimension)
			{
				if (element['offset'+dimension])
				{
					return element['offset'+dimension];
				}
				else
				{
					return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
				}
			}

			var width = this.width = computeDimension(context.canvas,'Width');
			var height = this.height = computeDimension(context.canvas,'Height');

			// Firefox requires this to work correctly
			context.canvas.width  = width;
			context.canvas.height = height;

			var width = this.width = context.canvas.width;
			var height = this.height = context.canvas.height;
			this.aspectRatio = this.width / this.height;
			//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
			helpers.retinaScale(this);

			return this;
		};
		//Globally expose the defaults to allow for user updating/changing
		Chart.defaults = {
			global: {
				// Boolean - Whether to animate the chart
				animation: true,

				// Number - Number of animation steps
				animationSteps: 60,

				// String - Animation easing effect
				animationEasing: "easeOutQuart",

				// Boolean - If we should show the scale at all
				showScale: true,

				// Boolean - If we want to override with a hard coded scale
				scaleOverride: false,

				// ** Required if scaleOverride is true **
				// Number - The number of steps in a hard coded scale
				scaleSteps: null,
				// Number - The value jump in the hard coded scale
				scaleStepWidth: null,
				// Number - The scale starting value
				scaleStartValue: null,

				// String - Colour of the scale line
				scaleLineColor: "rgba(0,0,0,.1)",

				// Number - Pixel width of the scale line
				scaleLineWidth: 1,

				// Boolean - Whether to show labels on the scale
				scaleShowLabels: true,

				// Interpolated JS string - can access value
				scaleLabel: "<%=value%>",

				// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
				scaleIntegersOnly: true,

				// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
				scaleBeginAtZero: false,

				// String - Scale label font declaration for the scale label
				scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

				// Number - Scale label font size in pixels
				scaleFontSize: 12,

				// String - Scale label font weight style
				scaleFontStyle: "normal",

				// String - Scale label font colour
				scaleFontColor: "#666",

				// Boolean - whether or not the chart should be responsive and resize when the browser does.
				responsive: false,

				// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
				maintainAspectRatio: true,

				// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
				showTooltips: true,

				// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
				customTooltips: false,

				// Array - Array of string names to attach tooltip events
				tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

				// String - Tooltip background colour
				tooltipFillColor: "rgba(0,0,0,0.8)",

				// String - Tooltip label font declaration for the scale label
				tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

				// Number - Tooltip label font size in pixels
				tooltipFontSize: 14,

				// String - Tooltip font weight style
				tooltipFontStyle: "normal",

				// String - Tooltip label font colour
				tooltipFontColor: "#fff",

				// String - Tooltip title font declaration for the scale label
				tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

				// Number - Tooltip title font size in pixels
				tooltipTitleFontSize: 14,

				// String - Tooltip title font weight style
				tooltipTitleFontStyle: "bold",

				// String - Tooltip title font colour
				tooltipTitleFontColor: "#fff",

				// Number - pixel width of padding around tooltip text
				tooltipYPadding: 6,

				// Number - pixel width of padding around tooltip text
				tooltipXPadding: 6,

				// Number - Size of the caret on the tooltip
				tooltipCaretSize: 8,

				// Number - Pixel radius of the tooltip border
				tooltipCornerRadius: 6,

				// Number - Pixel offset from point x to tooltip edge
				tooltipXOffset: 10,

				// String - Template string for single tooltips
				tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

				// String - Template string for single tooltips
				multiTooltipTemplate: "<%= value %>",

				// String - Colour behind the legend colour block
				multiTooltipKeyBackground: '#fff',

				// Function - Will fire on animation progression.
				onAnimationProgress: function(){},

				// Function - Will fire on animation completion.
				onAnimationComplete: function(){}

			}
		};

		//Create a dictionary of chart types, to allow for extension of existing types
		Chart.types = {};

		//Global Chart helpers object for utility methods and classes
		var helpers = Chart.helpers = {};

			//-- Basic js utility methods
		var each = helpers.each = function(loopable,callback,self){
				var additionalArgs = Array.prototype.slice.call(arguments, 3);
				// Check to see if null or undefined firstly.
				if (loopable){
					if (loopable.length === +loopable.length){
						var i;
						for (i=0; i<loopable.length; i++){
							callback.apply(self,[loopable[i], i].concat(additionalArgs));
						}
					}
					else{
						for (var item in loopable){
							callback.apply(self,[loopable[item],item].concat(additionalArgs));
						}
					}
				}
			},
			clone = helpers.clone = function(obj){
				var objClone = {};
				each(obj,function(value,key){
					if (obj.hasOwnProperty(key)) objClone[key] = value;
				});
				return objClone;
			},
			extend = helpers.extend = function(base){
				each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
					each(extensionObject,function(value,key){
						if (extensionObject.hasOwnProperty(key)) base[key] = value;
					});
				});
				return base;
			},
			merge = helpers.merge = function(base,master){
				//Merge properties in left object over to a shallow clone of object right.
				var args = Array.prototype.slice.call(arguments,0);
				args.unshift({});
				return extend.apply(null, args);
			},
			indexOf = helpers.indexOf = function(arrayToSearch, item){
				if (Array.prototype.indexOf) {
					return arrayToSearch.indexOf(item);
				}
				else{
					for (var i = 0; i < arrayToSearch.length; i++) {
						if (arrayToSearch[i] === item) return i;
					}
					return -1;
				}
			},
			where = helpers.where = function(collection, filterCallback){
				var filtered = [];

				helpers.each(collection, function(item){
					if (filterCallback(item)){
						filtered.push(item);
					}
				});

				return filtered;
			},
			findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
				// Default to start of the array
				if (!startIndex){
					startIndex = -1;
				}
				for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
					var currentItem = arrayToSearch[i];
					if (filterCallback(currentItem)){
						return currentItem;
					}
				}
			},
			findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
				// Default to end of the array
				if (!startIndex){
					startIndex = arrayToSearch.length;
				}
				for (var i = startIndex - 1; i >= 0; i--) {
					var currentItem = arrayToSearch[i];
					if (filterCallback(currentItem)){
						return currentItem;
					}
				}
			},
			inherits = helpers.inherits = function(extensions){
				//Basic javascript inheritance based on the model created in Backbone.js
				var parent = this;
				var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

				var Surrogate = function(){ this.constructor = ChartElement;};
				Surrogate.prototype = parent.prototype;
				ChartElement.prototype = new Surrogate();

				ChartElement.extend = inherits;

				if (extensions) extend(ChartElement.prototype, extensions);

				ChartElement.__super__ = parent.prototype;

				return ChartElement;
			},
			noop = helpers.noop = function(){},
			uid = helpers.uid = (function(){
				var id=0;
				return function(){
					return "chart-" + id++;
				};
			})(),
			warn = helpers.warn = function(str){
				//Method for warning of errors
				if (window.console && typeof window.console.warn == "function") console.warn(str);
			},
			amd = helpers.amd = ("function" == 'function' && __webpack_require__(47)),
			//-- Math methods
			isNumber = helpers.isNumber = function(n){
				return !isNaN(parseFloat(n)) && isFinite(n);
			},
			max = helpers.max = function(array){
				return Math.max.apply( Math, array );
			},
			min = helpers.min = function(array){
				return Math.min.apply( Math, array );
			},
			cap = helpers.cap = function(valueToCap,maxValue,minValue){
				if(isNumber(maxValue)) {
					if( valueToCap > maxValue ) {
						return maxValue;
					}
				}
				else if(isNumber(minValue)){
					if ( valueToCap < minValue ){
						return minValue;
					}
				}
				return valueToCap;
			},
			getDecimalPlaces = helpers.getDecimalPlaces = function(num){
				if (num%1!==0 && isNumber(num)){
					return num.toString().split(".")[1].length;
				}
				else {
					return 0;
				}
			},
			toRadians = helpers.radians = function(degrees){
				return degrees * (Math.PI/180);
			},
			// Gets the angle from vertical upright to the point about a centre.
			getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
				var distanceFromXCenter = anglePoint.x - centrePoint.x,
					distanceFromYCenter = anglePoint.y - centrePoint.y,
					radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


				var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

				//If the segment is in the top left quadrant, we need to add another rotation to the angle
				if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
					angle += Math.PI*2;
				}

				return {
					angle: angle,
					distance: radialDistanceFromCenter
				};
			},
			aliasPixel = helpers.aliasPixel = function(pixelWidth){
				return (pixelWidth % 2 === 0) ? 0 : 0.5;
			},
			splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
				//Props to Rob Spencer at scaled innovation for his post on splining between points
				//http://scaledinnovation.com/analytics/splines/aboutSplines.html
				var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
					d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
					fa=t*d01/(d01+d12),// scaling factor for triangle Ta
					fb=t*d12/(d01+d12);
				return {
					inner : {
						x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
						y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
					},
					outer : {
						x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
						y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
					}
				};
			},
			calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
				return Math.floor(Math.log(val) / Math.LN10);
			},
			calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

				//Set a minimum step of two - a point at the top of the graph, and a point at the base
				var minSteps = 2,
					maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
					skipFitting = (minSteps >= maxSteps);

				var maxValue = max(valuesArray),
					minValue = min(valuesArray);

				// We need some degree of seperation here to calculate the scales if all the values are the same
				// Adding/minusing 0.5 will give us a range of 1.
				if (maxValue === minValue){
					maxValue += 0.5;
					// So we don't end up with a graph with a negative start value if we've said always start from zero
					if (minValue >= 0.5 && !startFromZero){
						minValue -= 0.5;
					}
					else{
						// Make up a whole number above the values
						maxValue += 0.5;
					}
				}

				var	valueRange = Math.abs(maxValue - minValue),
					rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
					graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
					graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
					graphRange = graphMax - graphMin,
					stepValue = Math.pow(10, rangeOrderOfMagnitude),
					numberOfSteps = Math.round(graphRange / stepValue);

				//If we have more space on the graph we'll use it to give more definition to the data
				while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
					if(numberOfSteps > maxSteps){
						stepValue *=2;
						numberOfSteps = Math.round(graphRange/stepValue);
						// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
						if (numberOfSteps % 1 !== 0){
							skipFitting = true;
						}
					}
					//We can fit in double the amount of scale points on the scale
					else{
						//If user has declared ints only, and the step value isn't a decimal
						if (integersOnly && rangeOrderOfMagnitude >= 0){
							//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
							if(stepValue/2 % 1 === 0){
								stepValue /=2;
								numberOfSteps = Math.round(graphRange/stepValue);
							}
							//If it would make it a float break out of the loop
							else{
								break;
							}
						}
						//If the scale doesn't have to be an int, make the scale more granular anyway.
						else{
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}

					}
				}

				if (skipFitting){
					numberOfSteps = minSteps;
					stepValue = graphRange / numberOfSteps;
				}

				return {
					steps : numberOfSteps,
					stepValue : stepValue,
					min : graphMin,
					max	: graphMin + (numberOfSteps * stepValue)
				};

			},
			/* jshint ignore:start */
			// Blows up jshint errors based on the new Function constructor
			//Templating methods
			//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
			template = helpers.template = function(templateString, valuesObject){

				// If templateString is function rather than string-template - call the function for valuesObject

				if(templateString instanceof Function){
				 	return templateString(valuesObject);
			 	}

				var cache = {};
				function tmpl(str, data){
					// Figure out if we're getting a template, or if we need to
					// load the template - and be sure to cache the result.
					var fn = !/\W/.test(str) ?
					cache[str] = cache[str] :

					// Generate a reusable function that will serve as a template
					// generator (and which will be cached).
					new Function("obj",
						"var p=[],print=function(){p.push.apply(p,arguments);};" +

						// Introduce the data as local variables using with(){}
						"with(obj){p.push('" +

						// Convert the template into pure JavaScript
						str
							.replace(/[\r\t\n]/g, " ")
							.split("<%").join("\t")
							.replace(/((^|%>)[^\t]*)'/g, "$1\r")
							.replace(/\t=(.*?)%>/g, "',$1,'")
							.split("\t").join("');")
							.split("%>").join("p.push('")
							.split("\r").join("\\'") +
						"');}return p.join('');"
					);

					// Provide some basic currying to the user
					return data ? fn( data ) : fn;
				}
				return tmpl(templateString,valuesObject);
			},
			/* jshint ignore:end */
			generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
				var labelsArray = new Array(numberOfSteps);
				if (labelTemplateString){
					each(labelsArray,function(val,index){
						labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
					});
				}
				return labelsArray;
			},
			//--Animation methods
			//Easing functions adapted from Robert Penner's easing equations
			//http://www.robertpenner.com/easing/
			easingEffects = helpers.easingEffects = {
				linear: function (t) {
					return t;
				},
				easeInQuad: function (t) {
					return t * t;
				},
				easeOutQuad: function (t) {
					return -1 * t * (t - 2);
				},
				easeInOutQuad: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
					return -1 / 2 * ((--t) * (t - 2) - 1);
				},
				easeInCubic: function (t) {
					return t * t * t;
				},
				easeOutCubic: function (t) {
					return 1 * ((t = t / 1 - 1) * t * t + 1);
				},
				easeInOutCubic: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
					return 1 / 2 * ((t -= 2) * t * t + 2);
				},
				easeInQuart: function (t) {
					return t * t * t * t;
				},
				easeOutQuart: function (t) {
					return -1 * ((t = t / 1 - 1) * t * t * t - 1);
				},
				easeInOutQuart: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
					return -1 / 2 * ((t -= 2) * t * t * t - 2);
				},
				easeInQuint: function (t) {
					return 1 * (t /= 1) * t * t * t * t;
				},
				easeOutQuint: function (t) {
					return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
				},
				easeInOutQuint: function (t) {
					if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
					return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
				},
				easeInSine: function (t) {
					return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
				},
				easeOutSine: function (t) {
					return 1 * Math.sin(t / 1 * (Math.PI / 2));
				},
				easeInOutSine: function (t) {
					return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
				},
				easeInExpo: function (t) {
					return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
				},
				easeOutExpo: function (t) {
					return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
				},
				easeInOutExpo: function (t) {
					if (t === 0) return 0;
					if (t === 1) return 1;
					if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
					return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
				},
				easeInCirc: function (t) {
					if (t >= 1) return t;
					return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
				},
				easeOutCirc: function (t) {
					return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
				},
				easeInOutCirc: function (t) {
					if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
					return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
				},
				easeInElastic: function (t) {
					var s = 1.70158;
					var p = 0;
					var a = 1;
					if (t === 0) return 0;
					if ((t /= 1) == 1) return 1;
					if (!p) p = 1 * 0.3;
					if (a < Math.abs(1)) {
						a = 1;
						s = p / 4;
					} else s = p / (2 * Math.PI) * Math.asin(1 / a);
					return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
				},
				easeOutElastic: function (t) {
					var s = 1.70158;
					var p = 0;
					var a = 1;
					if (t === 0) return 0;
					if ((t /= 1) == 1) return 1;
					if (!p) p = 1 * 0.3;
					if (a < Math.abs(1)) {
						a = 1;
						s = p / 4;
					} else s = p / (2 * Math.PI) * Math.asin(1 / a);
					return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
				},
				easeInOutElastic: function (t) {
					var s = 1.70158;
					var p = 0;
					var a = 1;
					if (t === 0) return 0;
					if ((t /= 1 / 2) == 2) return 1;
					if (!p) p = 1 * (0.3 * 1.5);
					if (a < Math.abs(1)) {
						a = 1;
						s = p / 4;
					} else s = p / (2 * Math.PI) * Math.asin(1 / a);
					if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
					return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
				},
				easeInBack: function (t) {
					var s = 1.70158;
					return 1 * (t /= 1) * t * ((s + 1) * t - s);
				},
				easeOutBack: function (t) {
					var s = 1.70158;
					return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
				},
				easeInOutBack: function (t) {
					var s = 1.70158;
					if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
					return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
				},
				easeInBounce: function (t) {
					return 1 - easingEffects.easeOutBounce(1 - t);
				},
				easeOutBounce: function (t) {
					if ((t /= 1) < (1 / 2.75)) {
						return 1 * (7.5625 * t * t);
					} else if (t < (2 / 2.75)) {
						return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
					} else if (t < (2.5 / 2.75)) {
						return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
					} else {
						return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
					}
				},
				easeInOutBounce: function (t) {
					if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
					return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
				}
			},
			//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
			requestAnimFrame = helpers.requestAnimFrame = (function(){
				return window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					function(callback) {
						return window.setTimeout(callback, 1000 / 60);
					};
			})(),
			cancelAnimFrame = helpers.cancelAnimFrame = (function(){
				return window.cancelAnimationFrame ||
					window.webkitCancelAnimationFrame ||
					window.mozCancelAnimationFrame ||
					window.oCancelAnimationFrame ||
					window.msCancelAnimationFrame ||
					function(callback) {
						return window.clearTimeout(callback, 1000 / 60);
					};
			})(),
			animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

				var currentStep = 0,
					easingFunction = easingEffects[easingString] || easingEffects.linear;

				var animationFrame = function(){
					currentStep++;
					var stepDecimal = currentStep/totalSteps;
					var easeDecimal = easingFunction(stepDecimal);

					callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
					onProgress.call(chartInstance,easeDecimal,stepDecimal);
					if (currentStep < totalSteps){
						chartInstance.animationFrame = requestAnimFrame(animationFrame);
					} else{
						onComplete.apply(chartInstance);
					}
				};
				requestAnimFrame(animationFrame);
			},
			//-- DOM methods
			getRelativePosition = helpers.getRelativePosition = function(evt){
				var mouseX, mouseY;
				var e = evt.originalEvent || evt,
					canvas = evt.currentTarget || evt.srcElement,
					boundingRect = canvas.getBoundingClientRect();

				if (e.touches){
					mouseX = e.touches[0].clientX - boundingRect.left;
					mouseY = e.touches[0].clientY - boundingRect.top;

				}
				else{
					mouseX = e.clientX - boundingRect.left;
					mouseY = e.clientY - boundingRect.top;
				}

				return {
					x : mouseX,
					y : mouseY
				};

			},
			addEvent = helpers.addEvent = function(node,eventType,method){
				if (node.addEventListener){
					node.addEventListener(eventType,method);
				} else if (node.attachEvent){
					node.attachEvent("on"+eventType, method);
				} else {
					node["on"+eventType] = method;
				}
			},
			removeEvent = helpers.removeEvent = function(node, eventType, handler){
				if (node.removeEventListener){
					node.removeEventListener(eventType, handler, false);
				} else if (node.detachEvent){
					node.detachEvent("on"+eventType,handler);
				} else{
					node["on" + eventType] = noop;
				}
			},
			bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
				// Create the events object if it's not already present
				if (!chartInstance.events) chartInstance.events = {};

				each(arrayOfEvents,function(eventName){
					chartInstance.events[eventName] = function(){
						handler.apply(chartInstance, arguments);
					};
					addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
				});
			},
			unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
				each(arrayOfEvents, function(handler,eventName){
					removeEvent(chartInstance.chart.canvas, eventName, handler);
				});
			},
			getMaximumWidth = helpers.getMaximumWidth = function(domNode){
				var container = domNode.parentNode;
				// TODO = check cross browser stuff with this.
				return container.clientWidth;
			},
			getMaximumHeight = helpers.getMaximumHeight = function(domNode){
				var container = domNode.parentNode;
				// TODO = check cross browser stuff with this.
				return container.clientHeight;
			},
			getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
			retinaScale = helpers.retinaScale = function(chart){
				var ctx = chart.ctx,
					width = chart.canvas.width,
					height = chart.canvas.height;

				if (window.devicePixelRatio) {
					ctx.canvas.style.width = width + "px";
					ctx.canvas.style.height = height + "px";
					ctx.canvas.height = height * window.devicePixelRatio;
					ctx.canvas.width = width * window.devicePixelRatio;
					ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
				}
			},
			//-- Canvas methods
			clear = helpers.clear = function(chart){
				chart.ctx.clearRect(0,0,chart.width,chart.height);
			},
			fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
				return fontStyle + " " + pixelSize+"px " + fontFamily;
			},
			longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
				ctx.font = font;
				var longest = 0;
				each(arrayOfStrings,function(string){
					var textWidth = ctx.measureText(string).width;
					longest = (textWidth > longest) ? textWidth : longest;
				});
				return longest;
			},
			drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
				ctx.beginPath();
				ctx.moveTo(x + radius, y);
				ctx.lineTo(x + width - radius, y);
				ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
				ctx.lineTo(x + width, y + height - radius);
				ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
				ctx.lineTo(x + radius, y + height);
				ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
				ctx.lineTo(x, y + radius);
				ctx.quadraticCurveTo(x, y, x + radius, y);
				ctx.closePath();
			};


		//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
		//Destroy method on the chart will remove the instance of the chart from this reference.
		Chart.instances = {};

		Chart.Type = function(data,options,chart){
			this.options = options;
			this.chart = chart;
			this.id = uid();
			//Add the chart instance to the global namespace
			Chart.instances[this.id] = this;

			// Initialize is always called when a chart type is created
			// By default it is a no op, but it should be extended
			if (options.responsive){
				this.resize();
			}
			this.initialize.call(this,data);
		};

		//Core methods that'll be a part of every chart type
		extend(Chart.Type.prototype,{
			initialize : function(){return this;},
			clear : function(){
				clear(this.chart);
				return this;
			},
			stop : function(){
				// Stops any current animation loop occuring
				cancelAnimFrame(this.animationFrame);
				return this;
			},
			resize : function(callback){
				this.stop();
				var canvas = this.chart.canvas,
					newWidth = getMaximumWidth(this.chart.canvas),
					newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

				canvas.width = this.chart.width = newWidth;
				canvas.height = this.chart.height = newHeight;

				retinaScale(this.chart);

				if (typeof callback === "function"){
					callback.apply(this, Array.prototype.slice.call(arguments, 1));
				}
				return this;
			},
			reflow : noop,
			render : function(reflow){
				if (reflow){
					this.reflow();
				}
				if (this.options.animation && !reflow){
					helpers.animationLoop(
						this.draw,
						this.options.animationSteps,
						this.options.animationEasing,
						this.options.onAnimationProgress,
						this.options.onAnimationComplete,
						this
					);
				}
				else{
					this.draw();
					this.options.onAnimationComplete.call(this);
				}
				return this;
			},
			generateLegend : function(){
				return template(this.options.legendTemplate,this);
			},
			destroy : function(){
				this.clear();
				unbindEvents(this, this.events);
				var canvas = this.chart.canvas;

				// Reset canvas height/width attributes starts a fresh with the canvas context
				canvas.width = this.chart.width;
				canvas.height = this.chart.height;

				// < IE9 doesn't support removeProperty
				if (canvas.style.removeProperty) {
					canvas.style.removeProperty('width');
					canvas.style.removeProperty('height');
				} else {
					canvas.style.removeAttribute('width');
					canvas.style.removeAttribute('height');
				}

				delete Chart.instances[this.id];
			},
			showTooltip : function(ChartElements, forceRedraw){
				// Only redraw the chart if we've actually changed what we're hovering on.
				if (typeof this.activeElements === 'undefined') this.activeElements = [];

				var isChanged = (function(Elements){
					var changed = false;

					if (Elements.length !== this.activeElements.length){
						changed = true;
						return changed;
					}

					each(Elements, function(element, index){
						if (element !== this.activeElements[index]){
							changed = true;
						}
					}, this);
					return changed;
				}).call(this, ChartElements);

				if (!isChanged && !forceRedraw){
					return;
				}
				else{
					this.activeElements = ChartElements;
				}
				this.draw();
				if(this.options.customTooltips){
					this.options.customTooltips(false);
				}
				if (ChartElements.length > 0){
					// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
					if (this.datasets && this.datasets.length > 1) {
						var dataArray,
							dataIndex;

						for (var i = this.datasets.length - 1; i >= 0; i--) {
							dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
							dataIndex = indexOf(dataArray, ChartElements[0]);
							if (dataIndex !== -1){
								break;
							}
						}
						var tooltipLabels = [],
							tooltipColors = [],
							medianPosition = (function(index) {

								// Get all the points at that particular index
								var Elements = [],
									dataCollection,
									xPositions = [],
									yPositions = [],
									xMax,
									yMax,
									xMin,
									yMin;
								helpers.each(this.datasets, function(dataset){
									dataCollection = dataset.points || dataset.bars || dataset.segments;
									if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
										Elements.push(dataCollection[dataIndex]);
									}
								});

								helpers.each(Elements, function(element) {
									xPositions.push(element.x);
									yPositions.push(element.y);


									//Include any colour information about the element
									tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
									tooltipColors.push({
										fill: element._saved.fillColor || element.fillColor,
										stroke: element._saved.strokeColor || element.strokeColor
									});

								}, this);

								yMin = min(yPositions);
								yMax = max(yPositions);

								xMin = min(xPositions);
								xMax = max(xPositions);

								return {
									x: (xMin > this.chart.width/2) ? xMin : xMax,
									y: (yMin + yMax)/2
								};
							}).call(this, dataIndex);

						new Chart.MultiTooltip({
							x: medianPosition.x,
							y: medianPosition.y,
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							xOffset: this.options.tooltipXOffset,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							titleTextColor: this.options.tooltipTitleFontColor,
							titleFontFamily: this.options.tooltipTitleFontFamily,
							titleFontStyle: this.options.tooltipTitleFontStyle,
							titleFontSize: this.options.tooltipTitleFontSize,
							cornerRadius: this.options.tooltipCornerRadius,
							labels: tooltipLabels,
							legendColors: tooltipColors,
							legendColorBackground : this.options.multiTooltipKeyBackground,
							title: ChartElements[0].label,
							chart: this.chart,
							ctx: this.chart.ctx,
							custom: this.options.customTooltips
						}).draw();

					} else {
						each(ChartElements, function(Element) {
							var tooltipPosition = Element.tooltipPosition();
							new Chart.Tooltip({
								x: Math.round(tooltipPosition.x),
								y: Math.round(tooltipPosition.y),
								xPadding: this.options.tooltipXPadding,
								yPadding: this.options.tooltipYPadding,
								fillColor: this.options.tooltipFillColor,
								textColor: this.options.tooltipFontColor,
								fontFamily: this.options.tooltipFontFamily,
								fontStyle: this.options.tooltipFontStyle,
								fontSize: this.options.tooltipFontSize,
								caretHeight: this.options.tooltipCaretSize,
								cornerRadius: this.options.tooltipCornerRadius,
								text: template(this.options.tooltipTemplate, Element),
								chart: this.chart,
								custom: this.options.customTooltips
							}).draw();
						}, this);
					}
				}
				return this;
			},
			toBase64Image : function(){
				return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
			}
		});

		Chart.Type.extend = function(extensions){

			var parent = this;

			var ChartType = function(){
				return parent.apply(this,arguments);
			};

			//Copy the prototype object of the this class
			ChartType.prototype = clone(parent.prototype);
			//Now overwrite some of the properties in the base class with the new extensions
			extend(ChartType.prototype, extensions);

			ChartType.extend = Chart.Type.extend;

			if (extensions.name || parent.prototype.name){

				var chartName = extensions.name || parent.prototype.name;
				//Assign any potential default values of the new chart type

				//If none are defined, we'll use a clone of the chart type this is being extended from.
				//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
				//doesn't define some defaults of their own.

				var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

				Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

				Chart.types[chartName] = ChartType;

				//Register this new chart type in the Chart prototype
				Chart.prototype[chartName] = function(data,options){
					var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
					return new ChartType(data,config,this);
				};
			} else{
				warn("Name not provided for this chart, so it hasn't been registered");
			}
			return parent;
		};

		Chart.Element = function(configuration){
			extend(this,configuration);
			this.initialize.apply(this,arguments);
			this.save();
		};
		extend(Chart.Element.prototype,{
			initialize : function(){},
			restore : function(props){
				if (!props){
					extend(this,this._saved);
				} else {
					each(props,function(key){
						this[key] = this._saved[key];
					},this);
				}
				return this;
			},
			save : function(){
				this._saved = clone(this);
				delete this._saved._saved;
				return this;
			},
			update : function(newProps){
				each(newProps,function(value,key){
					this._saved[key] = this[key];
					this[key] = value;
				},this);
				return this;
			},
			transition : function(props,ease){
				each(props,function(value,key){
					this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
				},this);
				return this;
			},
			tooltipPosition : function(){
				return {
					x : this.x,
					y : this.y
				};
			},
			hasValue: function(){
				return isNumber(this.value);
			}
		});

		Chart.Element.extend = inherits;


		Chart.Point = Chart.Element.extend({
			display: true,
			inRange: function(chartX,chartY){
				var hitDetectionRange = this.hitDetectionRadius + this.radius;
				return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
			},
			draw : function(){
				if (this.display){
					var ctx = this.ctx;
					ctx.beginPath();

					ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
					ctx.closePath();

					ctx.strokeStyle = this.strokeColor;
					ctx.lineWidth = this.strokeWidth;

					ctx.fillStyle = this.fillColor;

					ctx.fill();
					ctx.stroke();
				}


				//Quick debug for bezier curve splining
				//Highlights control points and the line between them.
				//Handy for dev - stripped in the min version.

				// ctx.save();
				// ctx.fillStyle = "black";
				// ctx.strokeStyle = "black"
				// ctx.beginPath();
				// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
				// ctx.fill();

				// ctx.beginPath();
				// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
				// ctx.fill();

				// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
				// ctx.lineTo(this.x, this.y);
				// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
				// ctx.stroke();

				// ctx.restore();



			}
		});

		Chart.Arc = Chart.Element.extend({
			inRange : function(chartX,chartY){

				var pointRelativePosition = helpers.getAngleFromPoint(this, {
					x: chartX,
					y: chartY
				});

				//Check if within the range of the open/close angle
				var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
					withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

				return (betweenAngles && withinRadius);
				//Ensure within the outside of the arc centre, but inside arc outer
			},
			tooltipPosition : function(){
				var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
					rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
				return {
					x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
					y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
				};
			},
			draw : function(animationPercent){

				var easingDecimal = animationPercent || 1;

				var ctx = this.ctx;

				ctx.beginPath();

				ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);

				ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);

				ctx.closePath();
				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.lineJoin = 'bevel';

				if (this.showStroke){
					ctx.stroke();
				}
			}
		});

		Chart.Rectangle = Chart.Element.extend({
			draw : function(){
				var ctx = this.ctx,
					halfWidth = this.width/2,
					leftX = this.x - halfWidth,
					rightX = this.x + halfWidth,
					top = this.base - (this.base - this.y),
					halfStroke = this.strokeWidth / 2;

				// Canvas doesn't allow us to stroke inside the width so we can
				// adjust the sizes to fit if we're setting a stroke on the line
				if (this.showStroke){
					leftX += halfStroke;
					rightX -= halfStroke;
					top += halfStroke;
				}

				ctx.beginPath();

				ctx.fillStyle = this.fillColor;
				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				// It'd be nice to keep this class totally generic to any rectangle
				// and simply specify which border to miss out.
				ctx.moveTo(leftX, this.base);
				ctx.lineTo(leftX, top);
				ctx.lineTo(rightX, top);
				ctx.lineTo(rightX, this.base);
				ctx.fill();
				if (this.showStroke){
					ctx.stroke();
				}
			},
			height : function(){
				return this.base - this.y;
			},
			inRange : function(chartX,chartY){
				return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
			}
		});

		Chart.Tooltip = Chart.Element.extend({
			draw : function(){

				var ctx = this.chart.ctx;

				ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

				this.xAlign = "center";
				this.yAlign = "above";

				//Distance between the actual element.y position and the start of the tooltip caret
				var caretPadding = this.caretPadding = 2;

				var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
					tooltipRectHeight = this.fontSize + 2*this.yPadding,
					tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

				if (this.x + tooltipWidth/2 >this.chart.width){
					this.xAlign = "left";
				} else if (this.x - tooltipWidth/2 < 0){
					this.xAlign = "right";
				}

				if (this.y - tooltipHeight < 0){
					this.yAlign = "below";
				}


				var tooltipX = this.x - tooltipWidth/2,
					tooltipY = this.y - tooltipHeight;

				ctx.fillStyle = this.fillColor;

				// Custom Tooltips
				if(this.custom){
					this.custom(this);
				}
				else{
					switch(this.yAlign)
					{
					case "above":
						//Draw a caret above the x/y
						ctx.beginPath();
						ctx.moveTo(this.x,this.y - caretPadding);
						ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
						ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
						ctx.closePath();
						ctx.fill();
						break;
					case "below":
						tooltipY = this.y + caretPadding + this.caretHeight;
						//Draw a caret below the x/y
						ctx.beginPath();
						ctx.moveTo(this.x, this.y + caretPadding);
						ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
						ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
						ctx.closePath();
						ctx.fill();
						break;
					}

					switch(this.xAlign)
					{
					case "left":
						tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
						break;
					case "right":
						tooltipX = this.x - (this.cornerRadius + this.caretHeight);
						break;
					}

					drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

					ctx.fill();

					ctx.fillStyle = this.textColor;
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";
					ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
				}
			}
		});

		Chart.MultiTooltip = Chart.Element.extend({
			initialize : function(){
				this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

				this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

				this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;

				this.ctx.font = this.titleFont;

				var titleWidth = this.ctx.measureText(this.title).width,
					//Label has a legend square as well so account for this.
					labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
					longestTextWidth = max([labelWidth,titleWidth]);

				this.width = longestTextWidth + (this.xPadding*2);


				var halfHeight = this.height/2;

				//Check to ensure the height will fit on the canvas
				if (this.y - halfHeight < 0 ){
					this.y = halfHeight;
				} else if (this.y + halfHeight > this.chart.height){
					this.y = this.chart.height - halfHeight;
				}

				//Decide whether to align left or right based on position on canvas
				if (this.x > this.chart.width/2){
					this.x -= this.xOffset + this.width;
				} else {
					this.x += this.xOffset;
				}


			},
			getLineHeight : function(index){
				var baseLineHeight = this.y - (this.height/2) + this.yPadding,
					afterTitleIndex = index-1;

				//If the index is zero, we're getting the title
				if (index === 0){
					return baseLineHeight + this.titleFontSize/2;
				} else{
					return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;
				}

			},
			draw : function(){
				// Custom Tooltips
				if(this.custom){
					this.custom(this);
				}
				else{
					drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
					var ctx = this.ctx;
					ctx.fillStyle = this.fillColor;
					ctx.fill();
					ctx.closePath();

					ctx.textAlign = "left";
					ctx.textBaseline = "middle";
					ctx.fillStyle = this.titleTextColor;
					ctx.font = this.titleFont;

					ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

					ctx.font = this.font;
					helpers.each(this.labels,function(label,index){
						ctx.fillStyle = this.textColor;
						ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

						//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
						//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
						//Instead we'll make a white filled block to put the legendColour palette over.

						ctx.fillStyle = this.legendColorBackground;
						ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

						ctx.fillStyle = this.legendColors[index].fill;
						ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


					},this);
				}
			}
		});

		Chart.Scale = Chart.Element.extend({
			initialize : function(){
				this.fit();
			},
			buildYLabels : function(){
				this.yLabels = [];

				var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

				for (var i=0; i<=this.steps; i++){
					this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
				}
				this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;
			},
			addXLabel : function(label){
				this.xLabels.push(label);
				this.valuesCount++;
				this.fit();
			},
			removeXLabel : function(){
				this.xLabels.shift();
				this.valuesCount--;
				this.fit();
			},
			// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
			fit: function(){
				// First we need the width of the yLabels, assuming the xLabels aren't rotated

				// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
				this.startPoint = (this.display) ? this.fontSize : 0;
				this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

				// Apply padding settings to the start and end point.
				this.startPoint += this.padding;
				this.endPoint -= this.padding;

				// Cache the starting height, so can determine if we need to recalculate the scale yAxis
				var cachedHeight = this.endPoint - this.startPoint,
					cachedYLabelWidth;

				// Build the current yLabels so we have an idea of what size they'll be to start
				/*
				 *	This sets what is returned from calculateScaleRange as static properties of this class:
				 *
					this.steps;
					this.stepValue;
					this.min;
					this.max;
				 *
				 */
				this.calculateYRange(cachedHeight);

				// With these properties set we can now build the array of yLabels
				// and also the width of the largest yLabel
				this.buildYLabels();

				this.calculateXLabelRotation();

				while((cachedHeight > this.endPoint - this.startPoint)){
					cachedHeight = this.endPoint - this.startPoint;
					cachedYLabelWidth = this.yLabelWidth;

					this.calculateYRange(cachedHeight);
					this.buildYLabels();

					// Only go through the xLabel loop again if the yLabel width has changed
					if (cachedYLabelWidth < this.yLabelWidth){
						this.calculateXLabelRotation();
					}
				}

			},
			calculateXLabelRotation : function(){
				//Get the width of each grid by calculating the difference
				//between x offsets between 0 and 1.

				this.ctx.font = this.font;

				var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
					lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
					firstRotated,
					lastRotated;


				this.xScalePaddingRight = lastWidth/2 + 3;
				this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

				this.xLabelRotation = 0;
				if (this.display){
					var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
						cosRotation,
						firstRotatedWidth;
					this.xLabelWidth = originalLabelWidth;
					//Allow 3 pixels x2 padding either side for label readability
					var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

					//Max label rotate should be 90 - also act as a loop counter
					while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
						cosRotation = Math.cos(toRadians(this.xLabelRotation));

						firstRotated = cosRotation * firstWidth;
						lastRotated = cosRotation * lastWidth;

						// We're right aligning the text now.
						if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
							this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
						}
						this.xScalePaddingRight = this.fontSize/2;


						this.xLabelRotation++;
						this.xLabelWidth = cosRotation * originalLabelWidth;

					}
					if (this.xLabelRotation > 0){
						this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
					}
				}
				else{
					this.xLabelWidth = 0;
					this.xScalePaddingRight = this.padding;
					this.xScalePaddingLeft = this.padding;
				}

			},
			// Needs to be overidden in each Chart type
			// Otherwise we need to pass all the data into the scale class
			calculateYRange: noop,
			drawingArea: function(){
				return this.startPoint - this.endPoint;
			},
			calculateY : function(value){
				var scalingFactor = this.drawingArea() / (this.min - this.max);
				return this.endPoint - (scalingFactor * (value - this.min));
			},
			calculateX : function(index){
				var isRotated = (this.xLabelRotation > 0),
					// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
					innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
					valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
					valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

				if (this.offsetGridLines){
					valueOffset += (valueWidth/2);
				}

				return Math.round(valueOffset);
			},
			update : function(newProps){
				helpers.extend(this, newProps);
				this.fit();
			},
			draw : function(){
				var ctx = this.ctx,
					yLabelGap = (this.endPoint - this.startPoint) / this.steps,
					xStart = Math.round(this.xScalePaddingLeft);
				if (this.display){
					ctx.fillStyle = this.textColor;
					ctx.font = this.font;
					each(this.yLabels,function(labelString,index){
						var yLabelCenter = this.endPoint - (yLabelGap * index),
							linePositionY = Math.round(yLabelCenter),
							drawHorizontalLine = this.showHorizontalLines;

						ctx.textAlign = "right";
						ctx.textBaseline = "middle";
						if (this.showLabels){
							ctx.fillText(labelString,xStart - 10,yLabelCenter);
						}

						// This is X axis, so draw it
						if (index === 0 && !drawHorizontalLine){
							drawHorizontalLine = true;
						}

						if (drawHorizontalLine){
							ctx.beginPath();
						}

						if (index > 0){
							// This is a grid line in the centre, so drop that
							ctx.lineWidth = this.gridLineWidth;
							ctx.strokeStyle = this.gridLineColor;
						} else {
							// This is the first line on the scale
							ctx.lineWidth = this.lineWidth;
							ctx.strokeStyle = this.lineColor;
						}

						linePositionY += helpers.aliasPixel(ctx.lineWidth);

						if(drawHorizontalLine){
							ctx.moveTo(xStart, linePositionY);
							ctx.lineTo(this.width, linePositionY);
							ctx.stroke();
							ctx.closePath();
						}

						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
						ctx.beginPath();
						ctx.moveTo(xStart - 5, linePositionY);
						ctx.lineTo(xStart, linePositionY);
						ctx.stroke();
						ctx.closePath();

					},this);

					each(this.xLabels,function(label,index){
						var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
							// Check to see if line/bar here and decide where to place the line
							linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
							isRotated = (this.xLabelRotation > 0),
							drawVerticalLine = this.showVerticalLines;

						// This is Y axis, so draw it
						if (index === 0 && !drawVerticalLine){
							drawVerticalLine = true;
						}

						if (drawVerticalLine){
							ctx.beginPath();
						}

						if (index > 0){
							// This is a grid line in the centre, so drop that
							ctx.lineWidth = this.gridLineWidth;
							ctx.strokeStyle = this.gridLineColor;
						} else {
							// This is the first line on the scale
							ctx.lineWidth = this.lineWidth;
							ctx.strokeStyle = this.lineColor;
						}

						if (drawVerticalLine){
							ctx.moveTo(linePos,this.endPoint);
							ctx.lineTo(linePos,this.startPoint - 3);
							ctx.stroke();
							ctx.closePath();
						}


						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;


						// Small lines at the bottom of the base grid line
						ctx.beginPath();
						ctx.moveTo(linePos,this.endPoint);
						ctx.lineTo(linePos,this.endPoint + 5);
						ctx.stroke();
						ctx.closePath();

						ctx.save();
						ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
						ctx.rotate(toRadians(this.xLabelRotation)*-1);
						ctx.font = this.font;
						ctx.textAlign = (isRotated) ? "right" : "center";
						ctx.textBaseline = (isRotated) ? "middle" : "top";
						ctx.fillText(label, 0, 0);
						ctx.restore();
					},this);

				}
			}

		});

		Chart.RadialScale = Chart.Element.extend({
			initialize: function(){
				this.size = min([this.height, this.width]);
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			},
			calculateCenterOffset: function(value){
				// Take into account half font size + the yPadding of the top value
				var scalingFactor = this.drawingArea / (this.max - this.min);

				return (value - this.min) * scalingFactor;
			},
			update : function(){
				if (!this.lineArc){
					this.setScaleSize();
				} else {
					this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
				}
				this.buildYLabels();
			},
			buildYLabels: function(){
				this.yLabels = [];

				var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

				for (var i=0; i<=this.steps; i++){
					this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
				}
			},
			getCircumference : function(){
				return ((Math.PI*2) / this.valuesCount);
			},
			setScaleSize: function(){
				/*
				 * Right, this is really confusing and there is a lot of maths going on here
				 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
				 *
				 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
				 *
				 * Solution:
				 *
				 * We assume the radius of the polygon is half the size of the canvas at first
				 * at each index we check if the text overlaps.
				 *
				 * Where it does, we store that angle and that index.
				 *
				 * After finding the largest index and angle we calculate how much we need to remove
				 * from the shape radius to move the point inwards by that x.
				 *
				 * We average the left and right distances to get the maximum shape radius that can fit in the box
				 * along with labels.
				 *
				 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
				 * on each side, removing that from the size, halving it and adding the left x protrusion width.
				 *
				 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
				 * and position it in the most space efficient manner
				 *
				 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
				 */


				// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
				// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
				var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
					pointPosition,
					i,
					textWidth,
					halfTextWidth,
					furthestRight = this.width,
					furthestRightIndex,
					furthestRightAngle,
					furthestLeft = 0,
					furthestLeftIndex,
					furthestLeftAngle,
					xProtrusionLeft,
					xProtrusionRight,
					radiusReductionRight,
					radiusReductionLeft,
					maxWidthRadius;
				this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
				for (i=0;i<this.valuesCount;i++){
					// 5px to space the text slightly out - similar to what we do in the draw function.
					pointPosition = this.getPointPosition(i, largestPossibleRadius);
					textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
					if (i === 0 || i === this.valuesCount/2){
						// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
						// of the radar chart, so text will be aligned centrally, so we'll half it and compare
						// w/left and right text sizes
						halfTextWidth = textWidth/2;
						if (pointPosition.x + halfTextWidth > furthestRight) {
							furthestRight = pointPosition.x + halfTextWidth;
							furthestRightIndex = i;
						}
						if (pointPosition.x - halfTextWidth < furthestLeft) {
							furthestLeft = pointPosition.x - halfTextWidth;
							furthestLeftIndex = i;
						}
					}
					else if (i < this.valuesCount/2) {
						// Less than half the values means we'll left align the text
						if (pointPosition.x + textWidth > furthestRight) {
							furthestRight = pointPosition.x + textWidth;
							furthestRightIndex = i;
						}
					}
					else if (i > this.valuesCount/2){
						// More than half the values means we'll right align the text
						if (pointPosition.x - textWidth < furthestLeft) {
							furthestLeft = pointPosition.x - textWidth;
							furthestLeftIndex = i;
						}
					}
				}

				xProtrusionLeft = furthestLeft;

				xProtrusionRight = Math.ceil(furthestRight - this.width);

				furthestRightAngle = this.getIndexAngle(furthestRightIndex);

				furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

				radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

				radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

				// Ensure we actually need to reduce the size of the chart
				radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
				radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

				this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

				//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
				this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

			},
			setCenterPoint: function(leftMovement, rightMovement){

				var maxRight = this.width - rightMovement - this.drawingArea,
					maxLeft = leftMovement + this.drawingArea;

				this.xCenter = (maxLeft + maxRight)/2;
				// Always vertically in the centre as the text height doesn't change
				this.yCenter = (this.height/2);
			},

			getIndexAngle : function(index){
				var angleMultiplier = (Math.PI * 2) / this.valuesCount;
				// Start from the top instead of right, so remove a quarter of the circle

				return index * angleMultiplier - (Math.PI/2);
			},
			getPointPosition : function(index, distanceFromCenter){
				var thisAngle = this.getIndexAngle(index);
				return {
					x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
					y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
				};
			},
			draw: function(){
				if (this.display){
					var ctx = this.ctx;
					each(this.yLabels, function(label, index){
						// Don't draw a centre value
						if (index > 0){
							var yCenterOffset = index * (this.drawingArea/this.steps),
								yHeight = this.yCenter - yCenterOffset,
								pointPosition;

							// Draw circular lines around the scale
							if (this.lineWidth > 0){
								ctx.strokeStyle = this.lineColor;
								ctx.lineWidth = this.lineWidth;

								if(this.lineArc){
									ctx.beginPath();
									ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
									ctx.closePath();
									ctx.stroke();
								} else{
									ctx.beginPath();
									for (var i=0;i<this.valuesCount;i++)
									{
										pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
										if (i === 0){
											ctx.moveTo(pointPosition.x, pointPosition.y);
										} else {
											ctx.lineTo(pointPosition.x, pointPosition.y);
										}
									}
									ctx.closePath();
									ctx.stroke();
								}
							}
							if(this.showLabels){
								ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
								if (this.showLabelBackdrop){
									var labelWidth = ctx.measureText(label).width;
									ctx.fillStyle = this.backdropColor;
									ctx.fillRect(
										this.xCenter - labelWidth/2 - this.backdropPaddingX,
										yHeight - this.fontSize/2 - this.backdropPaddingY,
										labelWidth + this.backdropPaddingX*2,
										this.fontSize + this.backdropPaddingY*2
									);
								}
								ctx.textAlign = 'center';
								ctx.textBaseline = "middle";
								ctx.fillStyle = this.fontColor;
								ctx.fillText(label, this.xCenter, yHeight);
							}
						}
					}, this);

					if (!this.lineArc){
						ctx.lineWidth = this.angleLineWidth;
						ctx.strokeStyle = this.angleLineColor;
						for (var i = this.valuesCount - 1; i >= 0; i--) {
							if (this.angleLineWidth > 0){
								var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
								ctx.beginPath();
								ctx.moveTo(this.xCenter, this.yCenter);
								ctx.lineTo(outerPosition.x, outerPosition.y);
								ctx.stroke();
								ctx.closePath();
							}
							// Extra 3px out for some label spacing
							var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
							ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
							ctx.fillStyle = this.pointLabelFontColor;

							var labelsCount = this.labels.length,
								halfLabelsCount = this.labels.length/2,
								quarterLabelsCount = halfLabelsCount/2,
								upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
								exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
							if (i === 0){
								ctx.textAlign = 'center';
							} else if(i === halfLabelsCount){
								ctx.textAlign = 'center';
							} else if (i < halfLabelsCount){
								ctx.textAlign = 'left';
							} else {
								ctx.textAlign = 'right';
							}

							// Set the correct text baseline based on outer positioning
							if (exactQuarter){
								ctx.textBaseline = 'middle';
							} else if (upperHalf){
								ctx.textBaseline = 'bottom';
							} else {
								ctx.textBaseline = 'top';
							}

							ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
						}
					}
				}
			}
		});

		// Attach global event to resize each chart instance when the browser resizes
		helpers.addEvent(window, "resize", (function(){
			// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
			var timeout;
			return function(){
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					each(Chart.instances,function(instance){
						// If the responsive flag is set in the chart instance config
						// Cascade the resize event down to the chart.
						if (instance.options.responsive){
							instance.resize(instance.render, true);
						}
					});
				}, 50);
			};
		})());


		if (amd) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
				return Chart;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module === 'object' && module.exports) {
			module.exports = Chart;
		}

		root.Chart = Chart;

		Chart.noConflict = function(){
			root.Chart = previous;
			return Chart;
		};

	}).call(this);

	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			helpers = Chart.helpers;


		var defaultConfig = {
			//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero : true,

			//Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,

			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",

			//Number - Width of the grid lines
			scaleGridLineWidth : 1,

			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,

			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,

			//Boolean - If there is a stroke on each bar
			barShowStroke : true,

			//Number - Pixel width of the bar stroke
			barStrokeWidth : 2,

			//Number - Spacing between each of the X value sets
			barValueSpacing : 5,

			//Number - Spacing between data sets within X values
			barDatasetSpacing : 1,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		};


		Chart.Type.extend({
			name: "Bar",
			defaults : defaultConfig,
			initialize:  function(data){

				//Expose options as a scope variable here so we can access it in the ScaleClass
				var options = this.options;

				this.ScaleClass = Chart.Scale.extend({
					offsetGridLines : true,
					calculateBarX : function(datasetCount, datasetIndex, barIndex){
						//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
						var xWidth = this.calculateBaseWidth(),
							xAbsolute = this.calculateX(barIndex) - (xWidth/2),
							barWidth = this.calculateBarWidth(datasetCount);

						return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
					},
					calculateBaseWidth : function(){
						return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
					},
					calculateBarWidth : function(datasetCount){
						//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
						var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

						return (baseWidth / datasetCount);
					}
				});

				this.datasets = [];

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

						this.eachBars(function(bar){
							bar.restore(['fillColor', 'strokeColor']);
						});
						helpers.each(activeBars, function(activeBar){
							activeBar.fillColor = activeBar.highlightFill;
							activeBar.strokeColor = activeBar.highlightStroke;
						});
						this.showTooltip(activeBars);
					});
				}

				//Declare the extension of the default point, to cater for the options passed in to the constructor
				this.BarClass = Chart.Rectangle.extend({
					strokeWidth : this.options.barStrokeWidth,
					showStroke : this.options.barShowStroke,
					ctx : this.chart.ctx
				});

				//Iterate through each of the datasets, and build this into a property of the chart
				helpers.each(data.datasets,function(dataset,datasetIndex){

					var datasetObject = {
						label : dataset.label || null,
						fillColor : dataset.fillColor,
						strokeColor : dataset.strokeColor,
						bars : []
					};

					this.datasets.push(datasetObject);

					helpers.each(dataset.data,function(dataPoint,index){
						//Add a new point for each piece of data, passing any required data to draw.
						datasetObject.bars.push(new this.BarClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							strokeColor : dataset.strokeColor,
							fillColor : dataset.fillColor,
							highlightFill : dataset.highlightFill || dataset.fillColor,
							highlightStroke : dataset.highlightStroke || dataset.strokeColor
						}));
					},this);

				},this);

				this.buildScale(data.labels);

				this.BarClass.prototype.base = this.scale.endPoint;

				this.eachBars(function(bar, index, datasetIndex){
					helpers.extend(bar, {
						width : this.scale.calculateBarWidth(this.datasets.length),
						x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
						y: this.scale.endPoint
					});
					bar.save();
				}, this);

				this.render();
			},
			update : function(){
				this.scale.update();
				// Reset any highlight colours before updating.
				helpers.each(this.activeElements, function(activeElement){
					activeElement.restore(['fillColor', 'strokeColor']);
				});

				this.eachBars(function(bar){
					bar.save();
				});
				this.render();
			},
			eachBars : function(callback){
				helpers.each(this.datasets,function(dataset, datasetIndex){
					helpers.each(dataset.bars, callback, this, datasetIndex);
				},this);
			},
			getBarsAtEvent : function(e){
				var barsArray = [],
					eventPosition = helpers.getRelativePosition(e),
					datasetIterator = function(dataset){
						barsArray.push(dataset.bars[barIndex]);
					},
					barIndex;

				for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
					for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
						if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
							helpers.each(this.datasets, datasetIterator);
							return barsArray;
						}
					}
				}

				return barsArray;
			},
			buildScale : function(labels){
				var self = this;

				var dataTotal = function(){
					var values = [];
					self.eachBars(function(bar){
						values.push(bar.value);
					});
					return values;
				};

				var scaleOptions = {
					templateString : this.options.scaleLabel,
					height : this.chart.height,
					width : this.chart.width,
					ctx : this.chart.ctx,
					textColor : this.options.scaleFontColor,
					fontSize : this.options.scaleFontSize,
					fontStyle : this.options.scaleFontStyle,
					fontFamily : this.options.scaleFontFamily,
					valuesCount : labels.length,
					beginAtZero : this.options.scaleBeginAtZero,
					integersOnly : this.options.scaleIntegersOnly,
					calculateYRange: function(currentHeight){
						var updatedRanges = helpers.calculateScaleRange(
							dataTotal(),
							currentHeight,
							this.fontSize,
							this.beginAtZero,
							this.integersOnly
						);
						helpers.extend(this, updatedRanges);
					},
					xLabels : labels,
					font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
					lineWidth : this.options.scaleLineWidth,
					lineColor : this.options.scaleLineColor,
					showHorizontalLines : this.options.scaleShowHorizontalLines,
					showVerticalLines : this.options.scaleShowVerticalLines,
					gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
					gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
					padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
					showLabels : this.options.scaleShowLabels,
					display : this.options.showScale
				};

				if (this.options.scaleOverride){
					helpers.extend(scaleOptions, {
						calculateYRange: helpers.noop,
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					});
				}

				this.scale = new this.ScaleClass(scaleOptions);
			},
			addData : function(valuesArray,label){
				//Map the values array for each of the datasets
				helpers.each(valuesArray,function(value,datasetIndex){
					//Add a new point for each piece of data, passing any required data to draw.
					this.datasets[datasetIndex].bars.push(new this.BarClass({
						value : value,
						label : label,
						x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
						y: this.scale.endPoint,
						width : this.scale.calculateBarWidth(this.datasets.length),
						base : this.scale.endPoint,
						strokeColor : this.datasets[datasetIndex].strokeColor,
						fillColor : this.datasets[datasetIndex].fillColor
					}));
				},this);

				this.scale.addXLabel(label);
				//Then re-render the chart.
				this.update();
			},
			removeData : function(){
				this.scale.removeXLabel();
				//Then re-render the chart.
				helpers.each(this.datasets,function(dataset){
					dataset.bars.shift();
				},this);
				this.update();
			},
			reflow : function(){
				helpers.extend(this.BarClass.prototype,{
					y: this.scale.endPoint,
					base : this.scale.endPoint
				});
				var newScaleProps = helpers.extend({
					height : this.chart.height,
					width : this.chart.width
				});
				this.scale.update(newScaleProps);
			},
			draw : function(ease){
				var easingDecimal = ease || 1;
				this.clear();

				var ctx = this.chart.ctx;

				this.scale.draw(easingDecimal);

				//Draw all the bars for each dataset
				helpers.each(this.datasets,function(dataset,datasetIndex){
					helpers.each(dataset.bars,function(bar,index){
						if (bar.hasValue()){
							bar.base = this.scale.endPoint;
							//Transition then draw
							bar.transition({
								x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
								y : this.scale.calculateY(bar.value),
								width : this.scale.calculateBarWidth(this.datasets.length)
							}, easingDecimal).draw();
						}
					},this);

				},this);
			}
		});


	}).call(this);

	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			//Cache a local reference to Chart.helpers
			helpers = Chart.helpers;

		var defaultConfig = {
			//Boolean - Whether we should show a stroke on each segment
			segmentShowStroke : true,

			//String - The colour of each segment stroke
			segmentStrokeColor : "#fff",

			//Number - The width of each segment stroke
			segmentStrokeWidth : 2,

			//The percentage of the chart that we cut out of the middle.
			percentageInnerCutout : 50,

			//Number - Amount of animation steps
			animationSteps : 100,

			//String - Animation easing effect
			animationEasing : "easeOutBounce",

			//Boolean - Whether we animate the rotation of the Doughnut
			animateRotate : true,

			//Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale : false,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

		};


		Chart.Type.extend({
			//Passing in a name registers this chart in the Chart namespace
			name: "Doughnut",
			//Providing a defaults will also register the deafults in the chart namespace
			defaults : defaultConfig,
			//Initialize is fired when the chart is initialized - Data is passed in as a parameter
			//Config is automatically merged by the core of Chart.js, and is available at this.options
			initialize:  function(data){

				//Declare segments as a static property to prevent inheriting across the Chart type prototype
				this.segments = [];
				this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

				this.SegmentArc = Chart.Arc.extend({
					ctx : this.chart.ctx,
					x : this.chart.width/2,
					y : this.chart.height/2
				});

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

						helpers.each(this.segments,function(segment){
							segment.restore(["fillColor"]);
						});
						helpers.each(activeSegments,function(activeSegment){
							activeSegment.fillColor = activeSegment.highlightColor;
						});
						this.showTooltip(activeSegments);
					});
				}
				this.calculateTotal(data);

				helpers.each(data,function(datapoint, index){
					this.addData(datapoint, index, true);
				},this);

				this.render();
			},
			getSegmentsAtEvent : function(e){
				var segmentsArray = [];

				var location = helpers.getRelativePosition(e);

				helpers.each(this.segments,function(segment){
					if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
				},this);
				return segmentsArray;
			},
			addData : function(segment, atIndex, silent){
				var index = atIndex || this.segments.length;
				this.segments.splice(index, 0, new this.SegmentArc({
					value : segment.value,
					outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
					innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
					fillColor : segment.color,
					highlightColor : segment.highlight || segment.color,
					showStroke : this.options.segmentShowStroke,
					strokeWidth : this.options.segmentStrokeWidth,
					strokeColor : this.options.segmentStrokeColor,
					startAngle : Math.PI * 1.5,
					circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
					label : segment.label
				}));
				if (!silent){
					this.reflow();
					this.update();
				}
			},
			calculateCircumference : function(value){
				return (Math.PI*2)*(Math.abs(value) / this.total);
			},
			calculateTotal : function(data){
				this.total = 0;
				helpers.each(data,function(segment){
					this.total += Math.abs(segment.value);
				},this);
			},
			update : function(){
				this.calculateTotal(this.segments);

				// Reset any highlight colours before updating.
				helpers.each(this.activeElements, function(activeElement){
					activeElement.restore(['fillColor']);
				});

				helpers.each(this.segments,function(segment){
					segment.save();
				});
				this.render();
			},

			removeData: function(atIndex){
				var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
				this.segments.splice(indexToDelete, 1);
				this.reflow();
				this.update();
			},

			reflow : function(){
				helpers.extend(this.SegmentArc.prototype,{
					x : this.chart.width/2,
					y : this.chart.height/2
				});
				this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
				helpers.each(this.segments, function(segment){
					segment.update({
						outerRadius : this.outerRadius,
						innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
					});
				}, this);
			},
			draw : function(easeDecimal){
				var animDecimal = (easeDecimal) ? easeDecimal : 1;
				this.clear();
				helpers.each(this.segments,function(segment,index){
					segment.transition({
						circumference : this.calculateCircumference(segment.value),
						outerRadius : this.outerRadius,
						innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
					},animDecimal);

					segment.endAngle = segment.startAngle + segment.circumference;

					segment.draw();
					if (index === 0){
						segment.startAngle = Math.PI * 1.5;
					}
					//Check to see if it's the last segment, if not get the next and update the start angle
					if (index < this.segments.length-1){
						this.segments[index+1].startAngle = segment.endAngle;
					}
				},this);

			}
		});

		Chart.types.Doughnut.extend({
			name : "Pie",
			defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
		});

	}).call(this);
	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			helpers = Chart.helpers;

		var defaultConfig = {

			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,

			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",

			//Number - Width of the grid lines
			scaleGridLineWidth : 1,

			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,

			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,

			//Boolean - Whether the line is curved between points
			bezierCurve : true,

			//Number - Tension of the bezier curve between points
			bezierCurveTension : 0.4,

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 4,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		};


		Chart.Type.extend({
			name: "Line",
			defaults : defaultConfig,
			initialize:  function(data){
				//Declare the extension of the default point, to cater for the options passed in to the constructor
				this.PointClass = Chart.Point.extend({
					strokeWidth : this.options.pointDotStrokeWidth,
					radius : this.options.pointDotRadius,
					display: this.options.pointDot,
					hitDetectionRadius : this.options.pointHitDetectionRadius,
					ctx : this.chart.ctx,
					inRange : function(mouseX){
						return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
					}
				});

				this.datasets = [];

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
						this.eachPoints(function(point){
							point.restore(['fillColor', 'strokeColor']);
						});
						helpers.each(activePoints, function(activePoint){
							activePoint.fillColor = activePoint.highlightFill;
							activePoint.strokeColor = activePoint.highlightStroke;
						});
						this.showTooltip(activePoints);
					});
				}

				//Iterate through each of the datasets, and build this into a property of the chart
				helpers.each(data.datasets,function(dataset){

					var datasetObject = {
						label : dataset.label || null,
						fillColor : dataset.fillColor,
						strokeColor : dataset.strokeColor,
						pointColor : dataset.pointColor,
						pointStrokeColor : dataset.pointStrokeColor,
						points : []
					};

					this.datasets.push(datasetObject);


					helpers.each(dataset.data,function(dataPoint,index){
						//Add a new point for each piece of data, passing any required data to draw.
						datasetObject.points.push(new this.PointClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							strokeColor : dataset.pointStrokeColor,
							fillColor : dataset.pointColor,
							highlightFill : dataset.pointHighlightFill || dataset.pointColor,
							highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
						}));
					},this);

					this.buildScale(data.labels);


					this.eachPoints(function(point, index){
						helpers.extend(point, {
							x: this.scale.calculateX(index),
							y: this.scale.endPoint
						});
						point.save();
					}, this);

				},this);


				this.render();
			},
			update : function(){
				this.scale.update();
				// Reset any highlight colours before updating.
				helpers.each(this.activeElements, function(activeElement){
					activeElement.restore(['fillColor', 'strokeColor']);
				});
				this.eachPoints(function(point){
					point.save();
				});
				this.render();
			},
			eachPoints : function(callback){
				helpers.each(this.datasets,function(dataset){
					helpers.each(dataset.points,callback,this);
				},this);
			},
			getPointsAtEvent : function(e){
				var pointsArray = [],
					eventPosition = helpers.getRelativePosition(e);
				helpers.each(this.datasets,function(dataset){
					helpers.each(dataset.points,function(point){
						if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
					});
				},this);
				return pointsArray;
			},
			buildScale : function(labels){
				var self = this;

				var dataTotal = function(){
					var values = [];
					self.eachPoints(function(point){
						values.push(point.value);
					});

					return values;
				};

				var scaleOptions = {
					templateString : this.options.scaleLabel,
					height : this.chart.height,
					width : this.chart.width,
					ctx : this.chart.ctx,
					textColor : this.options.scaleFontColor,
					fontSize : this.options.scaleFontSize,
					fontStyle : this.options.scaleFontStyle,
					fontFamily : this.options.scaleFontFamily,
					valuesCount : labels.length,
					beginAtZero : this.options.scaleBeginAtZero,
					integersOnly : this.options.scaleIntegersOnly,
					calculateYRange : function(currentHeight){
						var updatedRanges = helpers.calculateScaleRange(
							dataTotal(),
							currentHeight,
							this.fontSize,
							this.beginAtZero,
							this.integersOnly
						);
						helpers.extend(this, updatedRanges);
					},
					xLabels : labels,
					font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
					lineWidth : this.options.scaleLineWidth,
					lineColor : this.options.scaleLineColor,
					showHorizontalLines : this.options.scaleShowHorizontalLines,
					showVerticalLines : this.options.scaleShowVerticalLines,
					gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
					gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
					padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
					showLabels : this.options.scaleShowLabels,
					display : this.options.showScale
				};

				if (this.options.scaleOverride){
					helpers.extend(scaleOptions, {
						calculateYRange: helpers.noop,
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					});
				}


				this.scale = new Chart.Scale(scaleOptions);
			},
			addData : function(valuesArray,label){
				//Map the values array for each of the datasets

				helpers.each(valuesArray,function(value,datasetIndex){
					//Add a new point for each piece of data, passing any required data to draw.
					this.datasets[datasetIndex].points.push(new this.PointClass({
						value : value,
						label : label,
						x: this.scale.calculateX(this.scale.valuesCount+1),
						y: this.scale.endPoint,
						strokeColor : this.datasets[datasetIndex].pointStrokeColor,
						fillColor : this.datasets[datasetIndex].pointColor
					}));
				},this);

				this.scale.addXLabel(label);
				//Then re-render the chart.
				this.update();
			},
			removeData : function(){
				this.scale.removeXLabel();
				//Then re-render the chart.
				helpers.each(this.datasets,function(dataset){
					dataset.points.shift();
				},this);
				this.update();
			},
			reflow : function(){
				var newScaleProps = helpers.extend({
					height : this.chart.height,
					width : this.chart.width
				});
				this.scale.update(newScaleProps);
			},
			draw : function(ease){
				var easingDecimal = ease || 1;
				this.clear();

				var ctx = this.chart.ctx;

				// Some helper methods for getting the next/prev points
				var hasValue = function(item){
					return item.value !== null;
				},
				nextPoint = function(point, collection, index){
					return helpers.findNextWhere(collection, hasValue, index) || point;
				},
				previousPoint = function(point, collection, index){
					return helpers.findPreviousWhere(collection, hasValue, index) || point;
				};

				this.scale.draw(easingDecimal);


				helpers.each(this.datasets,function(dataset){
					var pointsWithValues = helpers.where(dataset.points, hasValue);

					//Transition each point first so that the line and point drawing isn't out of sync
					//We can use this extra loop to calculate the control points of this dataset also in this loop

					helpers.each(dataset.points, function(point, index){
						if (point.hasValue()){
							point.transition({
								y : this.scale.calculateY(point.value),
								x : this.scale.calculateX(index)
							}, easingDecimal);
						}
					},this);


					// Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
					// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
					if (this.options.bezierCurve){
						helpers.each(pointsWithValues, function(point, index){
							var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
							point.controlPoints = helpers.splineCurve(
								previousPoint(point, pointsWithValues, index),
								point,
								nextPoint(point, pointsWithValues, index),
								tension
							);

							// Prevent the bezier going outside of the bounds of the graph

							// Cap puter bezier handles to the upper/lower scale bounds
							if (point.controlPoints.outer.y > this.scale.endPoint){
								point.controlPoints.outer.y = this.scale.endPoint;
							}
							else if (point.controlPoints.outer.y < this.scale.startPoint){
								point.controlPoints.outer.y = this.scale.startPoint;
							}

							// Cap inner bezier handles to the upper/lower scale bounds
							if (point.controlPoints.inner.y > this.scale.endPoint){
								point.controlPoints.inner.y = this.scale.endPoint;
							}
							else if (point.controlPoints.inner.y < this.scale.startPoint){
								point.controlPoints.inner.y = this.scale.startPoint;
							}
						},this);
					}


					//Draw the line between all the points
					ctx.lineWidth = this.options.datasetStrokeWidth;
					ctx.strokeStyle = dataset.strokeColor;
					ctx.beginPath();

					helpers.each(pointsWithValues, function(point, index){
						if (index === 0){
							ctx.moveTo(point.x, point.y);
						}
						else{
							if(this.options.bezierCurve){
								var previous = previousPoint(point, pointsWithValues, index);

								ctx.bezierCurveTo(
									previous.controlPoints.outer.x,
									previous.controlPoints.outer.y,
									point.controlPoints.inner.x,
									point.controlPoints.inner.y,
									point.x,
									point.y
								);
							}
							else{
								ctx.lineTo(point.x,point.y);
							}
						}
					}, this);

					ctx.stroke();

					if (this.options.datasetFill && pointsWithValues.length > 0){
						//Round off the line by going to the base of the chart, back to the start, then fill.
						ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
						ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
						ctx.fillStyle = dataset.fillColor;
						ctx.closePath();
						ctx.fill();
					}

					//Now draw the points over the line
					//A little inefficient double looping, but better than the line
					//lagging behind the point positions
					helpers.each(pointsWithValues,function(point){
						point.draw();
					});
				},this);
			}
		});


	}).call(this);

	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			//Cache a local reference to Chart.helpers
			helpers = Chart.helpers;

		var defaultConfig = {
			//Boolean - Show a backdrop to the scale label
			scaleShowLabelBackdrop : true,

			//String - The colour of the label backdrop
			scaleBackdropColor : "rgba(255,255,255,0.75)",

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//Number - The backdrop padding above & below the label in pixels
			scaleBackdropPaddingY : 2,

			//Number - The backdrop padding to the side of the label in pixels
			scaleBackdropPaddingX : 2,

			//Boolean - Show line for each value in the scale
			scaleShowLine : true,

			//Boolean - Stroke a line around each segment in the chart
			segmentShowStroke : true,

			//String - The colour of the stroke on each segement.
			segmentStrokeColor : "#fff",

			//Number - The width of the stroke value in pixels
			segmentStrokeWidth : 2,

			//Number - Amount of animation steps
			animationSteps : 100,

			//String - Animation easing effect.
			animationEasing : "easeOutBounce",

			//Boolean - Whether to animate the rotation of the chart
			animateRotate : true,

			//Boolean - Whether to animate scaling the chart from the centre
			animateScale : false,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
		};


		Chart.Type.extend({
			//Passing in a name registers this chart in the Chart namespace
			name: "PolarArea",
			//Providing a defaults will also register the deafults in the chart namespace
			defaults : defaultConfig,
			//Initialize is fired when the chart is initialized - Data is passed in as a parameter
			//Config is automatically merged by the core of Chart.js, and is available at this.options
			initialize:  function(data){
				this.segments = [];
				//Declare segment class as a chart instance specific class, so it can share props for this instance
				this.SegmentArc = Chart.Arc.extend({
					showStroke : this.options.segmentShowStroke,
					strokeWidth : this.options.segmentStrokeWidth,
					strokeColor : this.options.segmentStrokeColor,
					ctx : this.chart.ctx,
					innerRadius : 0,
					x : this.chart.width/2,
					y : this.chart.height/2
				});
				this.scale = new Chart.RadialScale({
					display: this.options.showScale,
					fontStyle: this.options.scaleFontStyle,
					fontSize: this.options.scaleFontSize,
					fontFamily: this.options.scaleFontFamily,
					fontColor: this.options.scaleFontColor,
					showLabels: this.options.scaleShowLabels,
					showLabelBackdrop: this.options.scaleShowLabelBackdrop,
					backdropColor: this.options.scaleBackdropColor,
					backdropPaddingY : this.options.scaleBackdropPaddingY,
					backdropPaddingX: this.options.scaleBackdropPaddingX,
					lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
					lineColor: this.options.scaleLineColor,
					lineArc: true,
					width: this.chart.width,
					height: this.chart.height,
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2,
					ctx : this.chart.ctx,
					templateString: this.options.scaleLabel,
					valuesCount: data.length
				});

				this.updateScaleRange(data);

				this.scale.update();

				helpers.each(data,function(segment,index){
					this.addData(segment,index,true);
				},this);

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
						helpers.each(this.segments,function(segment){
							segment.restore(["fillColor"]);
						});
						helpers.each(activeSegments,function(activeSegment){
							activeSegment.fillColor = activeSegment.highlightColor;
						});
						this.showTooltip(activeSegments);
					});
				}

				this.render();
			},
			getSegmentsAtEvent : function(e){
				var segmentsArray = [];

				var location = helpers.getRelativePosition(e);

				helpers.each(this.segments,function(segment){
					if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
				},this);
				return segmentsArray;
			},
			addData : function(segment, atIndex, silent){
				var index = atIndex || this.segments.length;

				this.segments.splice(index, 0, new this.SegmentArc({
					fillColor: segment.color,
					highlightColor: segment.highlight || segment.color,
					label: segment.label,
					value: segment.value,
					outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
					circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
					startAngle: Math.PI * 1.5
				}));
				if (!silent){
					this.reflow();
					this.update();
				}
			},
			removeData: function(atIndex){
				var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
				this.segments.splice(indexToDelete, 1);
				this.reflow();
				this.update();
			},
			calculateTotal: function(data){
				this.total = 0;
				helpers.each(data,function(segment){
					this.total += segment.value;
				},this);
				this.scale.valuesCount = this.segments.length;
			},
			updateScaleRange: function(datapoints){
				var valuesArray = [];
				helpers.each(datapoints,function(segment){
					valuesArray.push(segment.value);
				});

				var scaleSizes = (this.options.scaleOverride) ?
					{
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					} :
					helpers.calculateScaleRange(
						valuesArray,
						helpers.min([this.chart.width, this.chart.height])/2,
						this.options.scaleFontSize,
						this.options.scaleBeginAtZero,
						this.options.scaleIntegersOnly
					);

				helpers.extend(
					this.scale,
					scaleSizes,
					{
						size: helpers.min([this.chart.width, this.chart.height]),
						xCenter: this.chart.width/2,
						yCenter: this.chart.height/2
					}
				);

			},
			update : function(){
				this.calculateTotal(this.segments);

				helpers.each(this.segments,function(segment){
					segment.save();
				});
				
				this.reflow();
				this.render();
			},
			reflow : function(){
				helpers.extend(this.SegmentArc.prototype,{
					x : this.chart.width/2,
					y : this.chart.height/2
				});
				this.updateScaleRange(this.segments);
				this.scale.update();

				helpers.extend(this.scale,{
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				});

				helpers.each(this.segments, function(segment){
					segment.update({
						outerRadius : this.scale.calculateCenterOffset(segment.value)
					});
				}, this);

			},
			draw : function(ease){
				var easingDecimal = ease || 1;
				//Clear & draw the canvas
				this.clear();
				helpers.each(this.segments,function(segment, index){
					segment.transition({
						circumference : this.scale.getCircumference(),
						outerRadius : this.scale.calculateCenterOffset(segment.value)
					},easingDecimal);

					segment.endAngle = segment.startAngle + segment.circumference;

					// If we've removed the first segment we need to set the first one to
					// start at the top.
					if (index === 0){
						segment.startAngle = Math.PI * 1.5;
					}

					//Check to see if it's the last segment, if not get the next and update the start angle
					if (index < this.segments.length - 1){
						this.segments[index+1].startAngle = segment.endAngle;
					}
					segment.draw();
				}, this);
				this.scale.draw();
			}
		});

	}).call(this);
	(function(){
		"use strict";

		var root = this,
			Chart = root.Chart,
			helpers = Chart.helpers;



		Chart.Type.extend({
			name: "Radar",
			defaults:{
				//Boolean - Whether to show lines for each scale point
				scaleShowLine : true,

				//Boolean - Whether we show the angle lines out of the radar
				angleShowLineOut : true,

				//Boolean - Whether to show labels on the scale
				scaleShowLabels : false,

				// Boolean - Whether the scale should begin at zero
				scaleBeginAtZero : true,

				//String - Colour of the angle line
				angleLineColor : "rgba(0,0,0,.1)",

				//Number - Pixel width of the angle line
				angleLineWidth : 1,

				//String - Point label font declaration
				pointLabelFontFamily : "'Arial'",

				//String - Point label font weight
				pointLabelFontStyle : "normal",

				//Number - Point label font size in pixels
				pointLabelFontSize : 10,

				//String - Point label font colour
				pointLabelFontColor : "#666",

				//Boolean - Whether to show a dot for each point
				pointDot : true,

				//Number - Radius of each point dot in pixels
				pointDotRadius : 3,

				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth : 1,

				//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
				pointHitDetectionRadius : 20,

				//Boolean - Whether to show a stroke for datasets
				datasetStroke : true,

				//Number - Pixel width of dataset stroke
				datasetStrokeWidth : 2,

				//Boolean - Whether to fill the dataset with a colour
				datasetFill : true,

				//String - A legend template
				legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

			},

			initialize: function(data){
				this.PointClass = Chart.Point.extend({
					strokeWidth : this.options.pointDotStrokeWidth,
					radius : this.options.pointDotRadius,
					display: this.options.pointDot,
					hitDetectionRadius : this.options.pointHitDetectionRadius,
					ctx : this.chart.ctx
				});

				this.datasets = [];

				this.buildScale(data);

				//Set up tooltip events on the chart
				if (this.options.showTooltips){
					helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
						var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

						this.eachPoints(function(point){
							point.restore(['fillColor', 'strokeColor']);
						});
						helpers.each(activePointsCollection, function(activePoint){
							activePoint.fillColor = activePoint.highlightFill;
							activePoint.strokeColor = activePoint.highlightStroke;
						});

						this.showTooltip(activePointsCollection);
					});
				}

				//Iterate through each of the datasets, and build this into a property of the chart
				helpers.each(data.datasets,function(dataset){

					var datasetObject = {
						label: dataset.label || null,
						fillColor : dataset.fillColor,
						strokeColor : dataset.strokeColor,
						pointColor : dataset.pointColor,
						pointStrokeColor : dataset.pointStrokeColor,
						points : []
					};

					this.datasets.push(datasetObject);

					helpers.each(dataset.data,function(dataPoint,index){
						//Add a new point for each piece of data, passing any required data to draw.
						var pointPosition;
						if (!this.scale.animation){
							pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
						}
						datasetObject.points.push(new this.PointClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
							y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
							strokeColor : dataset.pointStrokeColor,
							fillColor : dataset.pointColor,
							highlightFill : dataset.pointHighlightFill || dataset.pointColor,
							highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
						}));
					},this);

				},this);

				this.render();
			},
			eachPoints : function(callback){
				helpers.each(this.datasets,function(dataset){
					helpers.each(dataset.points,callback,this);
				},this);
			},

			getPointsAtEvent : function(evt){
				var mousePosition = helpers.getRelativePosition(evt),
					fromCenter = helpers.getAngleFromPoint({
						x: this.scale.xCenter,
						y: this.scale.yCenter
					}, mousePosition);

				var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
					pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
					activePointsCollection = [];

				// If we're at the top, make the pointIndex 0 to get the first of the array.
				if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
					pointIndex = 0;
				}

				if (fromCenter.distance <= this.scale.drawingArea){
					helpers.each(this.datasets, function(dataset){
						activePointsCollection.push(dataset.points[pointIndex]);
					});
				}

				return activePointsCollection;
			},

			buildScale : function(data){
				this.scale = new Chart.RadialScale({
					display: this.options.showScale,
					fontStyle: this.options.scaleFontStyle,
					fontSize: this.options.scaleFontSize,
					fontFamily: this.options.scaleFontFamily,
					fontColor: this.options.scaleFontColor,
					showLabels: this.options.scaleShowLabels,
					showLabelBackdrop: this.options.scaleShowLabelBackdrop,
					backdropColor: this.options.scaleBackdropColor,
					backdropPaddingY : this.options.scaleBackdropPaddingY,
					backdropPaddingX: this.options.scaleBackdropPaddingX,
					lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
					lineColor: this.options.scaleLineColor,
					angleLineColor : this.options.angleLineColor,
					angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
					// Point labels at the edge of each line
					pointLabelFontColor : this.options.pointLabelFontColor,
					pointLabelFontSize : this.options.pointLabelFontSize,
					pointLabelFontFamily : this.options.pointLabelFontFamily,
					pointLabelFontStyle : this.options.pointLabelFontStyle,
					height : this.chart.height,
					width: this.chart.width,
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2,
					ctx : this.chart.ctx,
					templateString: this.options.scaleLabel,
					labels: data.labels,
					valuesCount: data.datasets[0].data.length
				});

				this.scale.setScaleSize();
				this.updateScaleRange(data.datasets);
				this.scale.buildYLabels();
			},
			updateScaleRange: function(datasets){
				var valuesArray = (function(){
					var totalDataArray = [];
					helpers.each(datasets,function(dataset){
						if (dataset.data){
							totalDataArray = totalDataArray.concat(dataset.data);
						}
						else {
							helpers.each(dataset.points, function(point){
								totalDataArray.push(point.value);
							});
						}
					});
					return totalDataArray;
				})();


				var scaleSizes = (this.options.scaleOverride) ?
					{
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
					} :
					helpers.calculateScaleRange(
						valuesArray,
						helpers.min([this.chart.width, this.chart.height])/2,
						this.options.scaleFontSize,
						this.options.scaleBeginAtZero,
						this.options.scaleIntegersOnly
					);

				helpers.extend(
					this.scale,
					scaleSizes
				);

			},
			addData : function(valuesArray,label){
				//Map the values array for each of the datasets
				this.scale.valuesCount++;
				helpers.each(valuesArray,function(value,datasetIndex){
					var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
					this.datasets[datasetIndex].points.push(new this.PointClass({
						value : value,
						label : label,
						x: pointPosition.x,
						y: pointPosition.y,
						strokeColor : this.datasets[datasetIndex].pointStrokeColor,
						fillColor : this.datasets[datasetIndex].pointColor
					}));
				},this);

				this.scale.labels.push(label);

				this.reflow();

				this.update();
			},
			removeData : function(){
				this.scale.valuesCount--;
				this.scale.labels.shift();
				helpers.each(this.datasets,function(dataset){
					dataset.points.shift();
				},this);
				this.reflow();
				this.update();
			},
			update : function(){
				this.eachPoints(function(point){
					point.save();
				});
				this.reflow();
				this.render();
			},
			reflow: function(){
				helpers.extend(this.scale, {
					width : this.chart.width,
					height: this.chart.height,
					size : helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				});
				this.updateScaleRange(this.datasets);
				this.scale.setScaleSize();
				this.scale.buildYLabels();
			},
			draw : function(ease){
				var easeDecimal = ease || 1,
					ctx = this.chart.ctx;
				this.clear();
				this.scale.draw();

				helpers.each(this.datasets,function(dataset){

					//Transition each point first so that the line and point drawing isn't out of sync
					helpers.each(dataset.points,function(point,index){
						if (point.hasValue()){
							point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
						}
					},this);



					//Draw the line between all the points
					ctx.lineWidth = this.options.datasetStrokeWidth;
					ctx.strokeStyle = dataset.strokeColor;
					ctx.beginPath();
					helpers.each(dataset.points,function(point,index){
						if (index === 0){
							ctx.moveTo(point.x,point.y);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}
					},this);
					ctx.closePath();
					ctx.stroke();

					ctx.fillStyle = dataset.fillColor;
					ctx.fill();

					//Now draw the points over the line
					//A little inefficient double looping, but better than the line
					//lagging behind the point positions
					helpers.each(dataset.points,function(point){
						if (point.hasValue()){
							point.draw();
						}
					});

				},this);

			}

		});





	}).call(this);

/***/ },
/* 47 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(45);

	module.exports = vars.createClass('Doughnut', ['getSegmentsAtEvent']);


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(45);

	module.exports = vars.createClass('Line', ['getPointsAtEvent']);


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(45);

	module.exports = vars.createClass('Pie', ['getSegmentsAtEvent']);


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(45);

	module.exports = vars.createClass('PolarArea', ['getSegmentsAtEvent']);


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var vars = __webpack_require__(45);

	module.exports = vars.createClass('Radar', ['getPointsAtEvent']);


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(39);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(41);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = React.createClass({
	  displayName: 'Body',

	  interval: null,
	  getTimeState: function getTimeState() {
	    return {
	      time: moment().format('hh:mm:ss'),
	      date: moment().format('dddd, MMMM YYYY')
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      time: null,
	      date: null
	    };
	  },
	  back: function back(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    window.history.back();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearInterval(this.interval);
	    $('html').removeClass('authentication');
	  },
	  componentDidMount: function componentDidMount() {
	    $('html').addClass('authentication');
	    this.interval = setInterval((function () {
	      this.setState(this.getTimeState());
	    }).bind(this), 500);
	  },
	  render: function render() {
	    return React.createElement(
	      Container,
	      { id: 'auth-container', className: 'lockpage' },
	      React.createElement(
	        Container,
	        { id: 'auth-row' },
	        React.createElement(
	          Container,
	          { id: 'auth-cell' },
	          React.createElement(
	            Grid,
	            null,
	            React.createElement(
	              Row,
	              null,
	              React.createElement(
	                Col,
	                { sm: 12, className: 'text-center' },
	                React.createElement(
	                  'h1',
	                  { className: 'fg-white', style: { fontSize: 81, fontWeight: 300 } },
	                  this.state.time
	                ),
	                React.createElement(
	                  'h6',
	                  { className: 'fg-white' },
	                  this.state.date
	                )
	              )
	            ),
	            React.createElement(
	              Row,
	              { style: { marginTop: 50 } },
	              React.createElement(
	                Col,
	                { sm: 12, className: 'text-center' },
	                React.createElement(
	                  Form,
	                  { onSubmit: this.back },
	                  React.createElement(
	                    Label,
	                    { htmlFor: 'annasanchez' },
	                    'Venkat Chitturi'
	                  ),
	                  React.createElement('img', { src: '/imgs/avatars/avatar.jpg', width: '128', height: '128', alt: 'avatar' }),
	                  React.createElement(Input, { type: 'password', placeholder: 'Password', autoFocus: true }),
	                  React.createElement(
	                    Button,
	                    { type: 'submit', className: 'hidden' },
	                    'Unlock'
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(39);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(41);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = React.createClass({
	  displayName: 'Body',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  back: function back(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.transitionTo('/app/invoice');
	  },
	  componentDidMount: function componentDidMount() {
	    $('html').addClass('authentication');
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    $('html').removeClass('authentication');
	  },
	  render: function render() {
	    return React.createElement(
	      Container,
	      { id: 'auth-container', className: 'login' },
	      React.createElement(
	        Container,
	        { id: 'auth-row' },
	        React.createElement(
	          Container,
	          { id: 'auth-cell' },
	          React.createElement(
	            Grid,
	            null,
	            React.createElement(
	              Row,
	              null,
	              React.createElement(
	                Col,
	                { sm: 12 },
	                React.createElement(
	                  PanelContainer,
	                  { noControls: true },
	                  React.createElement(
	                    Panel,
	                    null,
	                    React.createElement(
	                      PanelBody,
	                      { style: { padding: 0 } },
	                      React.createElement(
	                        'div',
	                        { className: 'text-center bg-darkblue fg-white' },
	                        React.createElement(
	                          'h3',
	                          { style: { margin: 0, padding: 25 } },
	                          'Sign in to Rubix'
	                        )
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'bg-hoverblue fg-black50 text-center', style: { padding: 12.5 } },
	                        React.createElement(
	                          'div',
	                          null,
	                          'You need to sign in for those awesome features'
	                        ),
	                        React.createElement(
	                          'div',
	                          { style: { marginTop: 12.5, marginBottom: 12.5 } },
	                          React.createElement(
	                            Button,
	                            { id: 'facebook-btn', lg: true, bsStyle: 'darkblue', type: 'submit', onClick: this.back },
	                            React.createElement(Icon, { glyph: 'icon-fontello-facebook' }),
	                            React.createElement(
	                              'span',
	                              null,
	                              'Sign in ',
	                              React.createElement(
	                                'span',
	                                { className: 'hidden-xs' },
	                                'with facebook'
	                              )
	                            )
	                          )
	                        ),
	                        React.createElement(
	                          'div',
	                          null,
	                          React.createElement(
	                            'a',
	                            { id: 'twitter-link', href: '#', onClick: this.back },
	                            React.createElement(Icon, { glyph: 'icon-fontello-twitter' }),
	                            React.createElement(
	                              'span',
	                              null,
	                              ' or with twitter'
	                            )
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                          'div',
	                          { className: 'text-center', style: { padding: 12.5 } },
	                          'or use your Rubix account'
	                        ),
	                        React.createElement(
	                          'div',
	                          { style: { padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25 } },
	                          React.createElement(
	                            Form,
	                            { onSubmit: this.back },
	                            React.createElement(
	                              FormGroup,
	                              null,
	                              React.createElement(
	                                InputGroup,
	                                { lg: true },
	                                React.createElement(
	                                  InputGroupAddon,
	                                  null,
	                                  React.createElement(Icon, { glyph: 'icon-fontello-mail' })
	                                ),
	                                React.createElement(Input, { autoFocus: true, type: 'email', id: 'emailaddress', className: 'border-focus-blue', placeholder: 'support@sketchpixy.com' })
	                              )
	                            ),
	                            React.createElement(
	                              FormGroup,
	                              null,
	                              React.createElement(
	                                InputGroup,
	                                { lg: true },
	                                React.createElement(
	                                  InputGroupAddon,
	                                  null,
	                                  React.createElement(Icon, { glyph: 'icon-fontello-key' })
	                                ),
	                                React.createElement(Input, { type: 'password', id: 'password', className: 'border-focus-blue', placeholder: 'password' })
	                              )
	                            ),
	                            React.createElement(
	                              FormGroup,
	                              null,
	                              React.createElement(
	                                Grid,
	                                null,
	                                React.createElement(
	                                  Row,
	                                  null,
	                                  React.createElement(
	                                    Col,
	                                    { xs: 6, collapseLeft: true, collapseRight: true, style: { paddingTop: 10 } },
	                                    React.createElement(
	                                      _reactRouter.Link,
	                                      { to: '/app/signup' },
	                                      'Create a Rubix account'
	                                    )
	                                  ),
	                                  React.createElement(
	                                    Col,
	                                    { xs: 6, collapseLeft: true, collapseRight: true, className: 'text-right' },
	                                    React.createElement(
	                                      Button,
	                                      { outlined: true, lg: true, type: 'submit', bsStyle: 'blue', onClick: this.back },
	                                      'Login'
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(3);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(39);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(41);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _globalJsxLoremipsum = __webpack_require__(40);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var InboxNavItem = (function (_React$Component) {
	  _inherits(InboxNavItem, _React$Component);

	  function InboxNavItem() {
	    _classCallCheck(this, InboxNavItem);

	    _get(Object.getPrototypeOf(InboxNavItem.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(InboxNavItem, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 8, collapseLeft: true, collapseRight: true },
	            React.createElement(Icon, { glyph: this.props.glyph, className: 'inbox-item-icon' }),
	            React.createElement(
	              'span',
	              null,
	              this.props.title
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-right', collapseLeft: true, collapseRight: true },
	            React.createElement(
	              'div',
	              { style: { marginTop: 5 } },
	              React.createElement(
	                BLabel,
	                { className: this.props.labelClass },
	                this.props.labelValue
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return InboxNavItem;
	})(React.Component);

	var InboxNavTag = (function (_React$Component2) {
	  _inherits(InboxNavTag, _React$Component2);

	  function InboxNavTag() {
	    _classCallCheck(this, InboxNavTag);

	    _get(Object.getPrototypeOf(InboxNavTag.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(InboxNavTag, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12, collapseLeft: true, collapseRight: true },
	            React.createElement(
	              Badge,
	              { className: this.props.badgeClass },
	              ' '
	            ),
	            React.createElement(
	              'span',
	              null,
	              this.props.title
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return InboxNavTag;
	})(React.Component);

	var InboxItem = React.createClass({
	  displayName: 'InboxItem',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  statics: {
	    ID: 0,
	    resetID: function resetID() {
	      InboxItem.ID = 0;
	    },
	    getID: function getID() {
	      return ++InboxItem.ID;
	    }
	  },
	  handleClick: function handleClick(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.transitionTo('/app/mailbox/mail');
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])({
	      'inbox-item': true,
	      'unread': this.props.unread
	    });

	    var props = _extends({
	      href: '/app/mailbox/mail',
	      onClick: this.handleClick
	    }, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'a',
	      props,
	      React.createElement(
	        'div',
	        { className: 'inbox-avatar' },
	        React.createElement('img', { src: this.props.src, width: '40', height: '40', className: this.props.imgClass + ' hidden-xs' }),
	        React.createElement(
	          'div',
	          { className: 'inbox-avatar-name' },
	          React.createElement(
	            'div',
	            { className: 'fg-darkgrayishblue75' },
	            this.props.name
	          ),
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'small',
	              null,
	              React.createElement(
	                Badge,
	                { className: this.props.labelClass, style: { marginRight: 5, display: this.props.labelValue ? 'inline' : 'none' } },
	                this.props.labelValue
	              ),
	              React.createElement(
	                'span',
	                null,
	                this.props.description
	              )
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'inbox-date hidden-sm hidden-xs fg-darkgray40 text-right' },
	          React.createElement(
	            'div',
	            { style: { position: 'relative', top: 5 } },
	            this.props.date
	          ),
	          React.createElement(
	            'div',
	            { style: { position: 'relative', top: -5 } },
	            React.createElement(
	              'small',
	              null,
	              '#',
	              InboxItem.getID()
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({
	  displayName: 'Body',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  handleClick: function handleClick() {
	    this.transitionTo('/app/mailbox/compose');
	  },
	  render: function render() {
	    InboxItem.resetID();
	    return React.createElement(
	      Container,
	      { id: 'body' },
	      React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              PanelContainer,
	              { className: 'inbox', collapseBottom: true },
	              React.createElement(
	                Panel,
	                null,
	                React.createElement(
	                  PanelBody,
	                  { style: { paddingTop: 0 } },
	                  React.createElement(
	                    Grid,
	                    null,
	                    React.createElement(
	                      Row,
	                      null,
	                      React.createElement(
	                        Col,
	                        { xs: 8, style: { paddingTop: 12.5 } },
	                        React.createElement(
	                          ButtonToolbar,
	                          { className: 'inbox-toolbar' },
	                          React.createElement(
	                            ButtonGroup,
	                            null,
	                            React.createElement(
	                              Button,
	                              { bsStyle: 'blue', onClick: this.handleClick },
	                              React.createElement(Icon, { glyph: 'icon-fontello-edit-1' })
	                            )
	                          ),
	                          React.createElement(
	                            ButtonGroup,
	                            null,
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'darkgreen45' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-reply' })
	                            ),
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'darkgreen45', className: 'hidden-xs' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-reply-all-1' })
	                            ),
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'darkgreen45' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-forward' })
	                            )
	                          ),
	                          React.createElement(
	                            ButtonGroup,
	                            { className: 'hidden-xs' },
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'danger', className: 'text-center' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-attention-alt' })
	                            ),
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'danger' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-trash-1' })
	                            )
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        Col,
	                        { xs: 4, className: 'text-right' },
	                        React.createElement(
	                          'div',
	                          { className: 'inbox-avatar' },
	                          React.createElement('img', { src: '/imgs/avatars/avatar0.png', width: '40', height: '40' }),
	                          React.createElement(
	                            'div',
	                            { className: 'inbox-avatar-name hidden-xs hidden-sm' },
	                            React.createElement(
	                              'div',
	                              null,
	                              'Venkat Chitturi'
	                            ),
	                            React.createElement(
	                              'div',
	                              null,
	                              React.createElement(
	                                'small',
	                                null,
	                                'Mailbox'
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement('hr', { style: { margin: 0 } }),
	                  React.createElement(
	                    Panel,
	                    { horizontal: true },
	                    React.createElement(
	                      PanelLeft,
	                      { className: 'panel-sm-3 inbox-nav hidden-xs' },
	                      React.createElement(
	                        Grid,
	                        null,
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { xs: 12 },
	                            React.createElement(
	                              'h6',
	                              null,
	                              React.createElement(
	                                'small',
	                                { className: 'fg-darkgray' },
	                                'MAILBOXES'
	                              )
	                            ),
	                            React.createElement(
	                              ListGroup,
	                              { className: 'list-bg-blue' },
	                              React.createElement(
	                                ListGroupItem,
	                                { active: true },
	                                React.createElement(InboxNavItem, { glyph: 'icon-feather-mail', title: 'Inbox', labelClass: 'bg-white fg-blue', labelValue: 58 })
	                              ),
	                              React.createElement(
	                                ListGroupItem,
	                                null,
	                                React.createElement(InboxNavItem, { glyph: 'icon-simple-line-icons-star', title: 'Starred' })
	                              ),
	                              React.createElement(
	                                ListGroupItem,
	                                null,
	                                React.createElement(InboxNavItem, { glyph: 'icon-dripicons-return', title: 'Sent' })
	                              ),
	                              React.createElement(
	                                ListGroupItem,
	                                null,
	                                React.createElement(InboxNavItem, { glyph: 'icon-feather-archive', title: 'Drafts' })
	                              ),
	                              React.createElement(
	                                ListGroupItem,
	                                null,
	                                React.createElement(InboxNavItem, { glyph: 'icon-dripicons-attachment', title: 'Attachments' })
	                              )
	                            ),
	                            React.createElement('hr', null),
	                            React.createElement(
	                              'h6',
	                              null,
	                              React.createElement(
	                                'small',
	                                { className: 'fg-darkgray' },
	                                'OTHERS'
	                              )
	                            ),
	                            React.createElement(
	                              ListGroup,
	                              null,
	                              React.createElement(
	                                ListGroupItem,
	                                null,
	                                React.createElement(InboxNavItem, { glyph: 'icon-fontello-attention-alt', title: 'Spam', labelClass: 'bg-red fg-white', labelValue: 10 })
	                              ),
	                              React.createElement(
	                                ListGroupItem,
	                                null,
	                                React.createElement(InboxNavItem, { glyph: 'icon-fontello-trash-1', title: 'Trash' })
	                              )
	                            ),
	                            React.createElement('hr', null),
	                            React.createElement(
	                              'h6',
	                              null,
	                              React.createElement(
	                                'small',
	                                { className: 'fg-darkgray' },
	                                'TAGS'
	                              )
	                            ),
	                            React.createElement(
	                              ListGroup,
	                              null,
	                              React.createElement(
	                                ListGroupItem,
	                                null,
	                                React.createElement(InboxNavTag, { title: '#sometag', badgeClass: 'bg-green fg-white' })
	                              ),
	                              React.createElement(
	                                ListGroupItem,
	                                null,
	                                React.createElement(InboxNavTag, { title: '#anothertag', badgeClass: 'bg-red fg-white' })
	                              )
	                            )
	                          )
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      PanelBody,
	                      { className: 'panel-sm-9 panel-xs-12' },
	                      React.createElement(
	                        Grid,
	                        null,
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { xs: 12 },
	                            React.createElement(InboxItem, { unread: true, src: '/imgs/avatars/avatar5.png', imgClass: 'border-green', name: 'Jordyn Ouellet (8)', labelValue: 'SOME LABEL', labelClass: 'bg-green fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                  'strong',
	                                  null,
	                                  'Early access: '
	                                ),
	                                React.createElement(
	                                  'span',
	                                  null,
	                                  React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                                )
	                              ), date: 'Aug 20th' }),
	                            React.createElement(InboxItem, { unread: true, src: '/imgs/avatars/avatar7.png', imgClass: 'border-orange', name: 'Toby King (4)', labelValue: 'SOME LABEL', labelClass: 'bg-orange fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                              ), date: 'Aug 19th' }),
	                            React.createElement(InboxItem, { unread: true, src: '/imgs/avatars/avatar9.png', imgClass: 'border-blue', name: 'Ava Parry', labelValue: 'SOME LABEL', labelClass: 'bg-blue fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                              ), date: 'Aug 18th' }),
	                            React.createElement(InboxItem, { unread: true, src: '/imgs/avatars/avatar10.png', imgClass: 'border-red', name: 'Angelina Mills', labelValue: 'SOME LABEL', labelClass: 'bg-red fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                              ), date: 'Aug 17rd' }),
	                            React.createElement(InboxItem, { src: '/imgs/avatars/avatar11.png', imgClass: 'border-purple', name: 'Crystal Ford', labelValue: 'SOME LABEL', labelClass: 'bg-purple fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                              ), date: 'Aug 16th' }),
	                            React.createElement(InboxItem, { src: '/imgs/avatars/avatar13.png', imgClass: 'border-brown', name: 'Ju Lan', labelValue: 'SOME LABEL', labelClass: 'bg-brown fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                              ), date: 'Aug 15th' }),
	                            React.createElement(InboxItem, { src: '/imgs/avatars/avatar14.png', imgClass: 'border-pink', name: 'Lana Collin', labelValue: 'SOME LABEL', labelClass: 'bg-pink fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                              ), date: 'Aug 14th' }),
	                            React.createElement(InboxItem, { src: '/imgs/avatars/avatar15.png', imgClass: 'border-darkcyan', name: 'Ricardo Ibarra', labelValue: 'SOME LABEL', labelClass: 'bg-darkcyan fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                              ), date: 'Aug 13th' }),
	                            React.createElement(InboxItem, { src: '/imgs/avatars/avatar16.png', imgClass: 'border-orange75', name: 'The Unknown', labelValue: 'SOME LABEL', labelClass: 'bg-orange75 fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                              ), date: 'Aug 12th' }),
	                            React.createElement(InboxItem, { src: '/imgs/avatars/avatar8.png', imgClass: 'border-yellow', name: 'Antelope Inc.', labelValue: 'SOME LABEL', labelClass: 'bg-yellow fg-white', description: React.createElement(
	                                'span',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                              ), date: 'Aug 11th' })
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var _default = (function (_React$Component3) {
	  _inherits(_default, _React$Component3);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(3);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(39);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(41);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _globalJsxLoremipsum = __webpack_require__(40);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var Body = React.createClass({
	  displayName: 'Body',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  handleClick: function handleClick() {
	    this.transitionTo('/app/mailbox/compose');
	  },
	  handleBackClick: function handleBackClick() {
	    this.transitionTo('/app/mailbox/inbox');
	  },
	  handleTextareaClick: function handleTextareaClick(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.handleClick();
	  },
	  render: function render() {
	    return React.createElement(
	      Container,
	      { id: 'body' },
	      React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              PanelContainer,
	              { className: 'inbox' },
	              React.createElement(
	                Panel,
	                null,
	                React.createElement(
	                  PanelBody,
	                  { style: { paddingTop: 0 } },
	                  React.createElement(
	                    Grid,
	                    null,
	                    React.createElement(
	                      Row,
	                      { className: 'hidden-print' },
	                      React.createElement(
	                        Col,
	                        { xs: 8, style: { paddingTop: 12.5 } },
	                        React.createElement(
	                          ButtonToolbar,
	                          { className: 'inbox-toolbar' },
	                          React.createElement(
	                            ButtonGroup,
	                            null,
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'darkgreen45', onClick: this.handleBackClick },
	                              React.createElement(Icon, { glyph: 'icon-dripicons-return' })
	                            )
	                          ),
	                          React.createElement(
	                            ButtonGroup,
	                            null,
	                            React.createElement(
	                              Button,
	                              { bsStyle: 'blue', onClick: this.handleClick },
	                              React.createElement(Icon, { glyph: 'icon-fontello-edit-1' })
	                            )
	                          ),
	                          React.createElement(
	                            ButtonGroup,
	                            { className: 'hidden-xs' },
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'darkgreen45' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-reply' })
	                            ),
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'darkgreen45' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-reply-all-1' })
	                            ),
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'darkgreen45' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-forward' })
	                            )
	                          ),
	                          React.createElement(
	                            ButtonGroup,
	                            { className: 'hidden-xs' },
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'danger', className: 'text-center' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-attention-alt' })
	                            ),
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'danger' },
	                              React.createElement(Icon, { glyph: 'icon-fontello-trash-1' })
	                            )
	                          ),
	                          React.createElement(
	                            ButtonGroup,
	                            { className: 'hidden-xs hidden-sm' },
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'brown', className: 'text-center', onClick: window.print },
	                              React.createElement(Icon, { glyph: 'icon-outlined-printer' })
	                            )
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        Col,
	                        { xs: 4, className: 'text-right' },
	                        React.createElement(
	                          'div',
	                          { className: 'inbox-avatar' },
	                          React.createElement('img', { src: '/imgs/avatars/avatar0.png', width: '40', height: '40' }),
	                          React.createElement(
	                            'div',
	                            { className: 'inbox-avatar-name hidden-xs hidden-sm' },
	                            React.createElement(
	                              'div',
	                              null,
	                              'Venkat Chitturi'
	                            ),
	                            React.createElement(
	                              'div',
	                              null,
	                              React.createElement(
	                                'small',
	                                null,
	                                'Compose'
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement('hr', { style: { margin: 0 } }),
	                  React.createElement(
	                    Panel,
	                    { horizontal: true },
	                    React.createElement(
	                      PanelBody,
	                      { className: 'panel-sm-9 panel-xs-12' },
	                      React.createElement(
	                        Grid,
	                        null,
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { xs: 12 },
	                            React.createElement(
	                              'div',
	                              { className: 'inbox-avatar' },
	                              React.createElement('img', { src: '/imgs/avatars/avatar5.png', width: '40', height: '40', className: 'border-green hidden-xs' }),
	                              React.createElement(
	                                'div',
	                                { className: 'inbox-avatar-name' },
	                                React.createElement(
	                                  'div',
	                                  { className: 'fg-darkgrayishblue75' },
	                                  React.createElement(
	                                    'strong',
	                                    null,
	                                    'From: '
	                                  ),
	                                  'Jordyn Ouellet - ',
	                                  React.createElement(
	                                    'em',
	                                    null,
	                                    'jordyn_ouellet@example.com'
	                                  )
	                                ),
	                                React.createElement(
	                                  'div',
	                                  { className: 'fg-darkgray40' },
	                                  React.createElement(
	                                    'strong',
	                                    null,
	                                    'Subject: '
	                                  ),
	                                  'Regd financial projections for the next five years'
	                                )
	                              ),
	                              React.createElement(
	                                'div',
	                                { className: 'inbox-date fg-darkgray40 text-right hidden-xs' },
	                                React.createElement(
	                                  'div',
	                                  { style: { position: 'relative', top: 5 } },
	                                  React.createElement(
	                                    Badge,
	                                    { className: 'bg-blue fg-white' },
	                                    'OPPORTUNITIES'
	                                  )
	                                ),
	                                React.createElement(
	                                  'div',
	                                  { style: { position: 'relative' } },
	                                  React.createElement(
	                                    'small',
	                                    null,
	                                    'Aug 21st, 11:30 PM'
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      ),
	                      React.createElement('hr', { style: { marginTop: 0 } }),
	                      React.createElement(
	                        Grid,
	                        null,
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { xs: 12 },
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(
	                                'strong',
	                                null,
	                                'Hi Venkat,'
	                              )
	                            ),
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '4s' })
	                            ),
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' }),
	                              React.createElement(
	                                'span',
	                                null,
	                                'Bibendum est ultricies integer quis :'
	                              ),
	                              React.createElement(
	                                'ul',
	                                null,
	                                React.createElement(
	                                  'li',
	                                  null,
	                                  React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                                ),
	                                React.createElement(
	                                  'li',
	                                  null,
	                                  React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                                ),
	                                React.createElement(
	                                  'li',
	                                  null,
	                                  React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                                ),
	                                React.createElement(
	                                  'li',
	                                  null,
	                                  React.createElement(_globalJsxLoremipsum2['default'], { query: '1s' })
	                                )
	                              )
	                            ),
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(
	                                'blockquote',
	                                null,
	                                React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
	                              )
	                            ),
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
	                            ),
	                            React.createElement(
	                              'div',
	                              null,
	                              React.createElement(
	                                'strong',
	                                null,
	                                'Regards,'
	                              )
	                            ),
	                            React.createElement(
	                              'div',
	                              null,
	                              React.createElement(
	                                'strong',
	                                null,
	                                'Jordyn'
	                              )
	                            )
	                          )
	                        )
	                      ),
	                      React.createElement('hr', null),
	                      React.createElement(
	                        Grid,
	                        { className: 'hidden-print' },
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { xs: 12 },
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(
	                                'strong',
	                                null,
	                                'Attachments'
	                              ),
	                              React.createElement(
	                                'span',
	                                { className: 'fg-darkgray40' },
	                                ' (3 files, 680 KB)'
	                              )
	                            ),
	                            React.createElement(
	                              'p',
	                              { className: 'inbox-attachments' },
	                              React.createElement(Icon, { glyph: 'icon-1-and-quarter-x icon-outlined-image' }),
	                              React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                  'strong',
	                                  null,
	                                  ' force.gif'
	                                ),
	                                ' ',
	                                React.createElement(
	                                  'span',
	                                  { className: 'fg-darkgray40' },
	                                  '(128 KB)'
	                                )
	                              ),
	                              React.createElement(
	                                'a',
	                                { className: 'inbox-attachment-download', href: '#' },
	                                'Download'
	                              )
	                            ),
	                            React.createElement(
	                              'p',
	                              { className: 'inbox-attachments' },
	                              React.createElement(Icon, { glyph: 'icon-1-and-quarter-x icon-outlined-image' }),
	                              React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                  'strong',
	                                  null,
	                                  ' lightsaber.png'
	                                ),
	                                ' ',
	                                React.createElement(
	                                  'span',
	                                  { className: 'fg-darkgray40' },
	                                  '(450 KB)'
	                                )
	                              ),
	                              React.createElement(
	                                'a',
	                                { className: 'inbox-attachment-download', href: '#' },
	                                'Download'
	                              )
	                            ),
	                            React.createElement(
	                              'p',
	                              { className: 'inbox-attachments', style: { marginBottom: 0 } },
	                              React.createElement(Icon, { glyph: 'icon-1-and-quarter-x devicon-html5-plain-wordmark' }),
	                              React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                  'strong',
	                                  null,
	                                  ' hax.html'
	                                ),
	                                ' ',
	                                React.createElement(
	                                  'span',
	                                  { className: 'fg-darkgray40' },
	                                  '(2 KB)'
	                                )
	                              ),
	                              React.createElement(
	                                'a',
	                                { className: 'inbox-attachment-download', href: '#' },
	                                'Download'
	                              )
	                            )
	                          )
	                        )
	                      ),
	                      React.createElement('hr', { className: 'hidden-print' }),
	                      React.createElement(
	                        Grid,
	                        { className: 'hidden-print' },
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { xs: 12 },
	                            React.createElement(Textarea, { className: 'form-control', rows: '5', onClick: this.handleTextareaClick, onFocus: this.handleTextareaClick, placeholder: 'Click here to reply' }),
	                            React.createElement('br', null)
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(3);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(39);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(41);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = React.createClass({
	  displayName: 'Body',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  handleClick: function handleClick() {
	    this.transitionTo('/app/mailbox/inbox');
	  },
	  componentDidMount: function componentDidMount() {
	    $('#trumbowyg-demo').trumbowyg({
	      mobile: false,
	      tablet: false,
	      autogrow: true,
	      dir: $('html').attr('dir')
	    }).trumbowyg('html', '<p>Steve Jobs became the greatest business executive of our era, the one most certain to be remembered a century from now. History will place him in the pantheon right next to Edison and Ford. More than anyone else of his time, he made products that were completely innovative, combining the power of poetry and processors.</p><blockquote><p style="margin-bottom: 12.5px;"><span style="font-size: 11pt; line-height: 1.78571;">Some people say, “Give the customers what they want.” But that’s not my approach. Our job is to figure out what they’re going to want before they do. I think Henry Ford once said, <b>“If I’d asked customers what they wanted, they would have told me, ‘A faster horse!’”</b> People don’t know what they want until you show it to them. That’s why I never rely on market research. Our task is to read things that are not yet on the page.&nbsp;</span><br></p><div><span style="font-size: 11pt; line-height: 1.78571;">- Steve Jobs in <i>Steve Jobs by Walter Isaacson</i></span></div></blockquote><p>Was he smart? No, not exceptionally. Instead, he was a <b><i>genius</i></b>. His imaginative leaps were instinctive, unexpected, and at times <b><i>magical</i></b>. He was, indeed, an example of what the mathematician Mark Kac called a magician genius, someone whose insights come out of the blue and require intuition more than mere mental processing power. Like a pathfinder, he could absorb information, sniff the winds, and sense what lay ahead.</p>');
	  },
	  render: function render() {
	    return React.createElement(
	      Container,
	      { id: 'body' },
	      React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              PanelContainer,
	              { className: 'inbox' },
	              React.createElement(
	                Panel,
	                null,
	                React.createElement(
	                  PanelBody,
	                  { style: { paddingTop: 0 } },
	                  React.createElement(
	                    Grid,
	                    null,
	                    React.createElement(
	                      Row,
	                      null,
	                      React.createElement(
	                        Col,
	                        { xs: 8, style: { paddingTop: 12.5 } },
	                        React.createElement(
	                          ButtonToolbar,
	                          { className: 'inbox-toolbar' },
	                          React.createElement(
	                            ButtonGroup,
	                            null,
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'darkgreen45', onClick: this.handleClick },
	                              React.createElement(Icon, { glyph: 'icon-dripicons-return' })
	                            ),
	                            React.createElement(
	                              Button,
	                              { outlined: true, onlyOnHover: true, bsStyle: 'danger', onClick: this.handleClick },
	                              React.createElement(Icon, { glyph: 'icon-feather-cross' })
	                            )
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        Col,
	                        { xs: 4, className: 'text-right' },
	                        React.createElement(
	                          'div',
	                          { className: 'inbox-avatar' },
	                          React.createElement('img', { src: '/imgs/avatars/avatar0.png', width: '40', height: '40' }),
	                          React.createElement(
	                            'div',
	                            { className: 'inbox-avatar-name hidden-xs hidden-sm' },
	                            React.createElement(
	                              'div',
	                              null,
	                              'Venkat Chitturi'
	                            ),
	                            React.createElement(
	                              'div',
	                              null,
	                              React.createElement(
	                                'small',
	                                null,
	                                'Compose'
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement('hr', { style: { margin: 0, marginBottom: 25 } }),
	                  React.createElement(
	                    Panel,
	                    { horizontal: true },
	                    React.createElement(
	                      PanelBody,
	                      { className: 'panel-sm-9 panel-xs-12' },
	                      React.createElement(
	                        Grid,
	                        null,
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { xs: 12 },
	                            React.createElement(
	                              Form,
	                              { horizontal: true, style: { marginBottom: 25 } },
	                              React.createElement(
	                                FormGroup,
	                                null,
	                                React.createElement(
	                                  Label,
	                                  { control: true, sm: 1, htmlFor: 'email-to' },
	                                  'To'
	                                ),
	                                React.createElement(
	                                  Col,
	                                  { sm: 11 },
	                                  React.createElement(Input, { type: 'email', id: 'email-to', placeholder: 'Ex: sender@example.com', autoFocus: true })
	                                )
	                              ),
	                              React.createElement(
	                                FormGroup,
	                                null,
	                                React.createElement(
	                                  Label,
	                                  { control: true, sm: 1, htmlFor: 'email-cc' },
	                                  'CC'
	                                ),
	                                React.createElement(
	                                  Col,
	                                  { sm: 11 },
	                                  React.createElement(Input, { type: 'email', id: 'email-cc' })
	                                )
	                              ),
	                              React.createElement(
	                                FormGroup,
	                                null,
	                                React.createElement(
	                                  Label,
	                                  { control: true, sm: 1, htmlFor: 'email-bcc' },
	                                  'BCC'
	                                ),
	                                React.createElement(
	                                  Col,
	                                  { sm: 11 },
	                                  React.createElement(Input, { type: 'email', id: 'email-bcc' })
	                                )
	                              ),
	                              React.createElement(
	                                FormGroup,
	                                null,
	                                React.createElement(
	                                  Label,
	                                  { control: true, sm: 1, htmlFor: 'email-subject' },
	                                  'Subject'
	                                ),
	                                React.createElement(
	                                  Col,
	                                  { sm: 11 },
	                                  React.createElement(Input, { type: 'text', id: 'email-subject', placeholder: 'Enter a subject title here' })
	                                )
	                              )
	                            )
	                          )
	                        ),
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { id: 'trumbowyg-demo-container', xs: 12, collapseLeft: true, collapseRight: true },
	                            React.createElement('div', { id: 'trumbowyg-demo' })
	                          )
	                        ),
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { xs: 12, className: 'text-right', style: { marginBottom: 16 } },
	                            React.createElement(
	                              ButtonToolbar,
	                              { style: { display: 'inline-block' } },
	                              React.createElement(
	                                ButtonGroup,
	                                null,
	                                React.createElement(
	                                  Button,
	                                  { outlined: true, onlyOnHover: true, bsStyle: 'danger' },
	                                  'discard'
	                                ),
	                                React.createElement(
	                                  Button,
	                                  { outlined: true, onlyOnHover: true, bsStyle: 'green' },
	                                  'save'
	                                )
	                              ),
	                              React.createElement(
	                                ButtonGroup,
	                                null,
	                                React.createElement(
	                                  Button,
	                                  { outlined: true, bsStyle: 'blue' },
	                                  'send'
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(39);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(41);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body() {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Body, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('#calendar').fullCalendar({
	        header: {
	          left: 'prev,next today',
	          center: 'title',
	          right: 'month,agendaWeek,agendaDay'
	        },
	        defaultDate: '2014-08-12',
	        editable: true,
	        eventLimit: true, // allow "more" link when too many events
	        events: [{
	          title: 'All Day Event',
	          start: '2014-08-01'
	        }, {
	          title: 'Long Event',
	          start: '2014-08-07',
	          end: '2014-08-10'
	        }, {
	          id: 999,
	          title: 'Repeating Event',
	          start: '2014-08-09T16:00:00'
	        }, {
	          id: 999,
	          title: 'Repeating Event',
	          start: '2014-08-16T16:00:00'
	        }, {
	          title: 'Conference',
	          start: '2014-08-11',
	          end: '2014-08-13'
	        }, {
	          title: 'Meeting',
	          start: '2014-08-12T10:30:00',
	          end: '2014-08-12T12:30:00'
	        }, {
	          title: 'Lunch',
	          start: '2014-08-12T12:00:00'
	        }, {
	          title: 'Meeting',
	          start: '2014-08-12T14:30:00'
	        }, {
	          title: 'Happy Hour',
	          start: '2014-08-12T17:30:00'
	        }, {
	          title: 'Dinner',
	          start: '2014-08-12T20:00:00'
	        }, {
	          title: 'Birthday Party',
	          start: '2014-08-13T07:00:00'
	        }, {
	          title: 'Click for Google',
	          url: 'http://google.com/',
	          start: '2014-08-28'
	        }]
	      });

	      /* initialize the external events
	      -----------------------------------------------------------------*/

	      $('#external-events div.external-event').each(function () {

	        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
	        // it doesn't need to have a start or end
	        var eventObject = {
	          title: $.trim($(this).text()) // use the element's text as the event title
	        };

	        // store the Event Object in the DOM element so we can get to it later
	        $(this).data('eventObject', eventObject);

	        // make the event draggable using jQuery UI
	        $(this).draggable({
	          zIndex: 999,
	          revert: true, // will cause the event to go back to its
	          revertDuration: 0 //  original position after the drag
	        });
	      });

	      /* initialize the calendar
	      -----------------------------------------------------------------*/

	      $('#external-calendar').fullCalendar({
	        header: {
	          left: 'prev,next today',
	          center: 'title',
	          right: 'month,agendaWeek,agendaDay'
	        },
	        editable: true,
	        droppable: true, // this allows things to be dropped onto the calendar !!!
	        drop: function drop(date) {
	          // this function is called when something is dropped

	          // retrieve the dropped element's stored Event Object
	          var originalEventObject = $(this).data('eventObject');

	          // we need to copy it, so that multiple events don't have a reference to the same object
	          var copiedEventObject = $.extend({}, originalEventObject);

	          // assign it the date that was reported
	          copiedEventObject.start = date;

	          // render the event on the calendar
	          // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
	          $('#external-calendar').fullCalendar('renderEvent', copiedEventObject, true);

	          // is the "remove after drop" checkbox checked?
	          if ($('#drop-remove').is(':checked')) {
	            // if so, remove the element from the "Draggable Events" list
	            $(this).remove();
	          }
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                PanelContainer,
	                { controlStyles: 'bg-darkgreen45 fg-white' },
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelHeader,
	                    { className: 'bg-darkgreen45 fg-white', style: { marginBottom: 0 } },
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                          Col,
	                          { xs: 12 },
	                          React.createElement(
	                            'h3',
	                            null,
	                            'Calendar: Agenda'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    PanelBody,
	                    { style: { padding: 25 } },
	                    React.createElement('div', { id: 'calendar' })
	                  )
	                )
	              ),
	              React.createElement(
	                PanelContainer,
	                { controlStyles: 'bg-orange75 fg-white' },
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelHeader,
	                    { className: 'bg-orange75 fg-white', style: { marginBottom: 0 } },
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                          Col,
	                          { xs: 12 },
	                          React.createElement(
	                            'h3',
	                            null,
	                            'Calendar: External Events'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    PanelBody,
	                    { style: { padding: 25 } },
	                    React.createElement(
	                      'div',
	                      { id: 'wrap' },
	                      React.createElement(
	                        'div',
	                        { id: 'external-events' },
	                        React.createElement(
	                          'h4',
	                          null,
	                          'Draggable Events'
	                        ),
	                        React.createElement(
	                          'div',
	                          { className: 'external-event' },
	                          'My Event 1'
	                        ),
	                        React.createElement(
	                          'div',
	                          { className: 'external-event' },
	                          'My Event 2'
	                        ),
	                        React.createElement(
	                          'div',
	                          { className: 'external-event' },
	                          'My Event 3'
	                        ),
	                        React.createElement(
	                          'div',
	                          { className: 'external-event' },
	                          'My Event 4'
	                        ),
	                        React.createElement(
	                          'div',
	                          { className: 'external-event' },
	                          'My Event 5'
	                        ),
	                        React.createElement(
	                          Checkbox,
	                          { id: 'drop-remove' },
	                          'remove after drop'
	                        )
	                      ),
	                      React.createElement('div', { id: 'external-calendar' }),
	                      React.createElement('div', { style: { clear: 'both' } })
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(39);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(41);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _commonPopulationforecast = __webpack_require__(61);

	var _reactChartjs = __webpack_require__(43);

	var Body = (function (_React$Component) {
	    _inherits(Body, _React$Component);

	    function Body() {
	        _classCallCheck(this, Body);

	        _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Body, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                Container,
	                { id: 'body' },
	                React.createElement(
	                    Grid,
	                    null,
	                    React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                            Col,
	                            { sm: 12 },
	                            React.createElement(
	                                TabContainer,
	                                null,
	                                React.createElement(
	                                    TabList,
	                                    { bsStyle: 'orange75', onTabSelect: this.handleSelect },
	                                    React.createElement(
	                                        Tab,
	                                        { pane: 'tab1', active: true },
	                                        'Labour Force Population'
	                                    ),
	                                    React.createElement(
	                                        Tab,
	                                        { pane: 'tab2' },
	                                        'Worker Population'
	                                    ),
	                                    React.createElement(
	                                        Tab,
	                                        { pane: 'tab3' },
	                                        'Un-Employment Persons'
	                                    )
	                                ),
	                                React.createElement(
	                                    TabContent,
	                                    null,
	                                    React.createElement(
	                                        TabPane,
	                                        null,
	                                        React.createElement(_commonPopulationforecast.PopulationChart, { bdata: { labels: ["rural", "urban", "rural_urban"], datasets: [{}] }, paramType: "lfp", title: "Labour Force Participation Rate", data: {
	                                                labels: ["January", "February", "March", "April", "May", "June", "July"],
	                                                datasets: [{}] } })
	                                    ),
	                                    React.createElement(
	                                        TabPane,
	                                        null,
	                                        React.createElement(_commonPopulationforecast.PopulationChart, { bdata: {
	                                                labels: ["rural", "urban", "rural_urban"],
	                                                datasets: [{}]
	                                            }, paramType: "wp", title: "Worker Population Ratio", data: {
	                                                labels: ["January", "February", "March", "April", "May", "June", "July"],
	                                                datasets: [{}] } })
	                                    ),
	                                    React.createElement(
	                                        TabPane,
	                                        null,
	                                        React.createElement(_commonPopulationforecast.PopulationChart, { bdata: {
	                                                labels: ["rural", "urban", "rural_urban"],
	                                                datasets: [{}]
	                                            }, paramType: "ump", title: "Unemployment Rate", data: {
	                                                labels: ["January", "February", "March", "April", "May", "June", "July"],
	                                                datasets: [{}] } })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	    _inherits(_default, _React$Component2);

	    function _default() {
	        _classCallCheck(this, _default2);

	        _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(_default, [{
	        key: 'render',
	        value: function render() {

	            var classes = (0, _classnames2['default'])({
	                'container-open': this.props.open
	            });

	            return React.createElement(
	                Container,
	                { id: 'container', className: classes },
	                React.createElement(_commonSidebar2['default'], null),
	                React.createElement(_commonHeader2['default'], null),
	                React.createElement(Body, null),
	                React.createElement(_commonFooter2['default'], null)
	            );
	        }
	    }]);

	    var _default2 = _default;
	    _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	    return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactChartjs = __webpack_require__(43);

	var _underscore = __webpack_require__(53);

	var _underscore2 = _interopRequireDefault(_underscore);

	function R(decadeSYearValue, decadeEYearValue) {
	    return (decadeEYearValue / decadeSYearValue - 1) * 100;
	}

	function projectedValue(R, D, previouYearVal) {
	    return previouYearVal * Math.pow(1 + R / 100, D / 120);
	}

	function diff(selYear, decadeEndYear) {
	    return (selYear - decadeEndYear) * 12;
	}

	function decadeYears(data) {
	    return [data[0].year, data[1].year];
	}

	function yearsData(start, end) {
	    var cmbData = [{ lbl: "select", val: 0 }];
	    for (var i = start; i <= end; i++) cmbData.push({ lbl: i - 1 + "-" + i, val: i });
	    return cmbData;
	}

	var labels = ["rural_male", "rural_female", "urban_male", "urban_female"];

	var options = { bezierCurve: false, datasetFill: false, pointDot: false };
	var barOptions = { inGraphDataShow: true, showTooltips: false,
	    onAnimationComplete: function onAnimationComplete() {
	        var ctx = this.chart.ctx;
	        ctx.font = this.scale.font;
	        ctx.fillStyle = this.scale.textColor;
	        ctx.textAlign = "center";
	        ctx.textBaseline = "bottom";

	        this.datasets.forEach(function (dataset) {
	            dataset.bars.forEach(function (bar) {
	                ctx.fillText(bar.value, bar.x, bar.y - 5);
	            });
	        });
	    } };

	var PopulationChart = (function (_Component) {
	    _inherits(PopulationChart, _Component);

	    function PopulationChart(props) {
	        _classCallCheck(this, PopulationChart);

	        _get(Object.getPrototypeOf(PopulationChart.prototype), 'constructor', this).call(this, props);
	        this.state = { data: props.data, tdata: [], bdata: props.bdata, knobvalue: 0 };
	    }

	    _createClass(PopulationChart, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            $('#dates').val(2014);
	            var fvalues = getFilterValues();
	            $.ajax({
	                url: "http://localhost:8091/all",
	                dataType: 'json',
	                success: (function (data) {
	                    var arr = [];
	                    var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function (o) {
	                        return o.year;
	                    }));
	                    var opData;
	                    if (fvalues.year <= minandmaxdatadates[1]) {
	                        var lpf = _underscore2['default'].filter(data.lfp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        lpf.paramType = "Labour Force";
	                        arr.push(lpf);
	                        var wp = _underscore2['default'].filter(data.wp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        wp.paramType = "Workers";
	                        arr.push(wp);
	                        var ump = _underscore2['default'].filter(data.ump, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        ump.paramType = "Unemployed Persons";
	                        arr.push(ump);
	                        opData = getPresentData(arr, data.decade, fvalues.year, data[this.props.paramType].filter(function (l) {
	                            return l.type == "UPS" && l.year <= fvalues.year;
	                        }), fvalues);
	                        this.setState({ tdata: opData[0], data: opData[1], bdata: barChartData(arr), knobvalue: opData[1].datasets[0].data[opData[1].datasets[0].data.length - 1] });
	                    } else {
	                        var years = genYears(fvalues.year, minandmaxdatadates[0]);
	                        years.push(parseInt(fvalues.year));
	                        var preData = predictedData(years, data, fvalues, this.props.paramType, minandmaxdatadates);
	                        this.setState({ tdata: preData[0], data: preData[1], bdata: barChartData(preData[0]), knobvalue: preData[1].datasets[0].data[preData[1].datasets[0].data.length - 1] });
	                    }
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    console.log(xhr);
	                    console.error(this.props.url, status, err.toString());
	                }).bind(this)
	            });
	        }
	    }, {
	        key: 'handleDataType',
	        value: function handleDataType() {
	            var fvalues = getFilterValues();
	            $.ajax({
	                url: "http://localhost:8091/all",
	                dataType: 'json',
	                success: (function (data) {
	                    var arr = [];
	                    var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function (o) {
	                        return o.year;
	                    }));
	                    var opData;
	                    if (fvalues.year <= minandmaxdatadates[1]) {
	                        var lpf = _underscore2['default'].filter(data.lfp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        lpf.paramType = "Labour Force";
	                        arr.push(lpf);
	                        var wp = _underscore2['default'].filter(data.wp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        wp.paramType = "Workers";
	                        arr.push(wp);
	                        var ump = _underscore2['default'].filter(data.ump, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        ump.paramType = "Unemployed Persons";
	                        arr.push(ump);
	                        opData = getPresentData(arr, data.decade, fvalues.year, data[this.props.paramType].filter(function (l) {
	                            return l.type == "UPS" && l.year <= fvalues.year;
	                        }), fvalues);
	                        console.log(opData[0]);
	                        this.setState({ tdata: opData[0], data: opData[1], bdata: barChartData(arr) });
	                    } else {
	                        var years = genYears(fvalues.year, minandmaxdatadates[0]);
	                        years.push(parseInt(fvalues.year));
	                        var preData = predictedData(years, data, fvalues, this.props.paramType, minandmaxdatadates);
	                        this.setState({ tdata: preData[0], data: preData[1], bdata: barChartData(preData[0]) });
	                    }
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    console.log(xhr);
	                    console.error(this.props.url, status, err.toString());
	                }).bind(this)
	            });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange() {
	            var fvalues = getFilterValues();
	            $.ajax({
	                url: "http://localhost:8091/all",
	                dataType: 'json',
	                success: (function (data) {
	                    var arr = [];
	                    var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function (o) {
	                        return o.year;
	                    }));
	                    var opData;
	                    if (fvalues.year <= minandmaxdatadates[1]) {
	                        var lpf = _underscore2['default'].filter(data.lfp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        lpf.paramType = "Labour Force";
	                        arr.push(lpf);
	                        var wp = _underscore2['default'].filter(data.wp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        wp.paramType = "Workers";
	                        arr.push(wp);
	                        var ump = _underscore2['default'].filter(data.ump, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        ump.paramType = "Unemployed Persons";
	                        arr.push(ump);
	                        opData = getPresentData(arr, data.decade, fvalues.year, data[this.props.paramType].filter(function (l) {
	                            return l.type == "UPS" && l.year <= fvalues.year;
	                        }), fvalues);
	                        this.setState({ tdata: opData[0], data: opData[1], bdata: barChartData(arr), knobvalue: opData[1].datasets[0].data[opData[1].datasets[0].data.length - 1] });
	                    } else {
	                        var years = genYears(fvalues.year, minandmaxdatadates[0]);
	                        years.push(parseInt(fvalues.year));
	                        var preData = predictedData(years, data, fvalues, this.props.paramType, minandmaxdatadates);
	                        this.setState({ tdata: preData[0], data: preData[1], bdata: barChartData(preData[0]), knobvalue: preData[1].datasets[0].data[preData[1].datasets[0].data.length - 1] });
	                    }
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    console.log(xhr);
	                    console.error(this.props.url, status, err.toString());
	                }).bind(this)
	            });
	        }
	    }, {
	        key: 'genderHandle',
	        value: function genderHandle() {
	            var fvalues = getFilterValues();
	            $.ajax({
	                url: "http://localhost:8091/all",
	                dataType: 'json',
	                success: (function (data) {
	                    var arr = [];
	                    var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function (o) {
	                        return o.year;
	                    }));
	                    var opData;
	                    if (fvalues.year <= minandmaxdatadates[1]) {
	                        var lpf = _underscore2['default'].filter(data.lfp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        lpf.paramType = "Labour Force";
	                        arr.push(lpf);
	                        var wp = _underscore2['default'].filter(data.wp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        wp.paramType = "Workers";
	                        arr.push(wp);
	                        var ump = _underscore2['default'].filter(data.ump, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        ump.paramType = "Unemployed Persons";
	                        arr.push(ump);
	                        opData = getPresentData(arr, data.decade, fvalues.year, data[this.props.paramType].filter(function (l) {
	                            return l.type == "UPS" && l.year <= fvalues.year;
	                        }), fvalues);
	                        this.setState({ tdata: opData[0], data: opData[1], bdata: barChartData(arr), knobvalue: opData[1].datasets[0].data[opData[1].datasets[0].data.length - 1] });
	                    } else {
	                        var years = genYears(fvalues.year, minandmaxdatadates[0]);
	                        years.push(parseInt(fvalues.year));
	                        var preData = predictedData(years, data, fvalues, this.props.paramType, minandmaxdatadates);
	                        this.setState({ tdata: preData[0], data: preData[1], bdata: barChartData(preData[0]), knobvalue: preData[1].datasets[0].data[preData[1].datasets[0].data.length - 1] });
	                    }
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    console.log(xhr);
	                    console.error(this.props.url, status, err.toString());
	                }).bind(this)
	            });
	        }
	    }, {
	        key: 'geoHandle',
	        value: function geoHandle() {
	            var fvalues = getFilterValues();
	            $.ajax({
	                url: "http://localhost:8091/all",
	                dataType: 'json',
	                success: (function (data) {
	                    var arr = [];
	                    var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function (o) {
	                        return o.year;
	                    }));
	                    var opData;
	                    if (fvalues.year <= minandmaxdatadates[1]) {
	                        var lpf = _underscore2['default'].filter(data.lfp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        lpf.paramType = "Labour Force";
	                        arr.push(lpf);
	                        var wp = _underscore2['default'].filter(data.wp, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        wp.paramType = "Workers";
	                        arr.push(wp);
	                        var ump = _underscore2['default'].filter(data.ump, function (x) {
	                            return x.year == fvalues.year && x.type == fvalues.datatype;
	                        })[0];
	                        ump.paramType = "Unemployed Persons";
	                        arr.push(ump);
	                        opData = getPresentData(arr, data.decade, fvalues.year, data[this.props.paramType].filter(function (l) {
	                            return l.type == "UPS" && l.year <= fvalues.year;
	                        }), fvalues);
	                        console.log(opData[0]);
	                        this.setState({ tdata: opData[0], data: opData[1], bdata: barChartData(arr), knobvalue: opData[1].datasets[0].data[opData[1].datasets[0].data.length - 1] });
	                    } else {
	                        var years = genYears(fvalues.year, minandmaxdatadates[0]);
	                        years.push(parseInt(fvalues.year));
	                        var preData = predictedData(years, data, fvalues, this.props.paramType, minandmaxdatadates);
	                        this.setState({ tdata: preData[0], data: preData[1], bdata: barChartData(preData[0]), knobvalue: preData[1].datasets[0].data[preData[1].datasets[0].data.length - 1] });
	                    }
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    console.log(xhr);
	                    console.error(this.props.url, status, err.toString());
	                }).bind(this)
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                Container,
	                { id: 'graph' },
	                _react2['default'].createElement(
	                    PanelContainer,
	                    { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	                    _react2['default'].createElement(
	                        Panel,
	                        { horizontal: true, className: 'force-collapse' },
	                        _react2['default'].createElement(
	                            PanelLeft,
	                            { className: 'col-xs-6' },
	                            _react2['default'].createElement(
	                                PanelHeader,
	                                { className: 'bg-orange75 fg-white center text-center' },
	                                _react2['default'].createElement(
	                                    'h4',
	                                    null,
	                                    'Labour Force Parameters'
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                PanelBody,
	                                { style: { padding: 10 } },
	                                _react2['default'].createElement(Filter, { handleDataType: this.handleDataType.bind(this),
	                                    data: this.state.data, tdata: this.state.tdata,
	                                    genderHandle: this.genderHandle.bind(this), geoHandle: this.geoHandle.bind(this) }),
	                                _react2['default'].createElement(
	                                    FormGroup,
	                                    null,
	                                    _react2['default'].createElement(
	                                        Label,
	                                        null,
	                                        'Year'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'div',
	                                        null,
	                                        _react2['default'].createElement(ComboBox, { dates: yearsData(2012, 2030), onChange: this.onChange.bind(this), tdata: this.state.tabledata })
	                                    )
	                                )
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            PanelRight,
	                            { className: 'col-xs-6 text-center' },
	                            _react2['default'].createElement(
	                                PanelHeader,
	                                { className: 'bg-orange75 fg-white center text-center' },
	                                _react2['default'].createElement(
	                                    'h4',
	                                    null,
	                                    'Labour Force Parameter Trend'
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                PanelBody,
	                                { style: { padding: 10 } },
	                                _react2['default'].createElement('input', { type: 'text', value: this.state.knobvalue, className: 'dial autosize', 'data-width': '100%', 'data-fgcolor': '#F09FA6', disabled: true })
	                            )
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    PanelContainer,
	                    { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	                    _react2['default'].createElement(
	                        Panel,
	                        null,
	                        _react2['default'].createElement(
	                            PanelHeader,
	                            { className: 'bg-orange75 fg-white center text-center' },
	                            _react2['default'].createElement(
	                                'h4',
	                                null,
	                                'Labour Force Parameter Trend'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            PanelBody,
	                            null,
	                            _react2['default'].createElement(_reactChartjs.Line, { id: 'chart', data: this.state.data, options: options, width: '600', height: '250', redraw: true })
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    PanelContainer,
	                    { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	                    _react2['default'].createElement(
	                        Panel,
	                        null,
	                        _react2['default'].createElement(
	                            PanelHeader,
	                            { className: 'bg-orange75 fg-white center text-center' },
	                            _react2['default'].createElement(
	                                'h4',
	                                null,
	                                'Comparative Labour Force Parameters'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            PanelBody,
	                            null,
	                            _react2['default'].createElement(
	                                'title',
	                                null,
	                                'Guess what?'
	                            ),
	                            _react2['default'].createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: "\n<!--\n.side { vertical-align:absbottom; display:inline }\n-->\n" } }),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(141,211,199)" } },
	                                ' SC-MALE '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(251,180,174)" } },
	                                ': SC-FEMALE '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(190,186,218)" } },
	                                ': SC-PERSON '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(251,128,114)" } },
	                                ': ST-MALE  '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(128,177,211)" } },
	                                ': ST-FEMALE '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(253,180,98)" } },
	                                ': ST-PERSON '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(179,222,105)" } },
	                                ': OBC-MALE '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(252,205,229)" } },
	                                ': OBC-FEMALE '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(217,217,217)" } },
	                                ': OBC-PERSON '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(188,128,189)" } },
	                                ': OTHERS-MALE '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(204,235,197)" } },
	                                ': OTHERS-FEMALE '
	                            ),
	                            _react2['default'].createElement(
	                                'h6',
	                                { className: 'side', style: { color: "rgb(255,237,111)" } },
	                                ': OTHERS-PERSON'
	                            ),
	                            _react2['default'].createElement(_reactChartjs.Bar, { id: 'bchart', data: this.state.bdata, options: barOptions, width: '600', height: '250', redraw: true })
	                        )
	                    )
	                ),
	                _react2['default'].createElement(DataTable, { tabledata: this.state.tdata })
	            );
	        }
	    }]);

	    return PopulationChart;
	})(_react.Component);

	exports.PopulationChart = PopulationChart;

	function getData(labeldata, dataarray) {
	    return { labels: labeldata,
	        datasets: [{
	            label: "original",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: dataarray
	        }] };
	}

	function getPresentData(data, decadeData, selYear, allYearsData, fvalues) {
	    var df = diff(selYear, decadeData[1].year);
	    var obj = { paramType: "Projected Population as on " + selYear };
	    _underscore2['default'].each(labels, function (l) {
	        obj[l] = parseInt(projectedValue(R(decadeData[0][l], decadeData[1][l]).toFixed(3), df, decadeData[1][l]).toFixed(0));
	    });
	    obj["rural_person"] = obj.rural_male + obj.rural_female;
	    obj["urban_person"] = obj.urban_male + obj.urban_female;
	    obj["rural_urban_person"] = obj["urban_person"] + obj["rural_person"];
	    obj["rural_urban_male"] = obj["urban_male"] + obj["rural_male"];
	    obj["rural_urban_female"] = obj["urban_female"] + obj["rural_female"];
	    data.push(obj);
	    var lchartData = getLineChartData(allYearsData, fvalues);
	    return [data, getData(lchartData[0], lchartData[1])];
	}

	var Filter = (function (_Component2) {
	    _inherits(Filter, _Component2);

	    function Filter() {
	        _classCallCheck(this, Filter);

	        _get(Object.getPrototypeOf(Filter.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Filter, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                Container,
	                null,
	                _react2['default'].createElement(
	                    Form,
	                    null,
	                    _react2['default'].createElement(
	                        FormGroup,
	                        null,
	                        _react2['default'].createElement(
	                            Label,
	                            null,
	                            'Gender'
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            _react2['default'].createElement(
	                                Radio,
	                                { inline: true, id: 'male', value: 'option1', name: 'gen', onClick: this.props.genderHandle.bind(this) },
	                                'Male'
	                            ),
	                            _react2['default'].createElement(
	                                Radio,
	                                { inline: true, id: 'female', value: 'option2', name: 'gen', onClick: this.props.genderHandle.bind(this) },
	                                'Female'
	                            ),
	                            _react2['default'].createElement(
	                                Radio,
	                                { inline: true, id: 'person', value: 'option3', defaultChecked: true, name: 'gen', onClick: this.props.genderHandle.bind(this) },
	                                'Person'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        FormGroup,
	                        null,
	                        _react2['default'].createElement(
	                            Label,
	                            null,
	                            'Category'
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            _react2['default'].createElement(
	                                Radio,
	                                { inline: true, id: 'rural', value: 'option1', name: 'geo', onClick: this.props.geoHandle.bind(this) },
	                                'RURAL'
	                            ),
	                            _react2['default'].createElement(
	                                Radio,
	                                { inline: true, id: 'urban', value: 'option2', name: 'geo', onClick: this.props.geoHandle.bind(this) },
	                                'URBAN'
	                            ),
	                            _react2['default'].createElement(
	                                Radio,
	                                { inline: true, id: 'rural_urban', value: 'option3', defaultChecked: true, name: 'geo', onClick: this.props.geoHandle.bind(this) },
	                                'RURAL+URBAN'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        FormGroup,
	                        null,
	                        _react2['default'].createElement(
	                            Label,
	                            null,
	                            'Approach'
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            null,
	                            _react2['default'].createElement(
	                                Radio,
	                                { inline: true, id: 'UPS', value: 'option1', defaultChecked: true, name: 'datatype', onClick: this.props.handleDataType.bind(this) },
	                                'UPS'
	                            ),
	                            _react2['default'].createElement(
	                                Radio,
	                                { inline: true, id: 'UPSS', value: 'option2', name: 'datatype', onClick: this.props.handleDataType.bind(this) },
	                                'UPSS'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Filter;
	})(_react.Component);

	exports.Filter = Filter;

	var ComboBox = (function (_Component3) {
	    _inherits(ComboBox, _Component3);

	    function ComboBox() {
	        _classCallCheck(this, ComboBox);

	        _get(Object.getPrototypeOf(ComboBox.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ComboBox, [{
	        key: 'render',
	        value: function render() {
	            var optionsarray = this.props.dates.map(function (d) {
	                return _react2['default'].createElement(
	                    'option',
	                    { key: d.val, value: d.val },
	                    d.lbl
	                );
	            });
	            return _react2['default'].createElement(
	                'select',
	                { id: 'dates', onChange: this.props.onChange.bind(this) },
	                optionsarray
	            );
	        }
	    }]);

	    return ComboBox;
	})(_react.Component);

	exports.ComboBox = ComboBox;

	var DataTable = (function (_Component4) {
	    _inherits(DataTable, _Component4);

	    function DataTable() {
	        _classCallCheck(this, DataTable);

	        _get(Object.getPrototypeOf(DataTable.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(DataTable, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            $('.tablesaw').table();

	            $('.dial').knob();
	            $('.knob').knob({
	                draw: function draw() {
	                    // 'tron' case
	                    if (this.$.data('skin') == 'tron') {
	                        var a = this.angle(this.cv),
	                            // Angle
	                        sa = this.startAngle,
	                            // Previous start angle
	                        sat = this.startAngle,
	                            // Start angle
	                        ea,
	                            // Previous end angle
	                        eat = sat + a,
	                            // End angle
	                        r = true;

	                        this.g.lineWidth = this.lineWidth;

	                        this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

	                        if (this.o.displayPrevious) {
	                            ea = this.startAngle + this.angle(this.value);
	                            this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
	                            this.g.beginPath();
	                            this.g.strokeStyle = this.previousColor;
	                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
	                            this.g.stroke();
	                        }

	                        this.g.beginPath();
	                        this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
	                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
	                        this.g.stroke();

	                        this.g.lineWidth = 2;
	                        this.g.beginPath();
	                        this.g.strokeStyle = this.o.fgColor;
	                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
	                        this.g.stroke();

	                        return false;
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var rows = [];
	            this.props.tabledata.forEach(function (dat) {
	                rows.push(_react2['default'].createElement(Row, { data: dat }));
	            });
	            return _react2['default'].createElement(
	                PanelContainer,
	                { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	                _react2['default'].createElement(
	                    Panel,
	                    null,
	                    _react2['default'].createElement(
	                        PanelHeader,
	                        { className: 'bg-orange75 fg-white center text-center' },
	                        _react2['default'].createElement(
	                            'h4',
	                            null,
	                            this.props.type
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        PanelBody,
	                        null,
	                        _react2['default'].createElement(
	                            Table,
	                            { striped: true, bordered: true, className: 'tablesaw' },
	                            _react2['default'].createElement(
	                                'thead',
	                                null,
	                                _react2['default'].createElement(
	                                    'th',
	                                    null,
	                                    'Social Group'
	                                ),
	                                _react2['default'].createElement(
	                                    'th',
	                                    { colSpan: 3 },
	                                    'Rural'
	                                ),
	                                _react2['default'].createElement(
	                                    'th',
	                                    { colSpan: 3 },
	                                    'Urban'
	                                ),
	                                _react2['default'].createElement(
	                                    'th',
	                                    { colSpan: 3 },
	                                    'Rural+Urban'
	                                ),
	                                _react2['default'].createElement(
	                                    'tr',
	                                    null,
	                                    _react2['default'].createElement('th', null),
	                                    _react2['default'].createElement(
	                                        'th',
	                                        null,
	                                        'Male'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'th',
	                                        null,
	                                        'Female'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'th',
	                                        null,
	                                        'Person'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'th',
	                                        null,
	                                        'Male'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'th',
	                                        null,
	                                        'Female'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'th',
	                                        null,
	                                        'Person'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'th',
	                                        null,
	                                        'Male'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'th',
	                                        null,
	                                        'Female'
	                                    ),
	                                    _react2['default'].createElement(
	                                        'th',
	                                        null,
	                                        'Person'
	                                    )
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                'tbody',
	                                null,
	                                rows
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return DataTable;
	})(_react.Component);

	exports.DataTable = DataTable;

	var Row = (function (_Component5) {
	    _inherits(Row, _Component5);

	    function Row() {
	        _classCallCheck(this, Row);

	        _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Row, [{
	        key: 'render',
	        value: function render() {
	            var d = this.props.data;
	            return _react2['default'].createElement(
	                'tr',
	                null,
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    d.paramType
	                ),
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'dataCell' },
	                        d.rural_male
	                    )
	                ),
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'dataCell' },
	                        d.rural_female
	                    )
	                ),
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'dataCell' },
	                        d.rural_person
	                    )
	                ),
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'dataCell' },
	                        d.urban_male
	                    )
	                ),
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'dataCell' },
	                        d.urban_female
	                    )
	                ),
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'dataCell' },
	                        d.urban_person
	                    )
	                ),
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'dataCell' },
	                        d.rural_urban_male
	                    )
	                ),
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'dataCell' },
	                        d.rural_urban_female
	                    )
	                ),
	                _react2['default'].createElement(
	                    'td',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'dataCell' },
	                        d.rural_urban_person
	                    )
	                )
	            );
	        }
	    }]);

	    return Row;
	})(_react.Component);

	exports.Row = Row;

	function createDataObj(csettings, data) {
	    return {
	        label: csettings[0],
	        fillColor: csettings[1],
	        strokeColor: csettings[2],
	        highlightFill: csettings[3],
	        highlightStroke: csettings[4],
	        data: data
	    };
	}

	function barSettings() {
	    return {
	        "Labour Force-person": ["SC-Person", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)"],
	        "Workers-person": ["ST-Person", "rgb(253,180,98)", "rgb(253,180,98)", "rgb(253,180,98)", "rgb(253,180,98)"],
	        "Unemployed Persons-person": ["OBC-Person", "rgb(217,217,217)", "rgb(217,217,217)", "rgb(217,217,217)", "rgb(217,217,217)"],
	        "Labour Force-male": ["SC-Male", "rgb(141,211,199)", "rgb(141,211,199)", "rgb(141,211,199)", "rgb(141,211,199)"],
	        "Labour Force-female": ["SC-Female", "rgb(251,180,174)", "rgb(251,180,174)", "rgb(251,180,174)", "rgb(251,180,174)"],
	        "Workers-male": ["ST-Male", "rgb(251,128,114)", "rgb(251,128,114) ", "rgb(251,128,114) ", "rgb(251,128,114)"],
	        "Workers-female": ["ST-Female", "rgb(128,177,211)", "rgb(128,177,211)", "rgb(128,177,211)", "rgb(128,177,211)"],
	        "Unemployed Persons-male": ["OBC-Male", "rgb(179,222,105)", "rgb(179,222,105)", "rgb(179,222,105)", "rgb(179,222,105)"],
	        "Unemployed Persons-female": ["OBC-Female", "rgba(51,153,255,0.5)", "rgba(51,153,255,0.8)", "rgba(51,153,255,0.75)", "rgba(51,153,255,1)"]
	    };
	}
	function getChartType(chartType) {
	    switch (chartType) {
	        case "labour-rate":
	            return "lfpr";
	            break;
	        case "worker-population":
	            return "wpr";
	            break;
	        case "unemployment-rate":
	            return "umr";
	            break;
	        default:
	            return "pur";
	    }
	}

	function genYears(selyear, min) {
	    var years = [];
	    for (var i = min; i < selyear; i++) years.push(i);
	    return years;
	}

	function getFilterValues() {
	    var Gen = $('input[name=gen]:checked')[0];
	    var Types = $('input[name=charttype]:checked')[0];
	    return {
	        gen: [Gen.id],
	        geo: $('input[name=geo]:checked')[0].id,
	        datatype: $('input[name=datatype]:checked')[0].id,
	        year: $('#dates').val()
	    };
	}

	function getLineChartData(previousData, fvalues) {
	    var labels = [];
	    var axisData = [];
	    _underscore2['default'].each(previousData, function (c) {
	        labels.push(c.year.toString());
	        axisData.push(c[fvalues.geo + '_' + fvalues.gen]);
	    });
	    return [labels, axisData];
	}

	function barChartData(data) {
	    var datasets = [];
	    var bsettings = barSettings();
	    var labels = ["rural", "urban", "rural_urban"];
	    var paramTypes = ["Labour Force", "Workers", "Unemployed Persons"];
	    var gen = ["male", "female", "person"];
	    _underscore2['default'].each(paramTypes, function (p) {
	        var catobj = _underscore2['default'].find(data, function (x) {
	            return x.paramType == p;
	        });
	        _underscore2['default'].each(gen, function (g) {
	            var data = [];
	            _underscore2['default'].each(labels, function (l) {
	                data.push(catobj[l + "_" + g]);
	            });
	            datasets.push(createDataObj(bsettings[p + '-' + g], data));
	        });
	    });
	    return {
	        labels: labels,
	        datasets: datasets
	    };
	}
	function getMinDateAndMaxDateInGivenData(data) {
	    return [_underscore2['default'].min(data), _underscore2['default'].max(data)];
	}

	function predictedData(years, data, fvalues, paramType, minMaxDates) {
	    var labels = [];
	    var lineChartData = [];
	    var maxYearData = _underscore2['default'].filter(data[paramType], function (data) {
	        return data.year == minMaxDates[1] && data.type == fvalues.datatype;
	    })[0];
	    _underscore2['default'].each(years, function (d) {

	        if (d <= minMaxDates[1]) {
	            labels.push(d.toString());
	            lineChartData.push(_underscore2['default'].filter(data[paramType], function (data) {
	                return data.year == d && data.type == fvalues.datatype;
	            })[0][fvalues.geo + '_' + fvalues.gen]);
	        } else {

	            labels.push(d.toString());
	            var projData = fvalues.geo == 'rural_urban' ? fvalues.gen == 'person' ? parseInt(projectedValue(R(data.decade[0]['rural' + '_' + 'male'], data.decade[1]['rural' + '_' + 'male']).toFixed(3), diff(d, minMaxDates[1]), maxYearData['rural' + '_' + 'male']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['rural' + '_' + 'female'], data.decade[1]['rural' + '_' + 'female']).toFixed(3), diff(d, minMaxDates[1]), maxYearData['rural' + '_' + 'female']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['urban' + '_' + 'male'], data.decade[1]['urban' + '_' + 'male']).toFixed(3), diff(d, minMaxDates[1]), maxYearData['urban' + '_' + 'male']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['urban' + '_' + 'female'], data.decade[1]['urban' + '_' + 'female']).toFixed(3), diff(d, minMaxDates[1]), maxYearData['urban' + '_' + 'female']).toFixed(0)) : parseInt(projectedValue(R(data.decade[0]['rural' + '_' + fvalues.gen], data.decade[1]['rural' + '_' + fvalues.gen]).toFixed(3), diff(d, minMaxDates[1]), maxYearData['rural' + '_' + fvalues.gen]).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['urban' + '_' + fvalues.gen], data.decade[1]['urban' + '_' + fvalues.gen]).toFixed(3), diff(d, minMaxDates[1]), maxYearData['urban' + '_' + fvalues.gen]).toFixed(0)) : fvalues.gen == 'person' ? parseInt(projectedValue(R(data.decade[0][fvalues.geo + '_' + 'male'], data.decade[1][fvalues.geo + '_' + 'male']).toFixed(3), diff(d, minMaxDates[1]), maxYearData[fvalues.geo + '_' + 'male']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0][fvalues.geo + '_' + 'female'], data.decade[1][fvalues.geo + '_' + 'female']).toFixed(3), diff(d, minMaxDates[1]), maxYearData[fvalues.geo + '_' + 'female']).toFixed(0)) : parseInt(projectedValue(R(data.decade[0][fvalues.geo + '_' + fvalues.gen], data.decade[1][fvalues.geo + '_' + fvalues.gen]).toFixed(3), diff(d, minMaxDates[1]), maxYearData[fvalues.geo + '_' + fvalues.gen]).toFixed(0));
	            lineChartData.push(projData);
	        }
	    });
	    return [getTablePredicatedData(data, fvalues, minMaxDates), getData(labels, lineChartData)];
	}

	function getTablePredicatedData(data, fvalues, minMaxDates) {
	    var obj1 = { paramType: "Labour Force" },
	        obj2 = { paramType: "Workers" },
	        obj3 = { paramType: "Unemployed Persons" },
	        obj4 = { paramType: "Projected population As On " + fvalues.year };
	    var df = diff(fvalues.year, minMaxDates[1]);
	    var df1 = diff(fvalues.year, data.decade[1].year);
	    var lpf = _underscore2['default'].filter(data.lfp, function (lp) {
	        return lp.type == fvalues.datatype && lp.year == minMaxDates[1];
	    })[0];
	    var wp = _underscore2['default'].filter(data.wp, function (lp) {
	        return lp.type == fvalues.datatype && lp.year == minMaxDates[1];
	    })[0];
	    var uep = _underscore2['default'].filter(data.ump, function (lp) {
	        return lp.type == fvalues.datatype && lp.year == minMaxDates[1];
	    })[0];
	    _underscore2['default'].each(labels, function (l) {
	        obj1[l] = parseInt(projectedValue(R(data.decade[0][l], data.decade[1][l]).toFixed(3), df, lpf[l]).toFixed(0));
	    });
	    setPersonsAndTotalValues(obj1);
	    _underscore2['default'].each(labels, function (l) {
	        obj2[l] = parseInt(projectedValue(R(data.decade[0][l], data.decade[1][l]).toFixed(3), df, wp[l]).toFixed(0));
	    });
	    setPersonsAndTotalValues(obj2);
	    _underscore2['default'].each(labels, function (l) {
	        obj3[l] = parseInt(projectedValue(R(data.decade[0][l], data.decade[1][l]).toFixed(3), df, uep[l]).toFixed(0));
	    });
	    setPersonsAndTotalValues(obj3);
	    _underscore2['default'].each(labels, function (l) {
	        obj4[l] = parseInt(projectedValue(R(data.decade[0][l], data.decade[1][l]).toFixed(3), df1, data.decade[1][l]).toFixed(0));
	    });
	    setPersonsAndTotalValues(obj4);
	    return [obj1, obj2, obj3, obj4];
	}

	function setPersonsAndTotalValues(obj) {
	    obj["rural_person"] = obj.rural_male + obj.rural_female;
	    obj["urban_person"] = obj.urban_male + obj.urban_female;
	    obj["rural_urban_person"] = obj["urban_person"] + obj["rural_person"];
	    obj["rural_urban_male"] = obj["urban_male"] + obj["rural_male"];
	    obj["rural_urban_female"] = obj["urban_female"] + obj["rural_female"];
	}

	function getTypeOfParam(v) {
	    if ("lpf") return "Labour Force";
	    if ("wp") return "Workers";
	    if ("ump") return "Unemployed Persons";
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(3);

	var _reactRouterLibLocation = __webpack_require__(18);

	var _reactRouterLibLocation2 = _interopRequireDefault(_reactRouterLibLocation);

	if (window.hasOwnProperty('vex')) {
	  vex.defaultOptions.className = 'vex-theme-flat-attack';
	}

	var onUpdate = function onUpdate(notReady) {
	  // cleanup (do not modify)
	  rubix_bootstrap.core.reset_globals_BANG_();
	  if (window.Rubix) window.Rubix.Cleanup();

	  Pace.restart();
	  if (window.hasOwnProperty('ga') && typeof window.ga === 'function') {
	    window.ga('send', 'pageview', {
	      'page': window.location.pathname + window.location.search + window.location.hash
	    });
	  }

	  if (!notReady) {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function () {
	      $('body').removeClass('fade-out');
	    }, 500);
	  }
	};

	var InitializeRouter = function InitializeRouter(routes) {
	  onUpdate(true);
	  var rootInstance = React.render(routes, document.getElementById('app-container'), function () {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function () {
	      $('body').removeClass('fade-out');
	    }, 500);
	  });

	  // initialize react-hot-loader
	  if (false) {
	    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
	      getRootInstances: function getRootInstances() {
	        // Help React Hot Loader figure out the root component instances on the page:
	        return [rootInstance];
	      }
	    });
	  }
	};

	module.exports = function (routes) {
	  if ('document' in window) {
	    InitializeRouter(routes(true, onUpdate));
	  } else {
	    // called only server side!
	    if (false) {
	      global.StaticComponent = React.createClass({
	        displayName: 'StaticComponent',

	        render: function render() {
	          var Handler = null;
	          var location = new _reactRouterLibLocation2['default'](this.props.path, this.props.query);
	          ReactBootstrap.Dispatcher.removeAllListeners();
	          rubix_bootstrap.core.reset_globals_BANG_();
	          _reactRouter.Router.run(routes(false), location, function (e, i, t) {
	            Handler = React.createElement(_reactRouter.Router, i);
	          });
	          return Handler;
	        }
	      });
	    } else {
	      return function () {
	        ReactBootstrap.Dispatcher.removeAllListeners();
	        rubix_bootstrap.core.reset_globals_BANG_();
	        return routes(false);
	      };
	    }
	  }
	};

/***/ }
/******/ ]);