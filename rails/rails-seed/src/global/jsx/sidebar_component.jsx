import { Link, State, Navigation } from 'react-router';
import classNames from 'classnames';

var openState = (!Modernizr.touch) ? (localStorage.getItem('sidebar-open-state') === 'true' ? true : false) : false;
export default function SidebarMixin(ComposedComponent) {
  return React.createClass({
    displayName: 'SidebarMixin',
    getInitialState() {
      return {
        open: openState
      };
    },
    isOpen() {
      return this.state.open === open;
    },
    sidebarStateChangeCallback(open) {
      if(this.isOpen()) return;
      if(open !== undefined) {
        openState = open;
      } else {
        openState = !this.state.open;
      }
      this.setState({
        open: openState // toggle sidebar
      });
      localStorage.setItem('sidebar-open-state', openState);
    },
    componentWillMount() {
      ReactBootstrap.Dispatcher.on('sidebar', this.sidebarStateChangeCallback);
    },
    componentWillUnmount() {
      ReactBootstrap.Dispatcher.off('sidebar', this.sidebarStateChangeCallback);
    },
    render() {
      return <ComposedComponent {...this.props} open={this.state.open} />;
    }
  });
}

export var SidebarControlBtn = React.createClass({
  getInitialState() {
    return {
      active: this.props.active || false
    };
  },
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', this.props);
    ReactBootstrap.Dispatcher.emit('sidebar:keychange', this.props.sidebar);
  },
  handleState(props) {
    if(props.hasOwnProperty('sidebar')) {
      if(props.sidebar === this.props.sidebar) {
        this.setState({active: true});
      } else {
        this.setState({active: false});
      }
    }
  },
  componentDidMount() {
    ReactBootstrap.Dispatcher.on('sidebar:controlbtn', this.handleState);
    var scrollToTop = () => {
      if($(window).scrollTop() === 0) return;
      setTimeout(() => {
        $('html, body, #body').scrollTop(0);
        $(window).scrollTop(0);
        scrollToTop();
      }, 15);
    };

    scrollToTop();
  },
  componentWillUnmount() {
    ReactBootstrap.Dispatcher.off('sidebar:controlbtn', this.handleState);
  },
  render() {
    var classes = classNames('sidebar-control-btn', {
      'active': this.state.active
    }, this.props.className);

    var props = {
      tabIndex: '-1',
      onClick: this.handleClick,
      ...this.props,
      className: classes.trim()
    };
    return (
      <li {...props}>
        <a href='#' tabIndex='-1'>
          <Icon bundle={this.props.bundle} glyph={this.props.glyph}/>
        </a>
      </li>
    );
  }
});

