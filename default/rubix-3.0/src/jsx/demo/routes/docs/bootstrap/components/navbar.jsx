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
          <DocUnit name='Bootstrap: NavBar'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Navbars are responsive meta components that serve as navigation headers for your application or site."}
            </p>
            <Well>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavToggle target='navcontainer1'>Toggle navigation</NavToggle>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent id='navcontainer1' collapse>
                    <Nav>
                      <NavItem active href='#'>Link 1</NavItem>
                      <NavItem href='#'>Link 2</NavItem>
                      <NavItem dropdown>
                        <DropdownButton nav>
                          <span>Dropdown </span><Caret/>
                        </DropdownButton>
                        <Menu>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </NavItem>
                    </Nav>
                    <Nav right>
                      <NavItem href='#'>Link 3</NavItem>
                      <NavItem dropdown>
                        <DropdownButton nav>
                          <span>Dropdown </span><Caret/>
                        </DropdownButton>
                        <Menu>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </NavItem>
                    </Nav>
                  </NavContent>
                </Container>
              </NavBar>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<NavBar>\n"}
                  {"  <Container fluid>\n"}
                  {"    <NavHeader>\n"}
                  {"      <NavToggle target='navcontainer1'>Toggle navigation</NavToggle>\n"}
                  {"      <NavBrand>Brand</NavBrand>\n"}
                  {"    </NavHeader>\n"}
                  {"    <NavContent id='navcontainer1' collapse>\n"}
                  {"      <Nav>\n"}
                  {"        <NavItem active href='#'>Link 1</NavItem>\n"}
                  {"        <NavItem href='#'>CSS</NavItem>\n"}
                  {"        <NavItem dropdown>\n"}
                  {"          <DropdownButton nav>\n"}
                  {"            <span>Dropdown </span><Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </NavItem>\n"}
                  {"      </Nav>\n"}
                  {"      <Nav right>\n"}
                  {"        <NavItem href='#'>Link 3</NavItem>\n"}
                  {"        <NavItem dropdown>\n"}
                  {"          <DropdownButton nav>\n"}
                  {"            <span>Dropdown </span><Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </NavItem>\n"}
                  {"      </Nav>\n"}
                  {"    </NavContent>\n"}
                  {"  </Container>\n"}
                  {"</NavBar>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Forms</h4>
            <p>
              {"Place form content within NavForm for proper vertical alignment and collapsed behavior in narrow viewports."}
            </p>
            <Well>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavToggle target='navcontainer'>Toggle navigation</NavToggle>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent id='navcontainer' collapse>
                    <NavForm left role='search'>
                      <FormGroup>
                        <Input placeholder='Search' />
                      </FormGroup>{' '}
                      <Button outlined onlyOnHover bsStyle='darkgreen45'>Submit</Button>
                    </NavForm>
                    <Nav right>
                      <NavItem href='#'>Link 3</NavItem>
                      <NavItem dropdown>
                        <DropdownButton nav>
                          <span>Dropdown </span><Caret/>
                        </DropdownButton>
                        <Menu>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </NavItem>
                    </Nav>
                  </NavContent>
                </Container>
              </NavBar>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<NavBar>\n"}
                  {"  <Container fluid>\n"}
                  {"    <NavHeader>\n"}
                  {"      <NavToggle target='navcontainer'>Toggle navigation</NavToggle>\n"}
                  {"      <NavBrand>Brand</NavBrand>\n"}
                  {"    </NavHeader>\n"}
                  {"    <NavContent collapse>\n"}
                  {"      <NavForm left role='search'>\n"}
                  {"        <FormGroup>\n"}
                  {"          <Input placeholder='Search' />\n"}
                  {"        </FormGroup>{' '}\n"}
                  {"        <Button outlined onlyOnHover bsStyle='darkgreen45'>Submit</Button>\n"}
                  {"      </NavForm>\n"}
                  {"      <Nav right>\n"}
                  {"        <NavItem href='#'>Link 3</NavItem>\n"}
                  {"        <NavItem dropdown>\n"}
                  {"          <DropdownButton nav>\n"}
                  {"            <span>Dropdown </span><Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </NavItem>\n"}
                  {"      </Nav>\n"}
                  {"    </NavContent>\n"}
                  {"  </Container>\n"}
                  {"</NavBar>\n"}
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
