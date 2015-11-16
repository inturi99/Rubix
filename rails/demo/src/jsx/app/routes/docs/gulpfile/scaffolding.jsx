import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

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
              <PanelContainer controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Gulpfile: Client-side Scaffolding <em>(Disabled for Rails)</em></h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            To scaffold a new project just run the following command from your terminal/command prompt (we assume the name of your project to be <strong>testingscaffolding</strong>):
                          </p>
                          <Alert info>
                            <p>
                              <strong>
                                Not available for Ruby on Rails. Copy seed project instead.
                              </strong>
                            </p>
                          </Alert>
                          <pre>
                            <code className='language-bash'>
                              $ gulp --gulpfile scaffold.js --name testingscaffolding
                            </code>
                          </pre>
                          <p>
                            This is a screenshot of the output:
                          </p>
                          <div>
                            <Img responsive src='/imgs/shots/scaffolding.png' />
                          </div>
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
