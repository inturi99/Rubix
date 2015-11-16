import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

class Chart extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 25}}>
            <div id={this.props.id}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

var interval = null;
class Body extends React.Component {
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    setTimeout(() => {
      (() => {
        var pie = Rubix.Pie('#pie-chart', {
          title: 'Pie chart',
          subtitle: 'Browser Share',
          height: 300
        });

        pie.addData([
          {
            name: 'Firefox',
            value: 45.0,
            color: '#4572a7'
          },
          {
            name: 'IE',
            value: 26.8,
            color: '#aa4643'
          },
          {
            name: 'Chrome',
            value: 12.8,
            color: '#89a54e'
          },
          {
            name: 'Safari',
            value: 8.5,
            color: '#80699b'
          },
          {
            name: 'Opera',
            value: 6.2,
            color: '#3d96ae'
          },
          {
            name: 'Others',
            value: 0.7,
            color: '#db843d'
          }
        ]);
      })();

      (() => {
        var donut = Rubix.Donut('#donut-chart', {
          title: 'Realtime Donut chart',
          subtitle: 'Browser Share',
          height: 300
        });

        donut.addData([
          {
            name: 'Firefox',
            value: 45.0,
            color: '#4572a7'
          },
          {
            name: 'IE',
            value: 26.8,
            color: '#aa4643'
          },
          {
            name: 'Chrome',
            value: 12.8,
            color: '#89a54e'
          },
          {
            name: 'Safari',
            value: 8.5,
            color: '#80699b'
          },
          {
            name: 'Opera',
            value: 6.2,
            color: '#3d96ae'
          },
          {
            name: 'Others',
            value: 0.7,
            color: '#db843d'
          }
        ]);

        var browsers = ['Firefox', 'IE', 'Chrome', 'Safari', 'Opera', 'Others'], name;

        var redrawDonut = () => {
          name = browsers.shift();
          browsers.push(name);
          return {
            name: name,
            value: Math.random() * 100
          };
        };

        this.interval = setInterval(() => {
          donut.updatePoint(redrawDonut());
        }, 1000);
      })();
    }, 15);
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <Chart id='pie-chart' />
            </Col>
            <Col sm={6}>
              <Chart id='donut-chart' />
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
