import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import Doc from 'routes/docs/doc_container';
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

import dropdownbasic from '../snippets/dropdownbasic.txt';
import dropdownalign from '../snippets/dropdownalign.txt';

class Body extends React.Component {
  handleSelection(itemprops) {
    // access any property attached to MenuItem child component.
    // ex: itemprops.keyaction === 'another-action' if MenuItem
    // with "Another action" is clicked.
    var value = itemprops.children;
    alert(value);
    if(itemprops.keyaction === 'another-action')
      alert('You clicked another-action');
  }
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Dropdowns'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Toggleable, contextual menu for displaying lists of links. The "}<code>Dropdown</code>{" component contains the entire menu with a special "}<code>Button</code>{" subclass "}<code>DropdownButton</code>.{" Whatever property/attribute you can pass to "}<code>Button</code>{" component can also be passed to "}<code>DropdownButton</code>{". However "}<code>DropdownButton</code>{" has two special props: "}<code>container</code>{" and "}<code>menu</code>{". The "}<code>container</code>{" points to the current React class and "}<code>menu</code>{" points to the menu you would like to toggle. "}<code>Dropdown</code>{" component also contains a "}<code>Menu</code>{" component which is a container for all "}<code>MenuItem</code>s. <code>Caret</code>{" component adds a caret to the dropdown button."}
            </p>
            <p>
              {"As you can see it's much shorter than it's Bootstrap counterpart. We'll be covering individual parts (DropdownButton, Menu, MenuItem) later in the documentation."}
            </p>
            <Well>
              <Dropdown>
                <DropdownButton bsStyle='blue'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='blue' onItemSelect={this.handleSelection}>
                  <MenuItem active href='#'>Action</MenuItem>
                  <MenuItem keyaction='another-action' href='#'>Another action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </Dropdown>
            </Well>
            <div>
              <pre>
                <code className='language-javascript'>
                  {dropdownbasic}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Alignment</h4>
            <p>
              {"By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add "}<code>alignRight</code>{" to right align the dropdown menu."}
            </p>
            <Well className='text-right'>
              <Dropdown>
                <DropdownButton bsStyle='red'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='red' onItemSelect={this.handleSelection} alignRight>
                  <MenuItem active href='#'>Action</MenuItem>
                  <MenuItem keyaction='another-action' href='#'>Another action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </Dropdown>
            </Well>
            <div>
              <pre>
                <code className='language-javascript'>
                  {dropdownalign}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Headers</h4>
            <p>
              {"Add a header to label sections of actions in any dropdown menu."}
            </p>
            <Well>
              <Dropdown>
                <DropdownButton bsStyle='green'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='green'>
                  <MenuItem header>Dropdown header</MenuItem>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider/>
                  <MenuItem header>Dropdown header</MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </Dropdown>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Dropdown>\n"}
                  {"  <DropdownButton bsStyle='green'>\n"}
                  {"    <span>Dropdown </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='green'>\n"}
                  {"    <MenuItem header>Dropdown header</MenuItem>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider/>\n"}
                  {"    <MenuItem header>Dropdown header</MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</Dropdown>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Disabled menu item</h4>
            <p>
              {"Add prop "}<code>disabled</code>{" to a "}<code>{"<MenuItem>"}</code>{" in the dropdown to disable it."}
            </p>
            <Well>
              <Dropdown>
                <DropdownButton bsStyle='orange75'>
                  <span>Dropdown </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='orange75'>
                  <MenuItem href='#'>Regular link</MenuItem>
                  <MenuItem href='#' disabled>Disabled link</MenuItem>
                  <MenuItem href='#'>Another link</MenuItem>
                </Menu>
              </Dropdown>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Dropdown>\n"}
                  {"  <DropdownButton bsStyle='orange75'>\n"}
                  {"    <span>Dropdown </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='orange75'>\n"}
                  {"    <MenuItem href='#'>Regular link</MenuItem>\n"}
                  {"    <MenuItem href='#' disabled>Disabled link</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</Dropdown>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Single button dropdowns</h4>
            <p>
              {"Use a DropdownButton to toggle dropdowns."}
            </p>
            <Well>
              <ButtonGroup>
                <DropdownButton>
                  <span>Default </span><Caret/>
                </DropdownButton>
                <Menu>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton bsStyle='primary'>
                  <span>Primary </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='primary'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton bsStyle='success'>
                  <span>Success </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='success'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton bsStyle='info'>
                  <span>Info </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='info'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton bsStyle='warning'>
                  <span>Warning </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='warning'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <DropdownButton bsStyle='danger'>
                  <span>Danger </span><Caret/>
                </DropdownButton>
                <Menu bsStyle='danger'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton>\n"}
                  {"    <span>Default </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton bsStyle='primary'>\n"}
                  {"    <span>Primary </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='primary'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton bsStyle='success'>\n"}
                  {"    <span>Success </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='success'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton bsStyle='info'>\n"}
                  {"    <span>Info </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='info'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton bsStyle='warning'>\n"}
                  {"    <span>Warning </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='warning'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <DropdownButton bsStyle='danger'>\n"}
                  {"    <span>Danger </span><Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='danger'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Split button dropdowns</h4>
            <p>
              {"Similarly, create split button dropdowns with the same markup changes, only with a separate Button."}
            </p>
            <Well>
              <ButtonGroup>
                <Button>Default</Button>
                <DropdownButton>
                  <Caret/>
                </DropdownButton>
                <Menu>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='primary'>Primary</Button>
                <DropdownButton bsStyle='primary'>
                  <Caret/>
                </DropdownButton>
                <Menu bsStyle='primary'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='success'>Success</Button>
                <DropdownButton bsStyle='success'>
                  <Caret/>
                </DropdownButton>
                <Menu bsStyle='success'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='info'>Info</Button>
                <DropdownButton bsStyle='info'>
                  <Caret/>
                </DropdownButton>
                <Menu bsStyle='info'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='warning'>Warning</Button>
                <DropdownButton bsStyle='warning'>
                  <Caret/>
                </DropdownButton>
                <Menu bsStyle='warning'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button bsStyle='danger'>Danger</Button>
                <DropdownButton bsStyle='danger'>
                  <Caret/>
                </DropdownButton>
                <Menu bsStyle='danger'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup>\n"}
                  {"  <Button>Default</Button>\n"}
                  {"  <DropdownButton>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='primary'>Primary</Button>\n"}
                  {"  <DropdownButton bsStyle='primary'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='primary'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='success'>Success</Button>\n"}
                  {"  <DropdownButton bsStyle='success'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='success'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='info'>Info</Button>\n"}
                  {"  <DropdownButton bsStyle='info'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='info'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='warning'>Warning</Button>\n"}
                  {"  <DropdownButton bsStyle='warning'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='warning'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup>\n"}
                  {"  <Button bsStyle='danger'>Danger</Button>\n"}
                  {"  <DropdownButton bsStyle='danger'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='danger'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Dropup variation</h4>
            <p>
              {"Trigger dropup menus by adding dropup prop to a ButtonGroup/Dropdown component."}
            </p>
            <Well>
              <ButtonGroup dropup>
                <Button>Dropup </Button>
                <DropdownButton>
                  <Caret/>
                </DropdownButton>
                <Menu>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
              <ButtonGroup dropup>
                <Button bsStyle='primary'>Dropup </Button>
                <DropdownButton bsStyle='primary'>
                  <Caret/>
                </DropdownButton>
                <Menu bsStyle='primary'>
                  <MenuItem href='#'>Action</MenuItem>
                  <MenuItem href='#'>Another Action</MenuItem>
                  <MenuItem href='#'>Something else here</MenuItem>
                  <MenuItem divider></MenuItem>
                  <MenuItem href='#'>Separated link</MenuItem>
                </Menu>
              </ButtonGroup>{' '}
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<ButtonGroup dropup>\n"}
                  {"  <Button>Dropup </Button>\n"}
                  {"  <DropdownButton>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
                  {"<ButtonGroup dropup>\n"}
                  {"  <Button bsStyle='primary'>Dropup </Button>\n"}
                  {"  <DropdownButton bsStyle='primary'>\n"}
                  {"    <Caret/>\n"}
                  {"  </DropdownButton>\n"}
                  {"  <Menu bsStyle='primary'>\n"}
                  {"    <MenuItem href='#'>Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"    <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"    <MenuItem divider></MenuItem>\n"}
                  {"    <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"  </Menu>\n"}
                  {"</ButtonGroup>{' '}\n"}
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
