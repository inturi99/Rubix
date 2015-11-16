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
          <DocUnit name='Bootstrap: Input Groups'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Extend "}<code>Input</code>{" components by adding text or buttons before, after, or on both sides of any text-based input. Use "}<code>InputGroup</code>{" with an "}<code>InputGroupAddon</code>{" to prepend or append elements to a single "}<code>Input</code>.
            </p>
            <Well className='bg-white'>
              <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup><br/>
              <InputGroup>
                <Input type='text'/>
                <InputGroupAddon>.00</InputGroupAddon>
              </InputGroup><br/>
              <InputGroup>
                <InputGroupAddon>$</InputGroupAddon>
                <Input type='text'/>
                <InputGroupAddon>.00</InputGroupAddon>
              </InputGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<InputGroup>\n"}
                  {"  <InputGroupAddon>@</InputGroupAddon>\n"}
                  {"  <Input type='text' placeholder='Username'/>\n"}
                  {"</InputGroup><br/>\n"}
                  {"<InputGroup>\n"}
                  {"  <Input type='text'/>\n"}
                  {"  <InputGroupAddon>.00</InputGroupAddon>\n"}
                  {"</InputGroup><br/>\n"}
                  {"<InputGroup>\n"}
                  {"  <InputGroupAddon> $ </InputGroupAddon>\n"}
                  {"  <Input type='text'/>\n"}
                  {"  <InputGroupAddon>.00</InputGroupAddon>\n"}
                  {"</InputGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Sizing</h4>
            <p>
              {"Add the relative form sizing classes to the "}<code>InputGroup</code>{" itself and contents within will automatically resize—no need for repeating the form control size classes on each element."}
            </p>
            <Well className='bg-white'>
              <InputGroup lg>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup><br/>
              <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup><br/>
              <InputGroup sm>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<InputGroup lg>\n"}
                  {"  <InputGroupAddon>@</InputGroupAddon>\n"}
                  {"  <Input type='text' placeholder='Username'/>\n"}
                  {"</InputGroup><br/>\n"}
                  {"<InputGroup>\n"}
                  {"  <InputGroupAddon>@</InputGroupAddon>\n"}
                  {"  <Input type='text' placeholder='Username'/>\n"}
                  {"</InputGroup><br/>\n"}
                  {"<InputGroup sm>\n"}
                  {"  <InputGroupAddon>@</InputGroupAddon>\n"}
                  {"  <Input type='text' placeholder='Username'/>\n"}
                  {"</InputGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Checkboxes and Radio addons</h4>
            <p>
              {"Place any checkbox or radio option within an "}<code>InputGroupAddon</code>{" instead of text.."}
            </p>
            <Well className='bg-white'>
              <Grid>
                <Row>
                  <Col xs={6}>
                    <InputGroup>
                      <InputGroupAddon><Checkbox native/></InputGroupAddon>
                      <Input type='text' placeholder='Username'/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <InputGroup>
                      <InputGroupAddon><Radio native/></InputGroupAddon>
                      <Input type='text' placeholder='Username'/>
                    </InputGroup>
                  </Col>
                </Row>
              </Grid>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Grid>\n"}
                  {"  <Row>\n"}
                  {"    <Col xs={6}>\n"}
                  {"      <InputGroup>\n"}
                  {"        <InputGroupAddon><Checkbox native/></InputGroupAddon>\n"}
                  {"        <Input type='text' placeholder='Username'/>\n"}
                  {"      </InputGroup>\n"}
                  {"    </Col>\n"}
                  {"    <Col xs={6}>\n"}
                  {"      <InputGroup>\n"}
                  {"        <InputGroupAddon><Radio native/></InputGroupAddon>\n"}
                  {"        <Input type='text' placeholder='Username'/>\n"}
                  {"      </InputGroup>\n"}
                  {"    </Col>\n"}
                  {"  </Row>\n"}
                  {"</Grid>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Button addons</h4>
            <Well className='bg-white'>
              <Grid>
                <Row>
                  <Col xs={6}>
                    <InputGroup>
                      <InputGroupButton><Button onlyOnHover>Go!</Button></InputGroupButton>
                      <Input type='text' placeholder='Username'/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <InputGroup>
                      <Input type='text' placeholder='Username'/>
                      <InputGroupButton><Button onlyOnHover>Go!</Button></InputGroupButton>
                    </InputGroup>
                  </Col>
                </Row>
              </Grid>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Grid>\n"}
                  {"  <Row>\n"}
                  {"    <Col xs={6}>\n"}
                  {"      <InputGroup>\n"}
                  {"        <InputGroupButton><Button onlyOnHover>Go!</Button></InputGroupButton>\n"}
                  {"        <Input type='text' placeholder='Username'/>\n"}
                  {"      </InputGroup>\n"}
                  {"    </Col>\n"}
                  {"    <Col xs={6}>\n"}
                  {"      <InputGroup>\n"}
                  {"        <Input type='text' placeholder='Username'/>\n"}
                  {"        <InputGroupButton><Button onlyOnHover>Go!</Button></InputGroupButton>\n"}
                  {"      </InputGroup>\n"}
                  {"    </Col>\n"}
                  {"  </Row>\n"}
                  {"</Grid>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Button with dropdowns</h4>
            <Well className='bg-white'>
              <Grid>
                <Row>
                  <Col xs={6}>
                    <InputGroup>
                      <InputGroupButton dropdown>
                        <DropdownButton onlyOnHover>
                          <span>Action </span><Caret/>
                        </DropdownButton>
                        <Menu>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </InputGroupButton>
                      <Input type='text' placeholder='Username'/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <InputGroup>
                      <Input type='text' placeholder='Username'/>
                      <InputGroupButton dropdown>
                        <DropdownButton onlyOnHover>
                          <span>Action </span><Caret/>
                        </DropdownButton>
                        <Menu alignRight>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </InputGroupButton>
                    </InputGroup>
                  </Col>
                </Row>
              </Grid>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Grid>\n"}
                  {"  <Row>\n"}
                  {"    <Col xs={6}>\n"}
                  {"      <InputGroup>\n"}
                  {"        <InputGroupButton dropdown>\n"}
                  {"          <DropdownButton onlyOnHover>\n"}
                  {"            <span>Action </span><Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </InputGroupButton>\n"}
                  {"        <Input type='text' placeholder='Username'/>\n"}
                  {"      </InputGroup>\n"}
                  {"    </Col>\n"}
                  {"    <Col xs={6}>\n"}
                  {"      <InputGroup>\n"}
                  {"        <Input type='text' placeholder='Username'/>\n"}
                  {"        <InputGroupButton dropdown>\n"}
                  {"          <DropdownButton onlyOnHover>\n"}
                  {"            <span>Action </span><Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu alignRight>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </InputGroupButton>\n"}
                  {"      </InputGroup>\n"}
                  {"    </Col>\n"}
                  {"  </Row>\n"}
                  {"</Grid>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Segmented buttons</h4>
            <Well className='bg-white'>
              <Grid>
                <Row>
                  <Col xs={6}>
                    <InputGroup>
                      <InputGroupButton dropdown>
                        <Button onlyOnHover>Action </Button>
                        <DropdownButton onlyOnHover>
                          <Caret/>
                        </DropdownButton>
                        <Menu>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </InputGroupButton>
                      <Input type='text' placeholder='Username'/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <InputGroup>
                      <Input type='text' placeholder='Username'/>
                      <InputGroupButton dropdown>
                        <Button onlyOnHover>Action </Button>
                        <DropdownButton onlyOnHover>
                          <Caret/>
                        </DropdownButton>
                        <Menu alignRight>
                          <MenuItem href='#'>Action</MenuItem>
                          <MenuItem href='#'>Another Action</MenuItem>
                          <MenuItem href='#'>Something else here</MenuItem>
                          <MenuItem divider></MenuItem>
                          <MenuItem href='#'>Separated link</MenuItem>
                        </Menu>
                      </InputGroupButton>
                    </InputGroup>
                  </Col>
                </Row>
              </Grid>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Grid>\n"}
                  {"  <Row>\n"}
                  {"    <Col xs={6}>\n"}
                  {"      <InputGroup>\n"}
                  {"        <InputGroupButton dropdown>\n"}
                  {"          <Button onlyOnHover>Action </Button>\n"}
                  {"          <DropdownButton onlyOnHover>\n"}
                  {"            <Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </InputGroupButton>\n"}
                  {"        <Input type='text' placeholder='Username'/>\n"}
                  {"      </InputGroup>\n"}
                  {"    </Col>\n"}
                  {"    <Col xs={6}>\n"}
                  {"      <InputGroup>\n"}
                  {"        <Input type='text' placeholder='Username'/>\n"}
                  {"        <InputGroupButton dropdown>\n"}
                  {"          <Button onlyOnHover>Action </Button>\n"}
                  {"          <DropdownButton onlyOnHover>\n"}
                  {"            <Caret/>\n"}
                  {"          </DropdownButton>\n"}
                  {"          <Menu alignRight>\n"}
                  {"            <MenuItem href='#'>Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Another Action</MenuItem>\n"}
                  {"            <MenuItem href='#'>Something else here</MenuItem>\n"}
                  {"            <MenuItem divider></MenuItem>\n"}
                  {"            <MenuItem href='#'>Separated link</MenuItem>\n"}
                  {"          </Menu>\n"}
                  {"        </InputGroupButton>\n"}
                  {"      </InputGroup>\n"}
                  {"    </Col>\n"}
                  {"  </Row>\n"}
                  {"</Grid>\n"}
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
