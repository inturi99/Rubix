import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

class Body extends React.Component {
  componentDidMount() {
    $('#my-awesome-dropzone').dropzone({
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 2, // MB
      accept: (file, done) => {
        done();
      }
    });
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Dropzone</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h4>
                            DropzoneJS is an open source library that provides drag'n'drop file uploads with image previews.
                          </h4>
                          <Form action='/dropzone/file-upload'
                                className='dropzone'
                                id='my-awesome-dropzone'>
                          </Form>
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
