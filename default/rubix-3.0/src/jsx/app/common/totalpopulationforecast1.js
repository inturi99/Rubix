import React, { Component } from 'react';
import {Line,Bar} from 'react-chartjs';
import _ from 'underscore';

function R(decadeSYearValue,decadeEYearValue) {
     //console.log(decadeSYearValue);
    return ( (decadeEYearValue/decadeSYearValue)-1) * 100;
}

function projectedValue(R,D,previouYearVal){
    return (previouYearVal*(Math.pow((1+(R/100)),(D/120))));
}

function diff (selYear,decadeEndYear) {
    return (selYear-decadeEndYear) * 12;
}


function decadeYears(data) {
    return [data[0].year,data[1].year];
}

function yearsData (start,end) {
    var cmbData = [{lbl:"select",val:0}];
    for(var i = start;i<=end;i++)
        cmbData.push({lbl:i-1+"-"+i,val:i});
    return cmbData;
}

var labels = ["rural_male","rural_female", "urban_male","urban_female"];
function getData(labeldata,dataarray){
    console.log(dataarray[0]);
    console.log(dataarray[1]);
    console.log(dataarray[2]);
    console.log(dataarray[3]);
    return { labels: labeldata,
        datasets:[
            {
                label:"lfp"
                ,fillColor: "rgba(128,170,212,0.7)"//"#80AAD4"//"rgba(151,187,205,0.2)"
                ,strokeColor: "#0054A9"//"rgba(151,187,205,1)",
                ,pointColor: "#0054A9"//"rgba(151,187,205,1)",
                ,pointStrokeColor: "#0054A9"//"#fff",
                ,pointHighlightFill: "#0054A9"//"#fff",
                ,pointHighlightStroke: "#0054A9"//"rgba(151,187,205,1)",
                , data: dataarray[0]
            },
            {
                label:"wp"
                ,fillColor: "rgba(238,104,47,0.7)"//"#80AAD4"//"rgba(151,187,205,0.2)"
                ,strokeColor: "#ee682f"//"rgba(151,187,205,1)",
                ,pointColor: "#ee682f"//"rgba(151,187,205,1)",
                ,pointStrokeColor: "#ee682f"//"#fff",
                ,pointHighlightFill: "#ee682f"//"#fff",
                ,pointHighlightStroke: "#ee682f"//"rgba(151,187,205,1)",
                , data: dataarray[1]
            },
            {
                label:"ump"
                ,fillColor: "rgba(34,210,63,0.7)"//"#80AAD4"//"rgba(151,187,205,0.2)"
                ,strokeColor: "#22d23f"//"rgba(151,187,205,1)",
                ,pointColor: "#22d23f"//"rgba(151,187,205,1)",
                ,pointStrokeColor: "#22d23f"//"#fff",
                ,pointHighlightFill: "#22d23f"//"#fff",
                ,pointHighlightStroke: "#22d23f"//"rgba(151,187,205,1)",
                , data: dataarray[2]
            },
            {
                label:"total"
                ,fillColor: "rgba(206,43,199,0.7)"//"#80AAD4"//"rgba(151,187,205,0.2)"
                ,strokeColor: "#ce2bc7"//"rgba(151,187,205,1)",
                ,pointColor: "#ce2bc7"//"rgba(151,187,205,1)",
                ,pointStrokeColor: "#ce2bc7"//"#fff",
                ,pointHighlightFill: "#ce2bc7"//"#fff",
                ,pointHighlightStroke: "#ce2bc7"//"rgba(151,187,205,1)",
                , data: dataarray[3]
            }

        ]};
}
var options = { bezierCurve: true,datasetFill:false,pointDot:true};
var barOptions = {barValueSpacing:20,barDatasetSpacing : 4,showTooltips:false,
    onAnimationComplete:function(){
        var ctx = this.chart.ctx;
        ctx.font = this.scale.font;
        ctx.fillStyle = this.scale.textColor
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        this.datasets.forEach(function (dataset) {
            dataset.bars.forEach(function (bar) {
                ctx.fillText(bar.value, bar.x, bar.y - 5);
            });
        })
    }};
