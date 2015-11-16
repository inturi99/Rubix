/**
 * @jsx React.DOM
 */
'use strict';

require('normalize.css/normalize.css');

var StyleSheet   = require('react-style');
var React        = require('react');
var Icon         = require('react-fa');
var Button       = require('./Button');
var ButtonStyles = require('./ButtonStyles');
var ButtonGroup  = require('./ButtonGroup');

var TextAlignSwitcherStyles = StyleSheet.create`

  .childStyle {
    borderRadius: 0;
    margin: 0;
  }

  .firstChildStyle {
    borderTopLeftRadius: 3px;
    borderBottomLeftRadius: 3px;
  }

  .lastChildStyle {
    borderTopRightRadius: 3px;
    borderBottomRightRadius: 3px;
  }

`;

var TextAlignSwitcher = React.createClass({

  render() {
    var props = this.props;

    return (
      <ButtonGroup styles={props.styles}>
        <Button
          active={props.textAlign === 'left'}
          onClick={() => {props.onTextAlign('left')}}
          styles={[TextAlignSwitcherStyles.childStyle, TextAlignSwitcherStyles.firstChildStyle]}>
          <Icon name="align-left" /> Left
        </Button>
        <Button
          active={props.textAlign === 'center'}
          onClick={() => {props.onTextAlign('center')}}
          styles={[TextAlignSwitcherStyles.childStyle]}>
          <Icon name="align-center" /> Center
        </Button>
        <Button
          active={props.textAlign === 'right'}
          onClick={() => {props.onTextAlign('right')}}
          styles={[TextAlignSwitcherStyles.childStyle, TextAlignSwitcherStyles.lastChildStyle]}>
          <Icon name="align-right" /> Right
        </Button>
      </ButtonGroup>
    );
  }
});


var ApplicationStyles = StyleSheet.create`

  .normalStyle {
    backgroundColor: white;
    fontSize: 10pt;
    padding: 1em;
    margin: 10px;
  }

  .childStyle {
    marginRight: 0.5em
  }

  .lastChildStyle {
    marginRight: 0
  }

`;

var Application = React.createClass({

  getInitialState() {
    return {
      textAlign: 'left'
    };
  },

  render() {
    return (
      <div styles={ApplicationStyles.normalStyle}>
        <h1 styles={{textAlign: this.state.textAlign}}>Application</h1>
        <Button styles={[ButtonStyles.success]}>
          <Icon name="cog" /> OK
        </Button>
        <Button styles={[ButtonStyles.error, ApplicationStyles.childStyle]}>
          <Icon name="remove" /> Cancel
        </Button>
        <TextAlignSwitcher
          styles={ApplicationStyles.lastChild}
          onTextAlign={(textAlign) => this.setState({textAlign: textAlign})}
        />
      </div>
    );
  }

});

if (typeof window !== 'undefined') {
  React.render(<Application />, document.getElementById('app'));
}