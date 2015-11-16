import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import Doc from 'routes/docs/doc_container';
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

class Body extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Button Groups'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Group a series of Buttons together on a single line with the ButtonGroup component."}
            </p>
            <Well>
              <ButtonGroup>
                <Button bsStyle='blue'>Left</Button>
                <Button bsStyle='blue'>Middle</Button>
                <Button bsStyle='blue'>Right</Button>
              </ButtonGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='blue'>Left</Button>\n"}
                  {"  <Button bsStyle='blue'>Middle</Button>\n"}
                  {"  <Button bsStyle='blue'>Right</Button>\n"}
                  {"</ButtonGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Button Toolbar</h4>
            <p>
              {"Combine sets of ButtonGroup into a ButtonToolbar for more complex components."}
            </p>
            <Well>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button bsStyle='blue'>1</Button>
                  <Button bsStyle='blue'>2</Button>
                  <Button bsStyle='blue'>3</Button>
                  <Button bsStyle='blue'>4</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button bsStyle='green'>5</Button>
                  <Button bsStyle='green'>6</Button>
                  <Button bsStyle='green'>7</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button bsStyle='red'>8</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonToolbar>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <Button bsStyle='blue'>1</Button>\n"}
                  {"    <Button bsStyle='blue'>2</Button>\n"}
                  {"    <Button bsStyle='blue'>3</Button>\n"}
                  {"    <Button bsStyle='blue'>4</Button>\n"}
                  {"  </ButtonGroup>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <Button bsStyle='green'>5</Button>\n"}
                  {"    <Button bsStyle='green'>6</Button>\n"}
                  {"    <Button bsStyle='green'>7</Button>\n"}
                  {"  </ButtonGroup>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <Button bsStyle='red'>8</Button>\n"}
                  {"  </ButtonGroup>\n"}
                  {"</ButtonToolbar>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Sizing</h4>
            <p>
              {"Instead of applying button sizing classes to every button in a group, just add lg/sm/xs to the ButtonGroup component itself."}
            </p>
            <Well className='text-center'>
              <div>
                <ButtonGroup lg>
                  <Button bsStyle='blue'>1</Button>
                  <Button bsStyle='blue'>2</Button>
                  <Button bsStyle='blue'>3</Button>
                  <Button bsStyle='blue'>4</Button>
                </ButtonGroup>
              </div><br/>
              <div>
                <ButtonGroup>
                  <Button bsStyle='green'>1</Button>
                  <Button bsStyle='green'>2</Button>
                  <Button bsStyle='green'>3</Button>
                  <Button bsStyle='green'>4</Button>
                </ButtonGroup>
              </div><br/>
              <div>
                <ButtonGroup sm>
                  <Button bsStyle='red'>1</Button>
                  <Button bsStyle='red'>2</Button>
                  <Button bsStyle='red'>3</Button>
                </ButtonGroup>
              </div><br/>
              <div>
                <ButtonGroup xs>
                  <Button bsStyle='yellow'>1</Button>
                  <Button bsStyle='yellow'>2</Button>
                </ButtonGroup>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<div>\n"}
                  {"  <ButtonGroup lg>\n"}
                  {"    <Button bsStyle='blue'>1</Button>\n"}
                  {"    <Button bsStyle='blue'>2</Button>\n"}
                  {"    <Button bsStyle='blue'>3</Button>\n"}
                  {"    <Button bsStyle='blue'>4</Button>\n"}
                  {"  </ButtonGroup>\n"}
                  {"</div><br/>\n"}
                  {"<div>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <Button bsStyle='green'>1</Button>\n"}
                  {"    <Button bsStyle='green'>2</Button>\n"}
                  {"    <Button bsStyle='green'>3</Button>\n"}
                  {"    <Button bsStyle='green'>4</Button>\n"}
                  {"  </ButtonGroup>\n"}
                  {"</div><br/>\n"}
                  {"<div>\n"}
                  {"  <ButtonGroup sm>\n"}
                  {"    <Button bsStyle='red'>1</Button>\n"}
                  {"    <Button bsStyle='red'>2</Button>\n"}
                  {"    <Button bsStyle='red'>3</Button>\n"}
                  {"  </ButtonGroup>\n"}
                  {"</div><br/>\n"}
                  {"<div>\n"}
                  {"  <ButtonGroup xs>\n"}
                  {"    <Button bsStyle='yellow'>1</Button>\n"}
                  {"    <Button bsStyle='yellow'>2</Button>\n"}
                  {"  </ButtonGroup>\n"}
                  {"</div>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Nesting</h4>
            <p>
              {"Place a ButtonGroup within another ButtonGroup when you want Dropdown Menus mixed with a series of Button components."}
            </p>
            <Well className='text-center'>
              <ButtonGroup>
                <Button bsStyle='darkcyan'>1</Button>
                <Button bsStyle='darkcyan'>2</Button>
                <ButtonGroup>
                  <DropdownButton bsStyle='darkcyan'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu bsStyle='darkcyan'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
              </ButtonGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='darkcyan'>1</Button>\n"}
                  {"  <Button bsStyle='darkcyan'>2</Button>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <DropdownButton>\n"}
                  {"      <span>Dropdown </span><Caret/>\n"}
                  {"    </DropdownButton>\n"}
                  {"    <Menu>\n"}
                  {"      <MenuItem href='#'>Regular link</MenuItem>\n"}
                  {"      <MenuItem href='#' disabled>Disabled link</MenuItem>\n"}
                  {"      <MenuItem href='#'>Another link</MenuItem>\n"}
                  {"    </Menu>\n"}
                  {"  </ButtonGroup>\n"}
                  {"</ButtonGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Vertical variation</h4>
            <p>
              {"Make a set of buttons appear vertically stacked rather than horizontally."}
            </p>
            <Well className='text-center'>
              <ButtonGroup vertical>
                <Button bsStyle='pink'>Button</Button>
                <Button bsStyle='pink'>Button</Button>
                <ButtonGroup>
                  <DropdownButton bsStyle='pink'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu bsStyle='pink'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
                <Button bsStyle='pink'>Button</Button>
                <Button bsStyle='pink'>Button</Button>
                <ButtonGroup>
                  <DropdownButton bsStyle='pink'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu bsStyle='pink'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
                <ButtonGroup>
                  <DropdownButton bsStyle='pink'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu bsStyle='pink'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
                <ButtonGroup>
                  <DropdownButton bsStyle='pink'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu bsStyle='pink'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
              </ButtonGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup vertical>\n"}
                  {"  <Button bsStyle='pink'>Button</Button>\n"}
                  {"  <Button bsStyle='pink'>Button</Button>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <DropdownButton bsStyle='pink'>\n"}
                  {"      <span>Dropdown </span><Caret/>\n"}
                  {"    </DropdownButton>\n"}
                  {"    <Menu bsStyle='pink'>\n"}
                  {"      <MenuItem href='#'>Regular link</MenuItem>\n"}
                  {"      <MenuItem href='#' disabled>Disabled link</MenuItem>\n"}
                  {"      <MenuItem href='#'>Another link</MenuItem>\n"}
                  {"    </Menu>\n"}
                  {"  </ButtonGroup>\n"}
                  {"  <Button bsStyle='pink'>Button</Button>\n"}
                  {"  <Button bsStyle='pink'>Button</Button>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <DropdownButton bsStyle='pink'>\n"}
                  {"      <span>Dropdown </span><Caret/>\n"}
                  {"    </DropdownButton>\n"}
                  {"    <Menu bsStyle='pink'>\n"}
                  {"      <MenuItem href='#'>Regular link</MenuItem>\n"}
                  {"      <MenuItem href='#' disabled>Disabled link</MenuItem>\n"}
                  {"      <MenuItem href='#'>Another link</MenuItem>\n"}
                  {"    </Menu>\n"}
                  {"  </ButtonGroup>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <DropdownButton bsStyle='pink'>\n"}
                  {"      <span>Dropdown </span><Caret/>\n"}
                  {"    </DropdownButton>\n"}
                  {"    <Menu bsStyle='pink'>\n"}
                  {"      <MenuItem href='#'>Regular link</MenuItem>\n"}
                  {"      <MenuItem href='#' disabled>Disabled link</MenuItem>\n"}
                  {"      <MenuItem href='#'>Another link</MenuItem>\n"}
                  {"    </Menu>\n"}
                  {"  </ButtonGroup>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <DropdownButton bsStyle='pink'>\n"}
                  {"      <span>Dropdown </span><Caret/>\n"}
                  {"    </DropdownButton>\n"}
                  {"    <Menu bsStyle='pink'>\n"}
                  {"      <MenuItem href='#'>Regular link</MenuItem>\n"}
                  {"      <MenuItem href='#' disabled>Disabled link</MenuItem>\n"}
                  {"      <MenuItem href='#'>Another link</MenuItem>\n"}
                  {"    </Menu>\n"}
                  {"  </ButtonGroup>\n"}
                  {"</ButtonGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Justified button groups</h4>
            <p>
              {"Make a set of buttons appear vertically stacked rather than horizontally."}
            </p>
            <Well className='text-center'>
              <ButtonGroup justified>
                <Button bsStyle='purple' componentClass='a'>Left</Button>
                <Button bsStyle='purple' componentClass='a'>Middle</Button>
                <ButtonGroup>
                  <DropdownButton bsStyle='purple'>
                    <span>Dropdown </span><Caret/>
                  </DropdownButton>
                  <Menu alignRight bsStyle='purple'>
                    <MenuItem href='#'>Regular link</MenuItem>
                    <MenuItem href='#' disabled>Disabled link</MenuItem>
                    <MenuItem href='#'>Another link</MenuItem>
                  </Menu>
                </ButtonGroup>
              </ButtonGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup justified>\n"}
                  {"  <Button bsStyle='purple' componentClass='a'>Left</Button>\n"}
                  {"  <Button bsStyle='purple' componentClass='a'>Middle</Button>\n"}
                  {"  <ButtonGroup>\n"}
                  {"    <DropdownButton bsStyle='purple'>\n"}
                  {"      <span>Dropdown </span><Caret/>\n"}
                  {"    </DropdownButton>\n"}
                  {"    <Menu alignRight bsStyle='purple'>\n"}
                  {"      <MenuItem href='#'>Regular link</MenuItem>\n"}
                  {"      <MenuItem href='#' disabled>Disabled link</MenuItem>\n"}
                  {"      <MenuItem href='#'>Another link</MenuItem>\n"}
                  {"    </Menu>\n"}
                  {"  </ButtonGroup>\n"}
                  {"</ButtonGroup>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
        </DocContainer>
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