export var SidebarControls = React.createClass({
  render() {
    var classes = classNames('sidebar-controls-container',
                              this.props.className);
    var props = {
      dir: 'ltr',
      ...this.props,
      className: classes
    };

    return (
      <div {...props} children={null}>
        <div className='sidebar-controls' tabIndex='-1'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var timer = null;
export var Sidebar = React.createClass({
  getInitialState() {
    return {
      left: ((this.props.sidebar * 100) + '%'),
      visibility: (this.props.sidebar === 0) ? 'visible' : 'hidden'
    };
  },
  handleKeyChange(sidebar) {
    var newLeft = ((this.props.sidebar*100) - (sidebar*100))+'%';
    this.setState({
      left: newLeft,
      visibility: 'visible'
    }, () => {
      if(newLeft !== '0%') {
        setTimeout(() => {
          this.setState({visibility: 'hidden'});
        }, 300);
      } else if(newLeft === '0%') {
        var height = $(React.findDOMNode(this.refs.innersidebar)).height();
        if($('html').hasClass('static')) {
          $('#body').css('min-height', height+400);
        } else {
          $('#body').css('min-height', '');
        }
      }
    });
  },
  updateScrollbar() {
    if(!Modernizr.touch) {
      $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('update');
    }
  },
  repositionScrollbar(child_node, top, height) {
    clearTimeout(timer);
    var node = $(React.findDOMNode(this.refs.sidebar));
    var scrollTo = top - node.offset().top + node.scrollTop();
    if(node.find(child_node).length) {
      if(scrollTo > ($(window).height() / 2)) {
        this.timer = setTimeout(() => {
          node.scrollTop(scrollTo - ($(window).height() / 2) + 100);
        }, 15);
      }
    }
    if(!Modernizr.touch) {
      this.updateScrollbar();
    }
  },
  destroyScrollbar() {
    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('destroy');
  },
  initializeScrollbar() {
    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar({
      suppressScrollX: true
    });
  },
  componentWillMount() {
    ReactBootstrap.Dispatcher.on('sidebar:reinitialize', this.initializeScrollbar);
    ReactBootstrap.Dispatcher.on('sidebar:destroy', this.destroyScrollbar);
    ReactBootstrap.Dispatcher.on('sidebar:update', this.updateScrollbar);
    ReactBootstrap.Dispatcher.on('sidebar:reposition', this.repositionScrollbar);
    ReactBootstrap.Dispatcher.on('sidebar:keychange', this.handleKeyChange);
  },
  componentDidMount() {
    if(!Modernizr.touch) {
      this.initializeScrollbar();
    }

    if(this.props.active) {
      setTimeout(() => {
        ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', {sidebar: this.props.sidebar});
        ReactBootstrap.Dispatcher.emit('sidebar:keychange', this.props.sidebar);
      }, 15);
    }
  },
  componentWillUnmount() {
    ReactBootstrap.Dispatcher.off('sidebar:reinitialize', this.initializeScrollbar);
    ReactBootstrap.Dispatcher.off('sidebar:destroy', this.destroyScrollbar);
    ReactBootstrap.Dispatcher.off('sidebar:update', this.updateScrollbar);
    ReactBootstrap.Dispatcher.off('sidebar:reposition', this.repositionScrollbar);
    ReactBootstrap.Dispatcher.off('sidebar:keychange', this.handleKeyChange);
  },
  render() {
    var props = {
      style: {
        left: this.state.left,
        visibility: this.state.visibility,
        transition: 'all 0.3s ease',
        OTransition: 'all 0.3s ease',
        MsTransition: 'all 0.3s ease',
        MozTransition: 'all 0.3s ease',
        WebkitTransition: 'all 0.3s ease'
      },
      ...this.props,
      className: classNames('sidebar', this.props.className)
    };

    return (
      <div ref='sidebar' {...props} children={null}>
        <div ref='innersidebar'>{this.props.children}</div>
      </div>
    );
  }
});

export var SidebarNavItem = React.createClass({
  timer: null,
  mixins: [Navigation, State],
  propTypes: {
    open: React.PropTypes.bool,
    active: React.PropTypes.bool,
    href: React.PropTypes.string,
    autoHeight: React.PropTypes.bool
  },
  getInitialState() {
    return {
      open: this.props.open || false,
      active: this.props.active || false,
      toggleOpen: this.props.open || false,
      dir: 'left',
      opposite: false
    };
  },
  emitOpen(open) {
    var node = React.findDOMNode(this.refs.node);
    if(open) {
      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node, open);
    } else {
      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node);
    }
  },
  handleClick(e) {
    if(!this.props.href) {
      e.preventDefault();
      e.stopPropagation();
    }
    if(this.props.hasOwnProperty('onClick')) {
      this.props.onClick();
    }
    this.emitOpen();
  },
  collapse(node, cb) {
    this.setState({
      toggleOpen: false
    }, () => {
      var height = $(node).height();
      $(node).css('height', height).animate({
        height: '45px'
      }, 125, 'easeInOutSine', () => {
        $(node).css('height', '');
        try {
          this.setState({
            open: false,
            toggleOpen: false
          }, () => {
            if(cb) cb();
          });
        } catch(e) {}
      });
    });
  },
  expand(node, cb, disableAnimation) {
    if(disableAnimation) {
      $(node).css('height', '').addClass('open');
    } else {
      this.setState({
        toggleOpen: true
      }, () => {
        var height = $(node).addClass('open').height();
        $(node).removeClass('open');
        $(node).css('height', '45px').animate({
          height: height
        }, 125, 'easeInOutSine', () => {
          $(node).css('height', '');
          try {
            this.setState({
              open: true
            }, () => {
              if(cb) cb();
            });
          } catch(e) {}
        });
      });
    }
  },
  handleOpenState(child_node, open) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if(this.props.children && this.isMounted()) {
        var node = React.findDOMNode(this.refs.node);
        if(open) {
          if($(node).find(child_node).length) {
            this.setState({
              open: true,
              toggleOpen: true
            });
            this.expand(node, () => {
              ReactBootstrap.Dispatcher.emit('sidebar:update');
            }, true);
          }
          return;
        }
        if($(node).is(child_node)) {
          if(this.state.open) {
            this.collapse(node, () => {
              ReactBootstrap.Dispatcher.emit('sidebar:update');
            });
          } else {
            this.expand(node, () => {
              ReactBootstrap.Dispatcher.emit('sidebar:update');
            });
          }
          return;
        }
        if(!($(node).find(child_node).length)) {
          if(this.state.open)
            this.collapse(node);
        }
      }
    }, 15);
  },
  handleLayoutDirChange(dir) {
    this.setState({
      dir: dir === 'ltr' ? 'left' : 'right',
      opposite: dir === 'ltr' ? false : true
    });
  },
  componentWillUnmount() {
    ReactBootstrap.Dispatcher.off('layout:dir', this.handleLayoutDirChange);
    ReactBootstrap.Dispatcher.off('sidebar:openstate', this.handleOpenState);
  },
  componentWillMount() {
    ReactBootstrap.Dispatcher.on('layout:dir', this.handleLayoutDirChange);
    ReactBootstrap.Dispatcher.on('sidebar:openstate', this.handleOpenState);
  },
  activateNavItem(props) {
    var active = props.active || false;
    var currentLocation = this.context.router.state.location.pathname;

    if(!active && props.href) {
      active = this.isActive(props.href) && (currentLocation == props.href);
    }

    if(active) {
      this.emitOpen(true);
      setTimeout(() => {
        this.setState({active: true});
        var node = React.findDOMNode(this.refs.node);
        var height = $(node).height();
        var top = $(node).offset().top;
        ReactBootstrap.Dispatcher.emit('sidebar:reposition', node, top, height);
      }, 15);
    } else {
      this.setState({active: false});
    }
  },
  componentWillReceiveProps(nextProps) {
    this.activateNavItem(nextProps);
  },
  componentDidMount() {
    this.activateNavItem(this.props);
  },
  render() {
    var classes = classNames({
      'open': this.state.open,
      'active': this.state.active
    });
    var toggleClasses = classNames({
      'toggle-button': true,
      'open': this.state.toggleOpen,
      'opposite': this.state.opposite
    });
    var icon=null, toggleButton = null;
    if(this.props.children) {
      toggleButton = <Icon className={toggleClasses.trim()} bundle='fontello' glyph={this.state.dir+'-open-3'} />;
    }
    if(this.props.glyph || this.props.bundle) {
      icon = <Icon bundle={this.props.bundle} glyph={this.props.glyph} />;
    }
    var style = {height: this.props.autoHeight ? 'auto' : ''};

    var props = {
      name: null,
      style: style,
      tabIndex: '-1',
      ...this.props,
      className: classes.trim()
    };

    var RouteLink = 'a';
    var componentProps = {
      name: null,
      tabIndex: -1,
      href: this.props.href || '',
      onClick: this.handleClick,
      style: style
    };

    if(this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
      RouteLink = Link;
      componentProps.to = this.props.href;
      delete componentProps.href;
    }

    return (
      <li ref='node' {...props}>
        <RouteLink {...componentProps}>
          {icon}
          <span className='name'>{this.props.name}</span>
          {toggleButton}
        </RouteLink>
        {this.props.children}
      </li>
    );
  }
});

export var SidebarNav = React.createClass({
  render() {
    var classes = classNames('sidebar-nav',
                              this.props.className);

    var props = {
      ...this.props,
      className: classes
    };

    return (
      <ul {...props} children={null}>
        {this.props.children}
      </ul>
    );
  }
});

export var SidebarBtn = React.createClass({
  handleSidebarStateChange(props) {
    if(props['data-id'] === 'sidebar-btn') {
      ReactBootstrap.Dispatcher.emit('sidebar');
    }
  },
  render() {
    var classes = classNames('pull-left visible-xs-inline-block',
                             this.props.className);
    var props = {
      ...this.props,
      classes
    };

    return (
      <NavContent {...props}>
        <Nav onItemSelect={this.handleSidebarStateChange}>
          <NavItem data-id='sidebar-btn' className='sidebar-btn' href='/'>
            <Icon bundle='fontello' glyph='th-list-5' />
          </NavItem>
        </Nav>
      </NavContent>
    );
  }
});
