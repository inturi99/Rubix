import { State, Navigation } from 'react-router';
import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';
import {PopulationChart} from 'common/statepopulationforecast'
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
                                    <Tab pane='tab1' active>Labour Force Population</Tab>
                                    <Tab pane='tab2'>Worker Population</Tab>
                                    <Tab pane='tab3'>Un-Employment Persons</Tab>
                                    <Tab pane='tab3'>Proportional Un-Employed</Tab>
                                </TabList>
                                <TabContent>
                                    <TabPane>

                                        <PopulationChart tabc0title={" POPULATION 15 YEARS AND ABOVE ('000)"} tabc1title={"LABOUR FORCE PARTICIPATION RATE PER 1000 HOUSEHOLDS"} tabc2title={"LABOUR FORCE POPULATION ('000)"} filtitle={"Labour Force"} curl={"statepopulation/lfpr/"} popc={"lfprpop"} cvalprop={"lfpr"} bdata={{labels: ["rural","urban","rural_urban"],datasets: [{}]}} paramType={"lfp"} title={"Labour Force Participation Rate"}  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{}]}}/>

                                    </TabPane>
                                    <TabPane>
                                        <PopulationChart tabc0title={" POPULATION 15 YEARS AND ABOVE ('000)"} tabc1title={"WORKER POPULATION RATIO PER 1000 HOUSEHOLDS"} tabc2title={"WORKER POPULATION ('000)"} filtitle={"Worker Population"} curl={"statepopulation/wpr/"} popc={"wprpop"} cvalprop={"wpr"} bdata={{
    labels: ["rural","urban","rural_urban"],
    datasets: [
        {}
    ]
}} paramType={"wp"} title={"Worker Population Ratio"}  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{}]}}/>
                                    </TabPane>
                                    <TabPane>
                                        <PopulationChart tabc0title={"LABOUR FORCE POPULATION"} tabc1title={"UNEMPLOYEMENT RATE"} tabc2title={"UNEMPLOYED PERSONS"} filtitle={"Unemployment"} curl={"statepopulation/ur/"} popc={"unemppersons"} cvalprop={"upr"} bdata={{
    labels: ["rural","urban","rural_urban"],
    datasets: [
        {}
    ]
}} paramType={"ump"} title={"Unemployment Rate"}  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{}]}}/>
                                    </TabPane>
                                    <TabPane>
                                        <PopulationChart tabc0title={" POPULATION 15 YEARS AND ABOVE ('000)"} tabc1title={"PROPORTIONAL UNEMPLOYED"} tabc2title={"UNEMPLOYED PERSONS"} filtitle={"Unemployment"} curl={"statepopulation/pur/"} popc={"unemppersons"} cvalprop={"pur"} bdata={{
    labels: ["rural","urban","rural_urban"],
    datasets: [
        {}
    ]
}} paramType={"ump"} title={"Unemployment Rate"}  data={{
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
