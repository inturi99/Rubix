import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

var fonts = [{
  name: 'climacon',
  color: 'brown',
  fonts: require('./fonts/climacons')
}, {
  name: 'mfizz',
  color: 'darkblue',
  fonts: require('./fonts/mfizz')
}, {
  name: 'devicon',
  color: 'darkgreen45',
  fonts: require('./fonts/devicon')
}, {
  name: 'stroke-gap-icons',
  color: 'pink',
  fonts: require('./fonts/stroke-gap-icons')
}, {
  name: 'simple-line-icons',
  color: 'brown',
  fonts: require('./fonts/simple-line-icons')
}, {
  name: 'pixelvicon',
  color: 'purple',
  fonts: require('./fonts/pixelvicon')
}, {
  name: 'nargela',
  color: 'paleblue',
  fonts: require('./fonts/nargela')
}, {
  name: 'flatline',
  color: 'desaturateddarkblue',
  fonts: require('./fonts/flatline')
}, {
  name: 'feather',
  color: 'darkcyan',
  fonts: require('./fonts/feather')
}, {
  name: 'dripicons',
  color: 'deepred',
  fonts: require('./fonts/dripicons')
}, {
  name: 'outlined',
  color: 'blue',
  fonts: require('./fonts/outlined')
},{
  name: 'ikons',
  color: 'paleorange',
  fonts: require('./fonts/ikons')
}, {
  name: 'fontello',
  color: 'green',
  fonts: require('./fonts/fontello')
}];

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              {fonts.map((font) => {
                return (
                  <PanelContainer key={font.name} controlStyles={'fg-white bg-'+font.color}>
                    <Panel>
                      <PanelHeader className={'fg-white bg-'+font.color}>
                        <Grid>
                          <Row>
                            <Col xs={12}>
                              <h3 className='text-center'>{font.name} [Total fonts: {font.fonts.length}]</h3>
                            </Col>
                          </Row>
                        </Grid>
                      </PanelHeader>
                      <PanelBody>
                        <Grid>
                          <Row>
                              {font.fonts.map((fontname) => {
                                return (
                                  <Col key={fontname} xs={4} className='text-center'>
                                    <div>
                                      <Icon className={'fg-'+font.color} style={{fontSize: 48}} glyph={fontname} />
                                    </div>
                                    <div>
                                      {fontname}
                                    </div>
                                  </Col>
                                );
                              })}
                          </Row>
                        </Grid>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                );
              })}
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
