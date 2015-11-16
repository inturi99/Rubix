import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import codesnippet from './codesnippet.txt';

class Body extends React.Component {
  componentDidMount() {
    var editor = CodeMirror.fromTextArea($('#code').get(0), {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      theme: 'ambiance'
    });
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-blue fg-white'>
                <PanelHeader className='bg-blue fg-white' style={{margin: 0}}>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Codemirror</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{padding: 25}}>
                        <Textarea id='code' name='code'>
                          {codesnippet}
                        </Textarea>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
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
