import { State, Navigation } from 'react-router';
import TransitionHook from 'react-router/lib/TransitionHook';

export function EnhancedNavigation(ComposedComponent) {
  return React.createClass({
    displayName: 'EnhancedNavigation',
    mixins: [State, Navigation],

    render() {
      var stateMixinApi = {
          getPath     : this.getPath,
          getPathname : this.getPathname,
          getParams   : this.getParams,
          getQuery    : this.getQuery,
          isActive    : this.isActive,
          getRoutes   : this.getRoutes,
          transitionTo: this.transitionTo
      };

      return <ComposedComponent ref='component' {...this.props} {...stateMixinApi} routerState={stateMixinApi} />;
    }
  });
}
