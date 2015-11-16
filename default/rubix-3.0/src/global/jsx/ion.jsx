import classNames from 'classnames';

var IonTabItem = React.createClass({
  statics: {
    ID: 0,
    getID: function() {
      return IonTabItem.ID++;
    },
    resetID: function() {
      IonTabItem.ID = 0;
    }
  },
  getInitialState: function() {
    return {
      id: 'tab-'+IonTabItem.getID()+'-name'
    };
  },
  render: function() {
    var classes = classNames('ionTabs__item', this.props.className);

    var props = {
      ...this.props,
      className: classes,
      'data-name': this.state.id
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var IonTabBody = React.createClass({
  render: function() {
    var classes = classNames('ionTabs__body', this.props.className);
    var props = {
      ...this.props,
      className: classes
    };

    return (
      <div {...props}>
        {this.props.children}
        <div className='ionTabs__preloader'></div>
      </div>
    );
  }
});

var IonTab = React.createClass({
  statics: {
    ID: 0,
    getID: function() {
      return IonTab.ID++;
    },
    resetID: function() {
      IonTab.ID = 0;
    }
  },
  getInitialState: function() {
    return {
      id: 'tab-'+IonTab.getID()+'-name'
    };
  },
  handleChange: function(key, value) {
    if(this.props.hasOwnProperty(key) && this.props[key] === value) {
      $.ionTabs.setTab(this.props.containerID, this.state.id);
    }
  },
  componentWillMount: function() {
    ReactBootstrap.Dispatcher.on('ionTabs:'+this.props.containerID, this.handleChange);
  },
  componentWillUnmount: function() {
    ReactBootstrap.Dispatcher.off('ionTabs:'+this.props.containerID, this.handleChange);
  },
  render: function() {
    var classes = classNames('ionTabs__tab', this.props.className);

    var props = {
      ...this.props,
      className: classes,
      'data-target': this.state.id
    };

    return (
      <li {...props}>
        {this.props.children}
      </li>
    );
  }
});

var IonTabHead = React.createClass({
  render: function() {
    var children = React.Children.map(this.props.children, function(child, i) {
      return React.cloneElement(child, {
        containerID: this.props.containerID
      });
    }, this);

    var classes = classNames('ionTabs__head', this.props.className);

    var props = {
      ...this.props,
      className: classes
    };

    return (
      <ul {...props}>
        {children}
      </ul>
    );
  }
});

var IonTabContainer = React.createClass({
  statics: {
    ID: 0,
    getID: function() {
      return IonTabContainer.ID++;
    }
  },
  getInitialState: function() {
    return {
      id: 'tab-group-'+IonTabContainer.getID()
    };
  },
  setTab: function(key, value) {
    ReactBootstrap.Dispatcher.emit('ionTabs:'+this.state.id, key, value);
  },
  componentDidMount: function() {
    $.ionTabs(this.refs.tab.getDOMNode(), {
      type: 'none'
    });
  },
  render: function() {
    IonTab.resetID();
    IonTabItem.resetID();
    var children = React.Children.map(this.props.children, function(child, i) {
      return React.cloneElement(child, {
        containerID: this.state.id
      });
    }, this);

    var classes = classNames('ionTabs', this.props.className);

    var props = {
      ...this.props,
      className: classes,
      'data-name': this.state.id
    };

    return (
      <div ref='tab' {...props}>
        {children}
      </div>
    );
  }
});

module.exports.IonTabContainer = IonTabContainer;
module.exports.IonTabHead = IonTabHead;
module.exports.IonTabBody = IonTabBody;
module.exports.IonTab = IonTab;
module.exports.IonTabItem = IonTabItem;
