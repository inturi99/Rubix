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
                          <p>Rubix only utilizes Node.JS for dependency resolution (CommonJS) and compiling/uglifying assets. Gulp is used as a supplement to the built-in Rails Asset Pipeline for compiling JSX/SASS/Font files. The Rails version that Rubix ships with is v4.2.3.</p>
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
              <PanelContainer controlStyles='bg-blue fg-white'>
                <Panel>
                  <PanelHeader className='bg-blue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Installation - Ruby on Rails</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>{"To get started, head over to the Ruby on Rails official website's download section and install Rails by following the instructions as detailed here: "}<a target='_blank' href='http://rubyonrails.org/download/'>Download</a></p>
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
                            {"Change to the demo directory in your rails folder and run the following commands (depending on your OS environment):"}
                          </p>
                          <p>
                            <span><strong>Windows:</strong></span>
                            <pre>
                              <code className='language-bash'>
                                {"> cd rails\\demo\n> npm install .\n> npm install -g gulp\n> bundle install\n> rake rails:update:bin \n> rails server"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            <span>In another terminal run the following commands:</span>
                            <pre>
                              <code className='language-bash'>
                                {"> cd rails\\demo\n> gulp"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            <span><strong>MacOSX/Linux:</strong></span>
                            <pre>
                              <code className='language-bash'>
                                {"$ cd rails/demo\n$ npm install .\n$ npm install -g gulp\n$ bundle install\n$ rake rails:update:bin \n$ rails server"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            <span>In another terminal run the following commands:</span>
                            <pre>
                              <code className='language-bash'>
                                {"$ cd rails/demo\n$ gulp"}
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
              <PanelContainer controlStyles='bg-purple fg-white'>
                <Panel>
                  <PanelHeader className='bg-purple fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Next step</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            Now that you have got the demo running, you can now create your own project by copying the rails-seed project. Once you make a copy, follow the same steps as above to build/launch your development server from the root of the newly created project.
                          </p>
                          <p>
                            To start creating pages, refer to the <Link to='/app/docs/rubix/jsx'>Rubix > JSX</Link> documentation.
                          </p>
                          <p>
                            To render your own routes, scaffold a controller and view like you normally would and render only the rubix/index partial in your view like so:

                            <pre>
                              <code className='language-javascript'>
                                {"<%= render partial: 'rubix/render', locals: {response: @response} %>\n"}
                              </code>
                            </pre>
                          </p>
                          <p>
                            The <code>{"@response"}</code> local must contain a <b>path</b> and can contain an optional <b>data</b> attribute which will be available to the view as a global variable (<code>server_data</code>). For an example, see the implementation of <b>index</b> action in <b>RubixController</b>
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
