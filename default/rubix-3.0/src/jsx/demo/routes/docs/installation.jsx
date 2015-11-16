import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import package_snippet from '../../../../../package.json';

class Body extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Introduction</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>Rubix only utilizes Node.JS for dependency resolution (CommonJS) and compiling/uglifying assets. You can always plug in any backend in the language of your choice (which includes PHP/ASP.NET etc).</p>
                          <Alert info>
                            <p>
                              <strong>
                                For Ruby on Rails installation please refer to <Link to='/app/docs/rails_installation'>this page</Link>
                              </strong>
                            </p>
                          </Alert>
                          <p>Remember that support is always available at : <a target='_blank' href='mailto:support@sketchpixy.com'>support@sketchpixy.com</a></p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-blue fg-white'>
                <Panel>
                  <PanelHeader className='bg-blue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Installation - Node.JS + NPM</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>{"To get started, head over to the Node.JS official website and download the installer for the platform of your choice: "}</p>
                          <h3 className='text-center'>
                            <a target='_blank' href='http://nodejs.org/download/'>
                              <Icon glyph='icon-dripicons-download' />{' '}
                              <span>Download</span>
                            </a>
                          </h3>
                          <p>
                            <span>{"NPM is needed for installing the dependencies defined in package.json (found in the root of Rubix folder). It should be bundled by default in the Node.JS installation for Windows (if you downloaded and installed the MSI) / MacOSX (if you downloaded and installed the PKG file) / if you built from source."}</span>
                          </p>
                          <p>
                            {"If it isn't available in your environment for some reason you can try one of the fancy installs suggested in the NPM documentation located here: "}
                            <a target='_blank' href='https://github.com/npm/npm#fancy-install-unix'>{"https://github.com/npm/npm#fancy-install-unix"}</a>
                          </p>
                          <p>
                            {"Windows users need to ensure they have Python 2.7.3 installed along with Microsoft Visual Studio C++ 2010/2012/2013 for building some node modules that have C/C++ bindings."}
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-red fg-white'>
                <Panel>
                  <PanelHeader className='bg-red fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Installing Node modules</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            {"Change directory to root of Rubix and run the following command (this launches the 'app' starter project) depending on your OS environment:"}
                          </p>
                          <p>
                            <span><strong>Windows:</strong></span>
                            <pre>
                              <code className='language-bash'>
                                {"> cd default\\rubix-3.0\n> npm install .\n> npm install -g gulp\n> gulp"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            <span>To launch the <strong>demo</strong> run this command instead:</span>
                            <pre>
                              <code className='language-bash'>
                                {"> gulp --rtl --name demo"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            <span><strong>MacOSX/Linux:</strong></span>
                            <pre>
                              <code className='language-bash'>
                                {"$ cd default/rubix-3.0\n$ npm install .\n$ npm install -g gulp\n$ gulp"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            <span>To launch the <strong>demo</strong> run this command instead:</span>
                            <pre>
                              <code className='language-bash'>
                                {"$ gulp --rtl --name demo"}
                              </code>
                            </pre>
                          </p>
                          <div className='text-center'>
                            <p>
                              <Img src='/imgs/shots/gulp-terminal.png' width='100%' height='100%' />
                            </p>
                            <div><strong>Screenshot of gulp output</strong></div>
                          </div>
                          <hr/>
                          <p>
                            <h4 className='text-center'><strong>We are done!</strong> A new browser window should be launched pointing to <a target='_blank' href='http://localhost:8080'>{'http://localhost:8080'}</a>.</h4>
                          </p>
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
