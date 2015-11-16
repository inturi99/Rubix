import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import { IonTabContainer,
         IonTabHead,
         IonTabBody,
         IonTab,
         IonTabItem } from 'global/jsx/ion';
import LoremIpsum from 'global/jsx/loremipsum';

import colors from 'routes/ui-elements/colors';

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer controlStyles='bg-lightred fg-white'>
                <PanelHeader className='bg-lightred fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Accordian</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody style={{margin: 12.5, marginTop: 0}}>
                  <Accordian>
                    <AccordianPane active>
                      <AccordianTitle>Collapsible Item 1 (active)</AccordianTitle>
                      <AccordianContent>
                        <LoremIpsum query='5s' />
                      </AccordianContent>
                    </AccordianPane>
                    <AccordianPane>
                      <AccordianTitle>Collapsible Item 2</AccordianTitle>
                      <AccordianContent>
                        <LoremIpsum query='5s' />
                      </AccordianContent>
                    </AccordianPane>
                    <AccordianPane>
                      <AccordianTitle>Collapsible Item 3</AccordianTitle>
                      <AccordianContent>
                        <LoremIpsum query='5s' />
                      </AccordianContent>
                    </AccordianPane>
                  </Accordian>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer controlStyles='bg-brown50 fg-white'>
                <PanelHeader className='bg-brown50 fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Ion Tabs</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody style={{margin: 12.5, marginTop: 0}}>
                  <IonTabContainer id='tabs_1' ref='ion_tab'>
                    <IonTabHead>
                      <IonTab><span>Tab 1 name </span><Icon glyph='icon-fontello-cog'/></IonTab>
                      <IonTab>Tab 2 name</IonTab>
                      <IonTab>Tab 3 name</IonTab>
                    </IonTabHead>
                    <IonTabBody>
                      <IonTabItem><LoremIpsum query='5s'/></IonTabItem>
                      <IonTabItem><LoremIpsum query='5s'/></IonTabItem>
                      <IonTabItem><LoremIpsum query='5s'/></IonTabItem>
                    </IonTabBody>
                  </IonTabContainer>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <PanelContainer controlStyles='bg-lightgreen fg-white'>
                <PanelHeader className='bg-lightgreen fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Tabs: Basic</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <TabContainer id='tab-1'>
                    <TabList bsStyle='green'>
                      <Tab active>Home</Tab>
                      <Tab>Profile</Tab>
                      <TabDropdown title='Dropdown' menu-props={{bsStyle: 'green'}}>
                        <Tab>
                          @fat
                        </Tab>
                        <Tab>
                          @mdo
                        </Tab>
                      </TabDropdown>
                    </TabList>
                  </TabContainer>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent tabContainerID='tab-1'>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
              <PanelContainer controlStyles='bg-lightpurple fg-white'>
                <PanelHeader className='bg-lightpurple fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Tabs: Inline</h3>
                      </Col>
                    </Row>
                  </Grid>
                  <TabList tabContainerID='tab-2' bsStyle='purple'>
                    <Tab active>Home</Tab>
                    <Tab>Profile</Tab>
                    <TabDropdown title='Dropdown' menu-props={{bsStyle: 'purple'}}>
                      <Tab>
                        @fat
                      </Tab>
                      <Tab>
                        @mdo
                      </Tab>
                    </TabDropdown>
                  </TabList>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent tabContainerID='tab-2'>
                          <TabPane active>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
              <PanelContainer controlStyles='bg-lightred fg-white'>
                <PanelHeader className='bg-lightred fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Tabs: Inline Justified</h3>
                        <TabContainer id='tab-3'>
                          <TabList justified bsStyle='red'>
                            <Tab active>Home</Tab>
                            <Tab>Profile</Tab>
                            <TabDropdown title='Dropdown' menu-props={{bsStyle: 'red'}}>
                              <Tab>
                                @fat
                              </Tab>
                              <Tab>
                                @mdo
                              </Tab>
                            </TabDropdown>
                          </TabList>
                        </TabContainer>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent tabContainerID='tab-3'>
                          <TabPane active>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer controlStyles='bg-orange fg-white'>
                <PanelHeader className='bg-orange fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Pills: Basic</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <TabContainer id='tab-4'>
                    <TabList pills bsStyle='orange'>
                      <Tab active>Home</Tab>
                      <Tab>Profile</Tab>
                      <TabDropdown title='Dropdown' menu-props={{bsStyle: 'orange'}}>
                        <Tab>
                          @fat
                        </Tab>
                        <Tab>
                          @mdo
                        </Tab>
                      </TabDropdown>
                    </TabList>
                  </TabContainer>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent tabContainerID='tab-4'>
                          <TabPane active>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-lightblue fg-white'>
                <PanelHeader className='bg-lightblue fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Pills: Stacked</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody style={{padding: '12.5px 25px 25px 25px'}}>
                  <Table className='tablist' style={{margin: 0}}>
                    <tbody>
                      <tr>
                        <td style={{width: 175, borderTop: 'none', verticalAlign: 'top'}}>
                          <TabContainer id='tab-5'>
                            <TabList pills stacked bsStyle='lightblue'>
                              <Tab active>Home</Tab>
                              <Tab>Profile</Tab>
                              <TabDropdown title='Dropdown' menu-props={{bsStyle: 'lightblue'}}>
                                <Tab>
                                  @fat
                                </Tab>
                                <Tab>
                                  @mdo
                                </Tab>
                              </TabDropdown>
                            </TabList>
                          </TabContainer>
                        </td>
                        <td style={{borderTop: 'none', verticalAlign: 'top'}}>
                          <TabContent tabContainerID='tab-5'>
                            <TabPane active>
                              <p><LoremIpsum query='2s' /></p>
                              <p><LoremIpsum query='2s' /></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s' /></p>
                              <p><LoremIpsum query='2s' /></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s' /></p>
                              <p><LoremIpsum query='2s' /></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s' /></p>
                              <p><LoremIpsum query='2s' /></p>
                            </TabPane>
                          </TabContent>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </PanelBody>
              </PanelContainer>
              <PanelContainer controlStyles='bg-lightpink fg-white'>
                <PanelHeader className='bg-lightpink fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Pills: Justified</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <TabContainer id='tab-6'>
                          <TabList pills justified bsStyle='lightpink'>
                            <Tab active>Home</Tab>
                            <Tab>Profile</Tab>
                            <TabDropdown title='Dropdown' menu-props={{bsStyle: 'lightpink'}}>
                              <Tab>
                                @fat
                              </Tab>
                              <Tab>
                                @mdo
                              </Tab>
                            </TabDropdown>
                          </TabList>
                        </TabContainer>
                      </Col>
                    </Row>
                  </Grid>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent tabContainerID='tab-6'>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>NavBars</h3>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavToggle target='navcontainer1'>Toggle navigation</NavToggle>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent id='navcontainer1' collapse>
                    <Nav>
                      <NavItem active href='#'>Link 1</NavItem>
                      <NavItem href='#'>CSS</NavItem>
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
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavToggle target='navcontainer2'>Toggle navigation</NavToggle>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent id='navcontainer2' collapse>
                    <NavText>Signed in as Anna Sanchez</NavText>
                  </NavContent>
                </Container>
              </NavBar>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar>
                <Container fluid>
                  <NavHeader>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent collapse>
                    <NavText right>
                      <span>Signed in as </span>
                      <NavLink href='#'>
                        Anna Sanchez
                      </NavLink>
                    </NavText>
                  </NavContent>
                </Container>
              </NavBar>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <NavBar inverse>
                <Container fluid>
                  <NavHeader>
                    <NavBrand>Brand</NavBrand>
                  </NavHeader>
                  <NavContent collapse>
                    <Nav>
                      <NavItem href='#' active>Home</NavItem>
                      <NavItem right href='#'>Link</NavItem>
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
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Breadcrumbs</h3>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
              </Breadcrumb>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
                <BLink href='#' active>Library </BLink>
              </Breadcrumb>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
                <BLink href='#'>Library </BLink>
                <BLink href='#' active>Data</BLink>
              </Breadcrumb>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12} className='text-center'>
              <h3>Pagination</h3>
              <Pagination>
                <Page begin disabled />
                <Page active href='#'>1</Page>
                <Page href='#'>2</Page>
                <Page href='#'>3</Page>
                <Page href='#'>4</Page>
                <Page href='#'>5</Page>
                <Page end />
              </Pagination>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={6}>
              <h3>Pagination (small)</h3>
              <Pagination sm>
                <Page begin disabled />
                <Page active href='#'>
                  <span>1</span>
                  <span className='sr-only'>(current)</span>
                </Page>
                <Page href='#'>2</Page>
                <Page href='#'>3</Page>
                <Page href='#'>4</Page>
                <Page href='#'>5</Page>
                <Page end />
              </Pagination>
            </Col>
            <Col xs={6} className='text-right'>
              <h3>Pagination (Large)</h3>
              <Pagination lg>
                <Page begin disabled />
                <Page active href='#'>
                  <span>1</span>
                  <span className='sr-only'>(current)</span>
                </Page>
                <Page href='#'>2</Page>
                <Page href='#'>3</Page>
                <Page href='#'>4</Page>
                <Page href='#'>5</Page>
                <Page end />
              </Pagination>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12} className='text-center'>
              <h3>Pager</h3>
              <Pager>
                <Page href='#'>Previous</Page>{' '}
                <Page href='#'>Next</Page>
              </Pager>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Pager (previous disabled)</h3>
              <Pager>
                <Page previous disabled href='#'>Previous</Page>{' '}
                <Page next href='#'>Next</Page>
              </Pager>
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
