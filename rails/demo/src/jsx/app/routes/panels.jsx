import classNames from 'classnames';

import { Link } from 'react-router';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import LoremIpsum from 'global/jsx/loremipsum';

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={4} smCollapseRight>
              <PanelContainer>
                <Panel>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Basic Panel</h3>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-blue fg-white'>
                <Panel>
                  <PanelHeader className='bg-blue'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Panel Header</h3>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-lightblue'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Panel Footer</h3>
                          <h6>Mini heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-red fg-white'>
                <Panel className='force-collapse'>
                  <PanelHeader className='bg-red fg-white tabs'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Panel Header + Plain Tabs</h4>
                        </Col>
                      </Row>
                    </Grid>
                    <TabContainer id='tab-1' className='plain'>
                      <TabList>
                        <Tab active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent tabContainerID='tab-1'>
                            <TabPane>
                              <h4>Top Panel 1</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Top Panel 2</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Top Panel 3</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Bottom Panel 1</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Bottom Panel 2</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Bottom Panel 3</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-purple fg-white tabs'>
                    <TabContainer className='plain'>
                      <TabList tabContainerID='tab-1' tabContinuation>
                        <Tab>
                          <Icon bundle='fontello' glyph='th'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='archive'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='docs-landscape'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Panel Footer + Plain Tabs</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={4} smCollapseRight>
              <PanelContainer>
                <Panel>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-red'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h4>Panel Body + Footer without Panel Header</h4>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-purple fg-white'>
                <Panel>
                  <PanelHeader className='bg-purple fg-white tabs'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>Panel Header + Plain Tabs</h4>
                        </Col>
                      </Row>
                    </Grid>
                    <TabContainer id='tab-2' className='plain'>
                      <TabList>
                        <Tab active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                        <TabDropdown title={<Icon bundle='fontello' glyph='angle-down'/>} noCaret menu-props={{alignRight: true}}>
                          <Tab>@fat</Tab>
                          <Tab>@mdo</Tab>
                        </TabDropdown>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent tabContainerID='tab-2'>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p>
                                <h3>FAT</h3>
                              </p>
                            </TabPane>
                            <TabPane>
                              <p>
                                <h3>MDO</h3>
                              </p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-lightpurple'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h4>Panel Footer</h4>
                          <h6>Mini heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-palegreen fg-white'>
                <Panel className='force-collapse'>
                  <PanelHeader className='bg-palegreen fg-white tabs'>
                    <TabContainer id='tab-3'>
                      <TabList>
                        <Tab active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent tabContainerID='tab-3'>
                            <TabPane>
                              <h4>Top Panel 1</h4>
                              <p><LoremIpsum query='7s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Top Panel 2</h4>
                              <p><LoremIpsum query='7s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Top Panel 3</h4>
                              <p><LoremIpsum query='7s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={4}>
              <PanelContainer controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h4>Panel Body + Header without Panel Footer</h4>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-palepink fg-white'>
                <Panel>
                  <PanelHeader className='bg-palepink'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h4>Panel Header</h4>
                          <h6>Mini heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent tabContainerID='tab-4'>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p>
                                <h3>FAT</h3>
                              </p>
                            </TabPane>
                            <TabPane tab='panel_tab_footer:mdo'>
                              <p>
                                <h3>MDO</h3>
                              </p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-palepink fg-white tabs'>
                    <TabContainer id='tab-4' className='plain'>
                      <TabList>
                        <Tab active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                        <TabDropdown title={<Icon bundle='fontello' glyph='angle-up'/>} noCaret menu-props={{alignRight: true}} className='dropup'>
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
                        <Col xs={12}>
                          <h4>Panel Footer + Plain Tabs</h4>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-lightorange fg-white'>
                <Panel className='force-collapse'>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent tabContainerID='tab-5'>
                            <TabPane>
                              <h4>Bottom Panel 1</h4>
                              <p><LoremIpsum query='6s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Bottom Panel 2</h4>
                              <p><LoremIpsum query='6s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Bottom Panel 3</h4>
                              <p><LoremIpsum query='6s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-lightorange fg-white tabs'>
                    <TabContainer id='tab-5'>
                      <TabList>
                        <Tab active>
                          <Icon bundle='fontello' glyph='th'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='archive'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='docs-landscape'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer controlStyles='bg-grayishcyan fg-white'>
                <Panel className='force-collapse'>
                  <PanelHeader className='bg-grayishcyan fg-white tabs'>
                    <TabContainer id='tab-6'>
                      <TabList>
                        <Tab active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent tabContainerID='tab-6'>
                            <TabPane>
                              <h4>Top Panel 1</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Top Panel 2</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Top Panel 3</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Bottom Panel 1</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Bottom Panel 2</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane tab='tpc_hf:landscape'>
                              <h4>Bottom Panel 3</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-darkcyan fg-white tabs'>
                    <TabContainer>
                      <TabList tabContainerID='tab-6' tabContinuation>
                        <Tab>
                          <Icon bundle='fontello' glyph='th'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='archive'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='docs-landscape'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6} smCollapseRight>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelLeft className='bg-red fg-white tabs panel-sm-2'>
                    <TabContainer id='tab-7'>
                      <TabList>
                        <Tab active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelLeft>
                  <PanelBody className='panel-sm-10'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent tabContainerID='tab-7' style={{paddingTop: 12.5}}>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelBody className='panel-sm-10'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent tabContainerID='tab-8' style={{paddingTop: 12.5}}>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-orange fg-darkorange tabs panel-sm-2'>
                    <TabContainer id='tab-8'>
                      <TabList>
                        <Tab active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelRight>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelLeft className='bg-red fg-white tabs panel-sm-1'>
                    <TabContainer id='tab-9'>
                      <TabList>
                        <Tab active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelLeft>
                  <PanelBody className='panel-sm-10'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent tabContainerID='tab-9' style={{paddingTop: 12.5}}>
                            <TabPane>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Right Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Right Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane>
                              <h4>Right Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-purple fg-white tabs panel-sm-1'>
                    <TabContainer>
                      <TabList tabContainerID='tab-9' tabContinuation>
                        <Tab>
                          <Icon bundle='fontello' glyph='th'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='archive'/>
                        </Tab>
                        <Tab>
                          <Icon bundle='fontello' glyph='docs-landscape'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelRight>
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
