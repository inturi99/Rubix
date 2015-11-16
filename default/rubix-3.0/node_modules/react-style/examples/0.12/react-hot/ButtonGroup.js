/**
 * @jsx React.DOM
 */
'use strict';

var StyleSheet = require('react-style');
var React = require('react');

class ButtonGroup {

  render() {
    return (
      <div styles={ButtonGroupStyles.normalStyle}>
        {this.props.children}
      </div>
    );
  }
}

var ButtonGroupStyles = StyleSheet.create({

  normalStyle: {
    display: 'inline'
  }

});

module.exports = React.createClass(ButtonGroup.prototype);
