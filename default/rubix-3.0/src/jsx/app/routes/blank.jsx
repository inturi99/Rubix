import { State, Navigation } from 'react-router';
import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';
import {LineChart} from 'common/forecast'
import {Bar} from 'react-chartjs'

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
                  <TabContainer>
<TabList bsStyle='orange75' onTabSelect={this.handleSelect}>
<Tab pane='tab1' active>Labour Force Participation Rate</Tab>
<Tab pane='tab2'>Worker Population Ratio</Tab>
<Tab pane='tab3'>Un-Employment Rate</Tab>
<Tab pane='tab4'>Proportion UnEmployment</Tab>
 </TabList>
<TabContent>
<TabPane>

<LineChart bdata={{labels: ["rural","urban","rural_urban"],datasets: [{}]}} type={"Labour Force Participation Rate"} title={"Labour Force Participation Rate"}  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{}]}}/>

</TabPane>
<TabPane>
<LineChart bdata={{
    labels: ["rural","urban","rural_urban"],
    datasets: [
        {}
    ]
}} type={"Worker Population"} title={"Worker Population Ratio"}  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{}]}}/>
</TabPane>
<TabPane>
<LineChart bdata={{
    labels: ["rural","urban","rural_urban"],
    datasets: [
        {}
    ]
}} type={"Unemployment Rate"} title={"Unemployment Rate"}  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{}]}}/>
</TabPane>
<TabPane>
<LineChart bdata={{
    labels: ["rural","urban","rural_urban"],
    datasets: [
        {}
    ]
}} type={"Proportion Unemployment"} title={"Proportion Unemployed"} data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{}]}}/>
</TabPane>
</TabContent>
</TabContainer>

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
