import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import Doc from 'routes/docs/doc_container';
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

import LoremIpsum from 'global/jsx/loremipsum';

import basictab from '../snippets/basictab.txt';

class Body extends React.Component {
  handleSelect(tabprops) {
    alert(tabprops.pane);
  }
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Tabs'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus."}
            </p>
            <Well className='bg-white'>
              <div>
                <TabContainer>
                  <TabList bsStyle='orange75' onTabSelect={this.handleSelect}>
                    <Tab pane='tab1' active>Home</Tab>
                    <Tab pane='tab2'>Profile</Tab>
                    <TabDropdown title='Dropdown' menu-props={{bsStyle: 'orange75'}}>
                      <Tab pane='tab3'>
                        @fat
                      </Tab>
                      <Tab pane='tab4'>
                        @mdo
                      </Tab>
                    </TabDropdown>
                  </TabList>
                  <TabContent>
                    <TabPane>
                      <LoremIpsum query='5s' />
                    </TabPane>
                    <TabPane>
                      <LoremIpsum query='5s' />
                    </TabPane>
                    <TabPane>
                      <LoremIpsum query='5s' />
                    </TabPane>
                    <TabPane>
                      <LoremIpsum query='5s' />
                    </TabPane>
                  </TabContent>
                </TabContainer>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-javascript'>
                  {basictab}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Pills'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Similar markup to Tabs as above. Even the API is same as we reuse the same component."}
            </p>
            <Well className='bg-white'>
              <div style={{marginLeft: -12.5, marginRight: -12.5}}>
                <TabContainer id='tab-2'>
                  <TabList pills bsStyle='orange75'>
                    <Tab active>Home</Tab>
                    <Tab>Profile</Tab>
                    <TabDropdown title='Dropdown'  menu-props={{bsStyle: 'orange75'}}>
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
                      <TabContent tabContainerID='tab-2' style={{marginTop: 12.5}}>
                        <TabPane>
                          <LoremIpsum query='5s' />
                        </TabPane>
                        <TabPane>
                          <LoremIpsum query='5s' />
                        </TabPane>
                        <TabPane>
                          <LoremIpsum query='5s' />
                        </TabPane>
                        <TabPane>
                          <LoremIpsum query='5s' />
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<TabContainer id='tab-2'>\n"}
                  {"  <TabList pills bsStyle='orange75'>\n"}
                  {"    <Tab active>Home</Tab>\n"}
                  {"    <Tab>Profile</Tab>\n"}
                  {"    <TabDropdown title='Dropdown' menu-props={{bsStyle: 'orange75'}}>\n"}
                  {"      <Tab>\n"}
                  {"        @fat\n"}
                  {"      </Tab>\n"}
                  {"      <Tab>\n"}
                  {"        @mdo\n"}
                  {"      </Tab>\n"}
                  {"    </TabDropdown>\n"}
                  {"  </TabList>\n"}
                  {"</TabContainer>\n"}
                  {"<Grid>\n"}
                  {"  <Row>\n"}
                  {"    <Col xs={12}>\n"}
                  {"      <TabContent tabContainerID='tab-2' style={{marginTop: 12.5}}>\n"}
                  {"        <TabPane>\n"}
                  {"          <LoremIpsum query='5s' />\n"}
                  {"        </TabPane>\n"}
                  {"        <TabPane>\n"}
                  {"          <LoremIpsum query='5s' />\n"}
                  {"        </TabPane>\n"}
                  {"        <TabPane>\n"}
                  {"          <LoremIpsum query='5s' />\n"}
                  {"        </TabPane>\n"}
                  {"        <TabPane>\n"}
                  {"          <LoremIpsum query='5s' />\n"}
                  {"        </TabPane>\n"}
                  {"      </TabContent>\n"}
                  {"    </Col>\n"}
                  {"  </Row>\n"}
                  {"</Grid>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Justified pills</h4>
            <p>
              {"Easily make tabs or pills equal widths of their parent."}
            </p>
            <Well className='bg-white'>
              <div style={{marginLeft: -12.5, marginRight: -12.5}}>
                <TabContainer>
                  <TabList pills justified bsStyle='orange75'>
                    <Tab active>Home</Tab>
                    <Tab>Profile</Tab>
                    <TabDropdown title='Dropdown' menu-props={{bsStyle: 'orange75'}}>
                      <Tab>
                        @fat
                      </Tab>
                      <Tab>
                        @mdo
                      </Tab>
                    </TabDropdown>
                  </TabList>
                  <TabContent style={{marginTop: 12.5}}>
                    <TabPane>
                      <LoremIpsum query='5s' />
                    </TabPane>
                    <TabPane>
                      <LoremIpsum query='5s' />
                    </TabPane>
                    <TabPane>
                      <LoremIpsum query='5s' />
                    </TabPane>
                    <TabPane>
                      <LoremIpsum query='5s' />
                    </TabPane>
                  </TabContent>
                </TabContainer>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<TabContainer>\n"}
                  {"  <TabList pills justified bsStyle='orange75'>\n"}
                  {"    <Tab active>Home</Tab>\n"}
                  {"    <Tab>Profile</Tab>\n"}
                  {"    <TabDropdown title='Dropdown' menu-props={{bsStyle: 'orange75'}}>\n"}
                  {"      <Tab>\n"}
                  {"        @fat\n"}
                  {"      </Tab>\n"}
                  {"      <Tab>\n"}
                  {"        @mdo\n"}
                  {"      </Tab>\n"}
                  {"    </TabDropdown>\n"}
                  {"  </TabList>\n"}
                  {"  <TabContent style={{marginTop: 12.5}}>\n"}
                  {"    <TabPane>\n"}
                  {"      <LoremIpsum query='5s' />\n"}
                  {"    </TabPane>\n"}
                  {"    <TabPane>\n"}
                  {"      <LoremIpsum query='5s' />\n"}
                  {"    </TabPane>\n"}
                  {"    <TabPane>\n"}
                  {"      <LoremIpsum query='5s' />\n"}
                  {"    </TabPane>\n"}
                  {"    <TabPane>\n"}
                  {"      <LoremIpsum query='5s' />\n"}
                  {"    </TabPane>\n"}
                  {"  </TabContent>\n"}
                  {"</TabContainer>\n"}
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
