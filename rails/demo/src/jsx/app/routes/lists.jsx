import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

class Body extends React.Component {
  componentDidMount() {
    $('#nestable').nestable({
      group: 1
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
                          <h3>Nestable List</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <div className='dd nestable' id='nestable' style={{width: '100%'}}>
                        <ol className='dd-list'>
                            <li className='dd-item' data-id='1'>
                                <div className='dd-handle'>Item 1</div>
                            </li>
                            <li className='dd-item' data-id='2'>
                                <div className='dd-handle'>Item 2</div>
                                <ol className='dd-list'>
                                    <li className='dd-item' data-id='3'><div className='dd-handle'>Item 3</div></li>
                                    <li className='dd-item' data-id='4'><div className='dd-handle'>Item 4</div></li>
                                    <li className='dd-item' data-id='5'>
                                        <div className='dd-handle'>Item 5</div>
                                        <ol className='dd-list'>
                                            <li className='dd-item' data-id='6'><div className='dd-handle'>Item 6</div></li>
                                            <li className='dd-item' data-id='7'><div className='dd-handle'>Item 7</div></li>
                                            <li className='dd-item' data-id='8'><div className='dd-handle'>Item 8</div></li>
                                        </ol>
                                    </li>
                                    <li className='dd-item' data-id='9'><div className='dd-handle'>Item 9</div></li>
                                    <li className='dd-item' data-id='10'><div className='dd-handle'>Item 10</div></li>
                                </ol>
                            </li>
                            <li className='dd-item' data-id='11'>
                                <div className='dd-handle'>Item 11</div>
                            </li>
                            <li className='dd-item' data-id='12'>
                                <div className='dd-handle'>Item 12</div>
                            </li>
                        </ol>
                    </div>
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
