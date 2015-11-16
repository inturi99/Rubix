/**
 * @jsx React.DOM
 */
'use strict';

var React       = require('react');
var StyleSheet  = require('react-style');

var linearGradient = 'linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10))';
var ButtonStyles = StyleSheet.create`

  .normalStyle {
    background-color: #E6E6E6;
    border: none rgba(0, 0, 0, 0);
    border-radius: 3px;
    color: rgba(0, 0, 0, 0.70);
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 100%;
    line-height: normal;
    padding: 0.5em 1em;
    text-align: center;
    user-select: none;
    text-decoration: none;
    vertical-align: baseline;
    white-space: nowrap;
    zoom: 1;
  }

  .activeStyle {
    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;
  }

  .hoverStyle {
    color: #000;
    background-image: ${linearGradient};
  }

  .focusStyle {
    background-image: ${linearGradient};
    outline: none;
  }

`;

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      hover: false
    };
  }

  render() {
    var props = this.props;
    var state = this.state;
    var styles = [
      ButtonStyles.normalStyle,
      props.active ? ButtonStyles.activeStyle : null,
      state.hover ? ButtonStyles.hoverStyle : null,
      state.focus ? ButtonStyles.focusStyle : null
    ].concat(props.styles);

    return (
      <button {...props} styles={styles}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        onFocus={() => this.setState({focus:true})}
        onBlur={() => this.setState({focus: false})}>
        {props.children}
      </button>
    );
  }
}

module.exports = Button;
