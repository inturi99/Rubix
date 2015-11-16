import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import LoremIpsum from 'global/jsx/loremipsum';
import dataObject from 'routes/dataObject.json';

class Body extends React.Component {
  componentDidMount() {
    createStoryJS({
      type:       'timeline',
      width:      '100%',
      height:     '600',
      id:         'my-timeline-story',
      source:     dataObject,
      embed_id:   'my-timeline'
    });
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-orange65 fg-white'>
                <PanelHeader className='bg-orange65 fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Interactive Timeline</h3>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <div id='my-timeline' dir='ltr'></div>
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
