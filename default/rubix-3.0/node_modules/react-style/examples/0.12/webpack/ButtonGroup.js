/**
 * @jsx React.DOM
 */
'use strict';

var StyleSheet = require('react-style');
var React = require('react');

var ButtonGroup = React.createClass({

  render() {
    return (
      <div styles={ButtonGroupStyles.normalStyle}>
        {this.props.children}
      </div>
    );
  }

});

var ButtonGroupStyles = StyleSheet.create({

  normalStyle: {
    display: 'inline'
  }

});

module.exports = ButtonGroup;
