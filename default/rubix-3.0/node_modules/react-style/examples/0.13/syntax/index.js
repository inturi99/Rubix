/**
 * @jsx React.DOM
 */
'use strict';

require('normalize.css/normalize.css');

var StyleSheet   = require('react-style');
var React        = require('react');
var Button       = require('./Button');
var ButtonStyles = require('./ButtonStyles');
var ButtonGroup  = require('./ButtonGroup');

var TextAlignSwitcherStyles = StyleSheet.create`

  .childStyle {
    border-radius: 0;
    margin: 0;
  }

  .firstChildStyle {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .lastChildStyle {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

`;

class TextAlignSwitcher extends React.Component {

  render() {
    var props = this.props;

    return (
      <ButtonGroup styles={props.styles}>
        <Button
          active={props.textAlign === 'left'}
          onClick={() => {props.onTextAlign('left')}}
          styles={[TextAlignSwitcherStyles.childStyle, TextAlignSwitcherStyles.firstChildStyle]}>
          Left
        </Button>
        <Button
          active={props.textAlign === 'center'}
          onClick={() => {props.onTextAlign('center')}}
          styles={[TextAlignSwitcherStyles.childStyle]}>
          Center
        </Button>
        <Button
          active={props.textAlign === 'right'}
          onClick={() => {props.onTextAlign('right')}}
          styles={[TextAlignSwitcherStyles.childStyle, TextAlignSwitcherStyles.lastChildStyle]}>
          Right
        </Button>
      </ButtonGroup>
    );
  }

}

var ApplicationStyles = StyleSheet.create`

  .normalStyle {
    background-color: white;
    font-size: 10pt;
    padding: 1em;
    margin: 10px;
  }

  .childStyle {
    margin-right: 0.5em
  }

  .lastChildStyle {
    margin-right: 0
  }

  @media screen and (min-width: 800px) {

    .normalStyle {
      background-color: purple;
    }

    .childStyle {
      margin-left: 50
    }

  }

`;

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textAlign: 'left'
    };
  }

  render() {
    return (
      <div styles={ApplicationStyles.normalStyle}>
        <h1 styles={{textAlign: this.state.textAlign}}>Application</h1>
        <Button styles={[ButtonStyles.success]}>
          OK
        </Button>
        <Button styles={[ButtonStyles.error, ApplicationStyles.childStyle]}>
          Cancel
        </Button>
        <TextAlignSwitcher
          styles={ApplicationStyles.lastChild}
          onTextAlign={(textAlign) => this.setState({textAlign: textAlign})}
        />
      </div>
    );
  }

}

if (typeof window !== 'undefined') {
  React.render(<Application />, document.getElementById('app'));
}