var url1 = "http://localhost:8091/all1";
export class PopulationChart extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data,tdata:[],bdata:props.bdata,
            data1: props.data1,  data2: props.data2,data3:props.data3};
    }
    componentDidMount() {
        $('#dates').val(2014);
        var fvalues = getFilterValues();
        $.ajax({
            url: url1,
            dataType: 'json',
            success: function (data) {
                var arr = [];
                var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function(o){ return o.year;}));
                var years = genYears(fvalues.year,minandmaxdatadates[0]);
                 years.push(parseInt(fvalues.year));
                var opData;
                if(fvalues.year <= minandmaxdatadates[1]) {
                    var lpf =  _.filter(data.lfp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    lpf.paramType = "Labour Force";
                    arr.push(lpf);
                    var wp = _.filter(data.wp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    wp.paramType= "Workers";
                    arr.push(wp);
                    var ump = _.filter(data.ump,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    ump.paramType = "Unemployed Persons";
                    arr.push(ump);
                    opData = getPresentData(arr,data.decade,fvalues.year,data,fvalues,years);
                    opData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:opData[0],
                        data:getData(years,opData[1]),
                        bdata:barChartData(arr)});
                }
                else {
                    var years = genYears(fvalues.year,minandmaxdatadates[0]);
                    years.push(parseInt(fvalues.year));
                    var preData  = predictedData(years,data,fvalues,this.props.paramType,minandmaxdatadates)
                    preData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:preData[0],data:getData(years,preData[1]),bdata:barChartData(preData[0])});
                }

            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    handleDataType(){
        var fvalues = getFilterValues();
        $.ajax({
            url: url1,
            dataType: 'json',
            success: function (data) {
                var arr = [];
                var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function(o){ return o.year;}));
                var years = genYears(fvalues.year,minandmaxdatadates[0]);
                years.push(parseInt(fvalues.year));
                var opData;
                if(fvalues.year <= minandmaxdatadates[1]) {
                    var lpf =  _.filter(data.lfp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    lpf.paramType = "Labour Force";
                    arr.push(lpf);
                    var wp = _.filter(data.wp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    wp.paramType= "Workers";
                    arr.push(wp);
                    var ump = _.filter(data.ump,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    ump.paramType = "Unemployed Persons";
                    arr.push(ump);
                    opData = getPresentData(arr,data.decade,fvalues.year,data,fvalues,years);
                    opData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:opData[0],
                        data:getData(years,opData[1]),
                        bdata:barChartData(arr)});
                }
                else {
                    var years = genYears(fvalues.year,minandmaxdatadates[0]);
                    years.push(parseInt(fvalues.year));
                    var preData  = predictedData(years,data,fvalues,this.props.paramType,minandmaxdatadates)
                    preData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:preData[0],data:getData(years,preData[1]),bdata:barChartData(preData[0])});
                }

            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    onChange(){
        var fvalues = getFilterValues();
        $.ajax({
            url: url1,
            dataType: 'json',
            success: function (data) {
                var arr = [];
                var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function(o){ return o.year;}));
                var years = genYears(fvalues.year,minandmaxdatadates[0]);
                years.push(parseInt(fvalues.year));
                var opData;
                if(fvalues.year <= minandmaxdatadates[1]) {
                    var lpf =  _.filter(data.lfp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    lpf.paramType = "Labour Force";
                    arr.push(lpf);
                    var wp = _.filter(data.wp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    wp.paramType= "Workers";
                    arr.push(wp);
                    var ump = _.filter(data.ump,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    ump.paramType = "Unemployed Persons";
                    arr.push(ump);
                    opData = getPresentData(arr,data.decade,fvalues.year,data,fvalues,years);
                    opData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:opData[0],
                        data:getData(years,opData[1]),
                        bdata:barChartData(arr)});
                }
                else {
                    var years = genYears(fvalues.year,minandmaxdatadates[0]);
                    years.push(parseInt(fvalues.year));
                    var preData  = predictedData(years,data,fvalues,this.props.paramType,minandmaxdatadates)
                    preData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:preData[0],data:getData(years,preData[1]),bdata:barChartData(preData[0])});
                }

            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    genderHandle(){
        var fvalues = getFilterValues();
        $.ajax({
            url: url1,
            dataType: 'json',
            success: function (data) {
                var arr = [];
                var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function(o){ return o.year;}));
                var years = genYears(fvalues.year,minandmaxdatadates[0]);
                years.push(parseInt(fvalues.year));
                var opData;
                if(fvalues.year <= minandmaxdatadates[1]) {
                    var lpf =  _.filter(data.lfp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    lpf.paramType = "Labour Force";
                    arr.push(lpf);
                    var wp = _.filter(data.wp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    wp.paramType= "Workers";
                    arr.push(wp);
                    var ump = _.filter(data.ump,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    ump.paramType = "Unemployed Persons";
                    arr.push(ump);
                    opData = getPresentData(arr,data.decade,fvalues.year,data,fvalues,years);
                    opData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:opData[0],
                        data:getData(years,opData[1]),
                        bdata:barChartData(arr)});
                }
                else {
                    var years = genYears(fvalues.year,minandmaxdatadates[0]);
                    years.push(parseInt(fvalues.year));
                    var preData  = predictedData(years,data,fvalues,this.props.paramType,minandmaxdatadates)
                    preData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:preData[0],data:getData(years,preData[1]),bdata:barChartData(preData[0])});
                }

            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    geoHandle(){
        var fvalues = getFilterValues();
        $.ajax({
            url: url1,
            dataType: 'json',
            success: function (data) {
                var arr = [];
                var minandmaxdatadates = getMinDateAndMaxDateInGivenData(data.lfp.map(function(o){ return o.year;}));
                var years = genYears(fvalues.year,minandmaxdatadates[0]);
                years.push(parseInt(fvalues.year));
                var opData;
                if(fvalues.year <= minandmaxdatadates[1]) {
                    var lpf =  _.filter(data.lfp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    lpf.paramType = "Labour Force";
                    arr.push(lpf);
                    var wp = _.filter(data.wp,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    wp.paramType= "Workers";
                    arr.push(wp);
                    var ump = _.filter(data.ump,function(x){ return x.year == fvalues.year && x.type == fvalues.datatype;})[0];
                    ump.paramType = "Unemployed Persons";
                    arr.push(ump);
                    opData = getPresentData(arr,data.decade,fvalues.year,data,fvalues,years);
                    opData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:opData[0],
                        data:getData(years,opData[1]),
                        bdata:barChartData(arr)});
                }
                else {
                    var years = genYears(fvalues.year,minandmaxdatadates[0]);
                    years.push(parseInt(fvalues.year));
                    var preData  = predictedData(years,data,fvalues,this.props.paramType,minandmaxdatadates)
                    preData[1].push(_.map(years,function(y){ return otherYearSelTypePresentProjData(fvalues,y,data.decade[1].year,data.decade);}));
                    this.setState({tdata:preData[0],data:getData(years,preData[1]),bdata:barChartData(preData[0])});
                }

            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        return (
            <Container id="graph">
            <PanelContainer noOverflow controlStyles='bg-orange75 fg-white'>
            <Panel>

            <PanelHeader className='bg-orange75 fg-white center text-center'>

            <h4>Parameters</h4>
        </PanelHeader>
        <PanelBody style={{padding:10}}>
            <Filter handleDataType={this.handleDataType.bind(this)}
        data={this.state.data} tdata={this.state.tdata}
        genderHandle={this.genderHandle.bind(this)} geoHandle={this.geoHandle.bind(this)}></Filter>
        <FormGroup>
        <Label>Year</Label>
        <div>
        <ComboBox dates={yearsData(2012,2030)} onChange={this.onChange.bind(this)} tdata={this.state.tabledata}></ComboBox>
        </div>
        </FormGroup>
        </PanelBody>
        </Panel>
        </PanelContainer>
        <PanelContainer noOverflow controlStyles='bg-orange75 fg-white'>
            <Panel>

            <PanelHeader className='bg-orange75 fg-white center text-center'>

            <h4>Population Trend</h4>

        </PanelHeader>
        <PanelBody>
        <h5 className="side" style={{color:"rgb(206,43,199)"}}>Total Population</h5>
        <h5 className="side" style={{color:"rgb(128,170,212)"}}> Labour Force Population </h5>
        <h5 className="side" style={{color:"rgb(238,104,47)"}}> Workers Population  </h5>
        <h5 className="side" style={{color:"rgb(34,210,63)"}}>  Unemployed Persons </h5>
        <Line id="chart" data={this.state.data} options={options}  style={{"height" : "500px", "width" : "100%"}}
         margin="10" redraw></Line>
        </PanelBody>

        </Panel>
        </PanelContainer>


        <PanelContainer noOverflow controlStyles='bg-orange75 fg-white'>
            <Panel>
            <PanelHeader className='bg-orange75 fg-white center text-center'>

            <h4>Comparative Labour Force Parameters</h4>

        </PanelHeader>
        <PanelBody>

        <title>Guess what?</title>
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n<!--\n.side { vertical-align:absbottom; display:inline }\n-->\n" }} />
    <h6 className="side" style={{color:"rgb(141,211,199)"}}> LF-MALE </h6>
        <h6 className="side" style={{color:"rgb(251,180,174)"}}>: LF-FEMALE </h6>
        <h6 className="side" style={{color:"rgb(190,186,218)"}}>: LF-PERSON </h6>

        <h6 className="side" style={{color:"rgb(251,128,114)"}}>: WP-MALE  </h6>
        <h6 className="side" style={{color:"rgb(128,177,211)"}}>: WP-FEMALE </h6>
        <h6 className="side" style={{color:"rgb(253,180,98)"}}>: WP-PERSON </h6>

        <h6 className="side" style={{color:"rgb(179,222,105)"}}>: UMP-MALE </h6>
        <h6 className="side" style={{color:"rgb(252,205,229)"}}>: UMP-FEMALE </h6>
        <h6 className="side" style={{color:"rgb(217,217,217)"}}>: UMP-PERSON </h6>



        <Bar id="bchart" data={this.state.bdata} options={barOptions}  style={{"height":"250px" , "width" : "100%"}} redraw>
        </Bar>
        </PanelBody>
        </Panel>
        </PanelContainer>

            <DataTable tabledata={this.state.tdata}></DataTable>
        </Container>
    );
    }
}




function getPresentData(data,decadeData,selYear,allYearsData,fvalues,years) {
    var df = (selYear == 2012 ) ? 6 :(selYear == 2013) ? 22  :diff(selYear,decadeData[1].year);
    var obj = {paramType: "Projected Population as on 1'st march "+selYear};
    _.each(labels,function(l){
        obj[l] = parseInt(projectedValue(R(decadeData[0][l],decadeData[1][l]).toFixed(3),df,decadeData[1][l]).toFixed(0));
    });
    obj["rural_person"] = obj.rural_male + obj.rural_female;
    obj["urban_person"] = obj.urban_male + obj.urban_female;
    obj["rural_urban_person"] = obj["urban_person"] +  obj["rural_person"];
    obj["rural_urban_male"] = obj["urban_male"] +  obj["rural_male"];
    obj["rural_urban_female"] = obj["urban_female"] +  obj["rural_female"];
    data.push(obj);
    return [data,getLineChartData(allYearsData,fvalues)];
}

export class Filter extends Component {
    render() {
        return (
            <Container>
            <Form>

            <FormGroup>
            <Label>Gender</Label>
            <div>
            <Radio inline id= "male" value='option1' name="gen"  onClick={this.props.genderHandle.bind(this)}>
        Male
        </Radio>
        <Radio inline id="female"  value='option2'  name="gen" onClick={this.props.genderHandle.bind(this)}>
        Female
        </Radio>
        <Radio inline id="person"  value='option3' defaultChecked name="gen" onClick={this.props.genderHandle.bind(this)}>
        Person
        </Radio>
        </div>
        </FormGroup>


        <FormGroup>
        <Label>Category</Label>
        <div>
        <Radio inline  id="rural" value='option1' name="geo"  onClick={this.props.geoHandle.bind(this)}>
        RURAL
        </Radio>
        <Radio inline id="urban"  value='option2'  name="geo" onClick={this.props.geoHandle.bind(this)}>
        URBAN
        </Radio>
        <Radio inline id="rural_urban"  value='option3' defaultChecked  name="geo" onClick={this.props.geoHandle.bind(this)}>
        RURAL+URBAN
        </Radio>
        </div>
        </FormGroup>
        <FormGroup>
        <Label>Approach</Label>
        <div>
        <Radio inline  id="UPS" value='option1' defaultChecked name="datatype"  onClick={this.props.handleDataType.bind(this)}>
        UPS
        </Radio>
        <Radio inline id="UPSS"  value='option2'  name="datatype" onClick={this.props.handleDataType.bind(this)}>
        UPSS
        </Radio>
        </div>
        </FormGroup>
        </Form>
        </Container>
    );
    }
}

export class ComboBox extends Component{
    render(){
        var optionsarray = this.props.dates.map(function(d){
            return <option key={d.val} value={d.val}>{d.lbl}</option>
        });
        return (<select id="dates" onChange={this.props.onChange.bind(this)}>{optionsarray}</select>);
    }
}

export class DataTable extends Component {

    componentDidMount() {
        $('.tablesaw').table();




        $('.dial').knob();
        $('.knob').knob({
            draw: function() {
                // 'tron' case
                if(this.$.data('skin') == 'tron') {
                    var a = this.angle(this.cv)  // Angle
                        , sa = this.startAngle          // Previous start angle
                        , sat = this.startAngle         // Start angle
                        , ea                            // Previous end angle
                        , eat = sat + a                 // End angle
                        , r = true;

                    this.g.lineWidth = this.lineWidth;

                    this.o.cursor
                    && (sat = eat - 0.3)
                    && (eat = eat + 0.3);

                    if(this.o.displayPrevious) {
                        ea = this.startAngle + this.angle(this.value);
                        this.o.cursor
                        && (sa = ea - 0.3)
                        && (ea = ea + 0.3);
                        this.g.beginPath();
                        this.g.strokeStyle = this.previousColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                        this.g.stroke();
                    }

                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                    this.g.stroke();

                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();

                    return false;
                }
            }
        });





    }
    render(){
        var rows = [];
        this.props.tabledata.forEach(function(dat) {
            rows.push(<Row data={dat}/>);
        });
        return (

            <PanelContainer noOverflow controlStyles='bg-orange75 fg-white'>
            <Panel>
            <PanelHeader className='bg-orange75 fg-white center text-center'>
            <h4>{this.props.type}</h4>
        </PanelHeader>
        <PanelBody>

        <Table striped bordered className='tablesaw'>
            <thead>
            <th>Social Group</th>
        <th colSpan={3}>Rural</th>
            <th  colSpan={3}>Urban</th>
            <th  colSpan={3}>Rural+Urban</th>
            <tr>
            <th ></th>
            <th>Male</th>
            <th>Female</th>
            <th >Person</th>
            <th>Male</th>
            <th>Female</th>
            <th>Person</th>
            <th>Male</th>
            <th>Female</th>
            <th>Person</th>
            </tr>
            </thead>
            <tbody>


            {rows}

            </tbody>
            </Table>


            </PanelBody>
            </Panel>
            </PanelContainer>

    );
    }
}

export class Row extends Component {
    render(){
        var d = this.props.data;
        return (<tr>
            <td>{d.paramType}</td>
        <td><p className="dataCell">{d.rural_male}</p></td>
        <td><p className="dataCell">{d.rural_female}</p></td>
        <td><p className="dataCell">{d.rural_person}</p></td>
        <td><p className="dataCell">{d.urban_male}</p></td>
        <td><p className="dataCell">{d.urban_female}</p></td>
        <td><p className="dataCell">{d.urban_person}</p></td>
        <td><p className="dataCell">{d.rural_urban_male}</p></td>
        <td><p className="dataCell">{d.rural_urban_female}</p></td>
        <td><p className="dataCell">{d.rural_urban_person}</p></td>
        </tr>);
    }
}


function createDataObj(csettings, data) {
    return {
        label: csettings[0],
        fillColor: csettings[1],
        strokeColor: csettings[2],
        highlightFill: csettings[3],
        highlightStroke: csettings[4],
        data: data
    }
}

function barSettings() {
    return {
        "Labour Force-person": ["SC-Person", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)"],
        "Workers-person": ["ST-Person", "rgb(253,180,98)", "rgb(253,180,98)", "rgb(253,180,98)", "rgb(253,180,98)"],
        "Unemployed Persons-person": ["OBC-Person", "rgb(217,217,217)", "rgb(217,217,217)", "rgb(217,217,217)", "rgb(217,217,217)"],
        "Labour Force-male":["SC-Male", "rgb(141,211,199)", "rgb(141,211,199)", "rgb(141,211,199)", "rgb(141,211,199)"],
        "Labour Force-female":["SC-Female","rgb(251,180,174)", "rgb(251,180,174)", "rgb(251,180,174)", "rgb(251,180,174)"],
        "Workers-male":["ST-Male","rgb(251,128,114)", "rgb(251,128,114) ", "rgb(251,128,114) ", "rgb(251,128,114)"],
        "Workers-female":["ST-Female","rgb(128,177,211)", "rgb(128,177,211)", "rgb(128,177,211)", "rgb(128,177,211)"],
        "Unemployed Persons-male":["OBC-Male","rgb(179,222,105)", "rgb(179,222,105)", "rgb(179,222,105)", "rgb(179,222,105)"],
        "Unemployed Persons-female":["OBC-Female","rgb(252,205,229)", "rgb(252,205,229)", "rgb(252,205,229)", "rgb(252,205,229)"],
    };
}
function getChartType(chartType) {
    switch (chartType){
        case "labour-rate":
            return "lfpr";
            break;
        case "worker-population":
            return "wpr";
            break;
        case "unemployment-rate":
            return "umr";
            break;
        default:
            return "pur";
    }
}

function genYears(selyear,min) {
    var years = [];
    for(var i = min;i<selyear;i++)
        years.push(i);
    return years;
}

function getFilterValues() {
    var Gen = $('input[name=gen]:checked')[0];
    var Types = $('input[name=charttype]:checked')[0];
    return {
        gen: [Gen.id],
        geo:$('input[name=geo]:checked')[0].id,
        datatype: $('input[name=datatype]:checked')[0].id,
        year: $('#dates').val()
    };
}

function getLineChartData(previousData,fvalues) {
    var axisData = [];
    var lfpData =  previousData['lfp'].filter(function(l) { return l.type == "UPS" && l.year <= fvalues.year;});
    var wpData =  previousData['wp'].filter(function(l) { return l.type == "UPS" && l.year <= fvalues.year;});
    var umpData =  previousData['ump'].filter(function(l) { return l.type == "UPS" && l.year <= fvalues.year;});
    var obj1 = [],obj2=[],obj3=[];
    _.each(lfpData,function(c){
        obj1.push(c[fvalues.geo+'_'+fvalues.gen]);
    });

    _.each(wpData,function(c){
        obj2.push(c[fvalues.geo+'_'+fvalues.gen]);
    });

    _.each(umpData,function(c){
        obj3.push(c[fvalues.geo+'_'+fvalues.gen]);
    });
    axisData.push(obj1);
    axisData.push(obj2);
    axisData.push(obj3);
    return axisData;
}

function barChartData(data) {
    var datasets = [];
    var bsettings = barSettings();
    var labels = ["rural","urban","rural_urban"];
    var paramTypes =  ["Labour Force","Workers","Unemployed Persons"];
    var gen = ["male","female","person"]
    _.each(paramTypes,function(p){
        var catobj = _.find(data, function (x) { return x.paramType == p; });
        _.each(gen,function(g){
            var data = [];
            _.each(labels,function(l){
                data.push(catobj[l+"_"+g]);
            });
            datasets.push(createDataObj(bsettings[p+'-'+g],data));
        });
    });
    return {
        labels: labels,
        datasets: datasets
    };
}
function getMinDateAndMaxDateInGivenData(data){
    return [_.min(data),_.max(data)];
}

function predictedData(years,data,fvalues,paramType,minMaxDates){
    var labels = [];
    var lineChartData = [];
    var obj1=[],obj2=[],obj3=[];
    var maxYearDatalfp = _.filter(data.lfp,function(data)
    { return data.year == minMaxDates[1] && data.type == fvalues.datatype;})[0]
    var maxYearDatawp = _.filter(data.wp,function(data)
    { return data.year == minMaxDates[1] && data.type == fvalues.datatype;})[0]
    var maxYearDataump = _.filter(data.ump,function(data)
    { return data.year == minMaxDates[1] && data.type == fvalues.datatype;})[0]
    var tableData = getTablePredicatedData(data,fvalues,minMaxDates);
    _.each(years,function(d) {

        if(d<=minMaxDates[1]) {
            labels.push(d.toString());
            obj1.push(_.filter(data.lfp,function(data)
            { return data.year == d && data.type == fvalues.datatype;})[0][fvalues.geo+'_'+fvalues.gen]);
            obj2.push(_.filter(data.wp,function(data)
            { return data.year == d && data.type == fvalues.datatype;})[0][fvalues.geo+'_'+fvalues.gen])
            obj3.push(_.filter(data.ump,function(data)
            { return data.year == d && data.type == fvalues.datatype;})[0][fvalues.geo+'_'+fvalues.gen])
        }
        else {
            labels.push(d.toString());
            obj1.push(futureProjectedVal(fvalues,d,minMaxDates[1],data,maxYearDatalfp));
            obj2.push(futureProjectedVal(fvalues,d,minMaxDates[1],data,maxYearDatawp));
            obj3.push(futureProjectedVal(fvalues,d,minMaxDates[1],data,maxYearDataump));
        }
    });
    lineChartData.push(obj1);
    lineChartData.push(obj2);
    lineChartData.push(obj3);
    return [tableData,lineChartData] ;
}

function getTablePredicatedData(data,fvalues,minMaxDates){
    var obj1 = {paramType:"Labour Force"},obj2={paramType:"Workers"},obj3={paramType:"Unemployed Persons"},
        obj4={paramType:"Projected population As On 1'st March "+fvalues.year};
    var df =  diff( fvalues.year,minMaxDates[1]);
    var df1= diff(fvalues.year,data.decade[1].year);
    var lpf = _.filter(data.lfp,function(lp) { return lp.type==fvalues.datatype && lp.year == minMaxDates[1]})[0];
    var wp = _.filter(data.wp,function(lp) { return lp.type==fvalues.datatype && lp.year == minMaxDates[1]})[0];
    var uep = _.filter(data.ump,function(lp) { return lp.type==fvalues.datatype && lp.year == minMaxDates[1]})[0];
    _.each(labels,function(l){
        obj1[l] = parseInt(projectedValue(R(data.decade[0][l],data.decade[1][l]).toFixed(3),df,lpf[l]).toFixed(0));
    });
    setPersonsAndTotalValues(obj1);
    _.each(labels,function(l){
        obj2[l] = parseInt(projectedValue(R(data.decade[0][l],data.decade[1][l]).toFixed(3),df,wp[l]).toFixed(0));
    });
    setPersonsAndTotalValues(obj2);
    _.each(labels,function(l){
     /*   obj3[l] = parseInt(projectedValue(R(data.decade[0][l],data.decade[1][l]).toFixed(3),df,uep[l]).toFixed(0));*/
        obj3[l] = obj1[l] - obj2[l];
    });
    setPersonsAndTotalValues(obj3);
    _.each(labels,function(l){
        obj4[l] = parseInt(projectedValue(R(data.decade[0][l],data.decade[1][l]).toFixed(3),df1,data.decade[1][l]).toFixed(0));
    });
    setPersonsAndTotalValues(obj4);
    return [obj1,obj2,obj3,obj4];
}

function setPersonsAndTotalValues(obj){
    obj["rural_person"] = obj.rural_male + obj.rural_female;
    obj["urban_person"] = obj.urban_male + obj.urban_female;
    obj["rural_urban_person"] = obj["urban_person"] +  obj["rural_person"];
    obj["rural_urban_male"] = obj["urban_male"] +  obj["rural_male"];
    obj["rural_urban_female"] = obj["urban_female"] +  obj["rural_female"];
}

function getTypeOfParam(v) {
    if("lpf") return "Labour Force";
    if("wp") return "Workers";
    if("ump") return "Unemployed Persons";
}

function otherYearSelTypePresentProjData(fvalues,selYear,decYear,decadedata) {
    var df = (selYear == 2012 ) ? 6 :(selYear == 2013) ? 22  :diff(selYear,decYear);
   return (fvalues.geo == 'rural_urban') ? (fvalues.gen == 'person') ? (parseInt(projectedValue(R(decadedata[0]['rural'+'_'+'male'],decadedata[1]['rural'+'_'+'male']).toFixed(3),
       df,decadedata[1]['rural'+'_'+'male']).toFixed(0)) + parseInt(projectedValue(R(decadedata[0]['rural'+'_'+'female'],decadedata[1]['rural'+'_'+'female']).toFixed(3),
       df,decadedata[1]['rural'+'_'+'female']).toFixed(0)) + parseInt(projectedValue(R(decadedata[0]['urban'+'_'+'male'],decadedata[1]['urban'+'_'+'male']).toFixed(3),
       df,decadedata[1]['urban'+'_'+'male']).toFixed(0)) + parseInt(projectedValue(R(decadedata[0]['urban'+'_'+'female'],decadedata[1]['urban'+'_'+'female']).toFixed(3),
       df,decadedata[1]['urban'+'_'+'female']).toFixed(0))) : (parseInt(projectedValue(R(decadedata[0]['rural'+'_'+fvalues.gen],decadedata[1]['rural'+'_'+fvalues.gen]).toFixed(3),
       df,decadedata[1]['rural'+'_'+fvalues.gen]).toFixed(0)) + parseInt(projectedValue(R(decadedata[0]['urban'+'_'+fvalues.gen],decadedata[1]['urban'+'_'+fvalues.gen]).toFixed(3),
       df,decadedata[1]['urban'+'_'+fvalues.gen]).toFixed(0))) : (fvalues.gen == 'person') ? parseInt(projectedValue(R(decadedata[0][fvalues.geo+'_'+'male'],decadedata[1][fvalues.geo+'_'+'male']).toFixed(3),
       df,decadedata[1][fvalues.geo+'_'+'male']).toFixed(0)) + parseInt(projectedValue(R(decadedata[0][fvalues.geo+'_'+'female'],decadedata[1][fvalues.geo+'_'+'female']).toFixed(3),
       df,decadedata[1][fvalues.geo+'_'+'female']).toFixed(0)) : parseInt(projectedValue(R(decadedata[0][fvalues.geo+'_'+fvalues.gen],decadedata[1][fvalues.geo+'_'+fvalues.gen]).toFixed(3),
       df,decadedata[1][fvalues.geo+'_'+fvalues.gen]).toFixed(0));
}

function futureProjectedVal(fvalues,selYear,decYear,data,maxYearData){
    return (fvalues.geo == 'rural_urban') ? (fvalues.gen == 'person') ? (parseInt(projectedValue(R(data.decade[0]['rural'+'_'+'male'],data.decade[1]['rural'+'_'+'male']).toFixed(3),
        diff(selYear,decYear),maxYearData['rural'+'_'+'male']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['rural'+'_'+'female'],data.decade[1]['rural'+'_'+'female']).toFixed(3),
        diff(selYear,decYear),maxYearData['rural'+'_'+'female']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['urban'+'_'+'male'],data.decade[1]['urban'+'_'+'male']).toFixed(3),
        diff(selYear,decYear),maxYearData['urban'+'_'+'male']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['urban'+'_'+'female'],data.decade[1]['urban'+'_'+'female']).toFixed(3),
        diff(selYear,decYear),maxYearData['urban'+'_'+'female']).toFixed(0))) : (parseInt(projectedValue(R(data.decade[0]['rural'+'_'+fvalues.gen],data.decade[1]['rural'+'_'+fvalues.gen]).toFixed(3),
        diff(selYear,decYear),maxYearData['rural'+'_'+fvalues.gen]).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['urban'+'_'+fvalues.gen],data.decade[1]['urban'+'_'+fvalues.gen]).toFixed(3),
        diff(selYear,decYear),maxYearData['urban'+'_'+fvalues.gen]).toFixed(0))) : (fvalues.gen == 'person') ? parseInt(projectedValue(R(data.decade[0][fvalues.geo+'_'+'male'],data.decade[1][fvalues.geo+'_'+'male']).toFixed(3),
        diff(selYear,decYear),maxYearData[fvalues.geo+'_'+'male']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0][fvalues.geo+'_'+'female'],data.decade[1][fvalues.geo+'_'+'female']).toFixed(3),
        diff(selYear,decYear),maxYearData[fvalues.geo+'_'+'female']).toFixed(0)) : parseInt(projectedValue(R(data.decade[0][fvalues.geo+'_'+fvalues.gen],data.decade[1][fvalues.geo+'_'+fvalues.gen]).toFixed(3),
        diff(selYear,decYear),maxYearData[fvalues.geo+'_'+fvalues.gen]).toFixed(0)) ;
}

