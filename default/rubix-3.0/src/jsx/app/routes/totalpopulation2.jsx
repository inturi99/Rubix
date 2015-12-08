import { State, Navigation } from 'react-router';
import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';
import {PopulationChart} from 'common/totalpopulationforecast2'
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
                                    <Tab pane='tab1' active>Total Population</Tab>


                                </TabList>
                                <TabContent>
                                    <TabPane>

                                        <PopulationChart bdata={{labels: ["rural","urban","rural_urban"],datasets: [{}]}} paramType={"lfp"} title={"Labour Force Participation Rate"}
                                                         data={{labels: ["January", "February", "March", "April", "May", "June", "July"],datasets: [{}]}}
                                                         data1={{labels: ["January", "February", "March", "April", "May", "June", "July"],datasets: [{}]}}
                                                         data2={{labels: ["January", "February", "March", "April", "May", "June", "July"],datasets: [{}]}}
                                                         data3={{labels: ["January", "February", "March", "April", "May", "June", "July"],datasets: [{}]}}/>

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
