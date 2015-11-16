/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var StyleSheet = require('react-style');

var ButtonGroupStyles = StyleSheet.create`

  .normalStyle {
    display: inline;
  }

`;

class ButtonGroup extends React.Component {

  render() {
    return (
      <div styles={ButtonGroupStyles.normalStyle}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = ButtonGroup;
