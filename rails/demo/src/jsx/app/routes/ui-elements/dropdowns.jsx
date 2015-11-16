import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import colors from 'routes/ui-elements/colors';

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <PanelContainer noOverflow controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Dropdowns and Dropups</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <Dropdown>
                            <DropdownButton bsStyle='green'>
                              <span>Basic </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                          <br/>
                          <Dropdown>
                            <DropdownButton outlined bsStyle='lightblue'>
                              <span>With Headers </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightblue'>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <Dropdown>
                            <DropdownButton outlined bsStyle='green'>
                              <span>Outlined </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                          <br/>
                          <Dropdown>
                            <DropdownButton outlined bsStyle='orange'>
                              <span>Disabled </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                        </Col>
                      </Row>
                      <hr/>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton bsStyle='green'>
                              <span>Basic </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined bsStyle='lightblue'>
                              <span>With Headers </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightblue'>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined bsStyle='green'>
                              <span>Outlined </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined bsStyle='orange'>
                              <span>Disabled </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-darkgreen45 fg-white' containerClasses='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Dropdowns and Dropups (inverse)</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <Dropdown>
                            <DropdownButton outlined inverse bsStyle='green'>
                              <span>Basic </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                          <br/>
                          <Dropdown>
                            <DropdownButton outlined inverse bsStyle='lightblue'>
                              <span>With Headers </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightblue'>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <Dropdown>
                            <DropdownButton outlined inverse bsStyle='green'>
                              <span>Outlined </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                          <br/>
                          <Dropdown>
                            <DropdownButton outlined inverse bsStyle='orange'>
                              <span>Disabled </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </Dropdown>
                        </Col>
                      </Row>
                      <hr className='border-lightgreen'/>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined inverse bsStyle='green'>
                              <span>Basic </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined inverse bsStyle='lightblue'>
                              <span>With Headers </span><Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightblue'>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined inverse bsStyle='green'>
                              <span>Outlined </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <DropdownButton outlined inverse bsStyle='orange'>
                              <span>Disabled </span><Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer noOverflow controlStyles='bg-pinkishred fg-white'>
                <Panel>
                  <PanelHeader className='bg-pinkishred fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Split Button Dropdowns and Dropups</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup>
                            <Button bsStyle='lightred'>Basic </Button>
                            <DropdownButton bsStyle='lightred'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightred'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup>
                            <Button outlined bsStyle='lightblue'>With Headers </Button>
                            <DropdownButton outlined bsStyle='lightblue'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightblue'>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup>
                            <Button outlined bsStyle='green'>Outlined </Button>
                            <DropdownButton outlined bsStyle='green'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup>
                            <Button outlined bsStyle='orange'>Disabled </Button>
                            <DropdownButton outlined bsStyle='orange'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                        </Col>
                      </Row>
                      <hr/>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup dropup>
                            <Button bsStyle='lightred'>Basic </Button>
                            <DropdownButton bsStyle='lightred'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightred'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined bsStyle='lightblue'>With Headers </Button>
                            <DropdownButton outlined bsStyle='lightblue'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightblue'>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined bsStyle='green'>Outlined </Button>
                            <DropdownButton outlined bsStyle='green'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight ref='split-menu8' bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined bsStyle='orange'>Disabled </Button>
                            <DropdownButton outlined bsStyle='orange'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-pinkishred fg-white' containerClasses='bg-pinkishred fg-white'>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Split Button Dropdowns and Dropups (inverse)</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup>
                            <Button outlined inverse bsStyle='pink'>Basic </Button>
                            <DropdownButton outlined inverse bsStyle='pink'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='pink'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup>
                            <Button outlined inverse bsStyle='lightblue'>With Headers </Button>
                            <DropdownButton outlined inverse bsStyle='lightblue'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightblue'>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropdown header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup>
                            <Button outlined inverse bsStyle='green'>Outlined </Button>
                            <DropdownButton outlined inverse bsStyle='green'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup>
                            <Button outlined inverse bsStyle='orange'>Disabled </Button>
                            <DropdownButton outlined inverse bsStyle='orange'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                        </Col>
                      </Row>
                      <hr className='border-lightred'/>
                      <Row>
                        <Col xs={6}>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined inverse bsStyle='pink'>Basic </Button>
                            <DropdownButton outlined inverse bsStyle='pink'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='pink'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined inverse bsStyle='lightblue'>With Headers </Button>
                            <DropdownButton outlined inverse bsStyle='lightblue'>
                              <Caret/>
                            </DropdownButton>
                            <Menu bsStyle='lightblue'>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem header>Dropup Header</MenuItem>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined inverse bsStyle='green'>Outlined </Button>
                            <DropdownButton outlined inverse bsStyle='green'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='green'>
                              <MenuItem active href='#'>Action</MenuItem>
                              <MenuItem href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                          <div>
                          <ButtonGroup dropup>
                            <Button outlined inverse bsStyle='orange'>Disabled </Button>
                            <DropdownButton outlined inverse bsStyle='orange'>
                              <Caret/>
                            </DropdownButton>
                            <Menu alignRight bsStyle='orange'>
                              <MenuItem disabled href='#'>Disabled</MenuItem>
                              <MenuItem disabled href='#'>Another action</MenuItem>
                              <MenuItem href='#'>Something else here</MenuItem>
                              <MenuItem divider/>
                              <MenuItem href='#'>Separated link</MenuItem>
                            </Menu>
                          </ButtonGroup>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
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
