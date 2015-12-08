import React, { Component } from 'react';
import {Line,Bar} from 'react-chartjs';
import _ from 'underscore';

function R(decadeSYearValue,decadeEYearValue) {
    return ( (decadeEYearValue/decadeSYearValue)-1) * 100;
}

function projectedValue(R,D,previouYearVal){
    return (previouYearVal*(Math.pow((1+(R/100)),(D/25))));
}

function diff (selYear,decadeEndYear) {
    return (selYear-decadeEndYear);
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
            url: "http://localhost:8091/totalpopulation",
            dataType: 'json',
            success: function (data) {
                var years = genYears(fvalues.year,data.totalpopulation[0].year);
                years.push(parseInt(fvalues.year));
                var opData;
                opData = getPresentData(data,fvalues);
                this.setState({tdata:opData[0],
                    data:getData(years,opData[1]),
                    bdata:barChartData(opData[0])
                });
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
            url: "http://localhost:8091/totalpopulation",
            dataType: 'json',
            success: function (data) {
                if(fvalues.year <= data.totalpopulation[data.totalpopulation.length-1].year) {
                    var years = genYears(fvalues.year,data.totalpopulation[0].year);
                    years.push(parseInt(fvalues.year));
                    var opData;
                    opData = getPresentData(data,fvalues);
                    this.setState({tdata:opData[0],
                        data:getData(years,opData[1]),
                        bdata:barChartData(opData[0])
                    });
                }
                else {
                    var years = genYears(fvalues.year,data.totalpopulation[data.totalpopulation.length-1].year+1);
                    years.push(parseInt(fvalues.year));
                    var preData = getTablePredicatedData(data,fvalues);
                    var lchartData =  predictedData(years,data,fvalues);
                    console.log(lchartData);
                    this.setState({
                        tdata: preData, bdata: barChartData(preData),
                        data:getData(lchartData[4],lchartData)
                    });
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
            url: "http://localhost:8091/totalpopulation",
            dataType: 'json',
            success: function (data) {
                if(fvalues.year <= data.totalpopulation[data.totalpopulation.length-1].year) {
                    var years = genYears(fvalues.year,data.totalpopulation[0].year);
                    years.push(parseInt(fvalues.year));
                    var opData;
                    opData = getPresentData(data,fvalues);
                    this.setState({tdata:opData[0],
                        data:getData(years,opData[1]),
                        bdata:barChartData(opData[0])
                    });
                }
                else {
                    var years = genYears(fvalues.year,data.totalpopulation[data.totalpopulation.length-1].year+1);
                    years.push(parseInt(fvalues.year));
                    var preData = getTablePredicatedData(data,fvalues);
                    var lchartData =  predictedData(years,data,fvalues);
                    console.log(lchartData);
                    this.setState({
                        tdata: preData, bdata: barChartData(preData),
                        data:getData(lchartData[4],lchartData)
                    });
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
            url: "http://localhost:8091/totalpopulation",
            dataType: 'json',
            success: function (data) {
                if(fvalues.year <= data.totalpopulation[data.totalpopulation.length-1].year) {
                    var years = genYears(fvalues.year,data.totalpopulation[0].year);
                    years.push(parseInt(fvalues.year));
                    var opData;
                    opData = getPresentData(data,fvalues);
                    this.setState({tdata:opData[0],
                        data:getData(years,opData[1]),
                        bdata:barChartData(opData[0])
                    });
                }
                else {
                    var years = genYears(fvalues.year,data.totalpopulation[data.totalpopulation.length-1].year+1);
                    years.push(parseInt(fvalues.year));
                    var preData = getTablePredicatedData(data,fvalues);
                    var lchartData =  predictedData(years,data,fvalues);
                    console.log(lchartData);
                    this.setState({
                        tdata: preData, bdata: barChartData(preData),
                        data:getData(lchartData[4],lchartData)
                    });
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
            url: "http://localhost:8091/totalpopulation",
            dataType: 'json',
            success: function (data) {
                if(fvalues.year <= data.totalpopulation[data.totalpopulation.length-1].year) {
                    var years = genYears(fvalues.year,data.totalpopulation[0].year);
                    years.push(parseInt(fvalues.year));
                    var opData;
                    opData = getPresentData(data,fvalues);
                    this.setState({tdata:opData[0],
                        data:getData(years,opData[1]),
                        bdata:barChartData(opData[0])
                    });
                }
                else {
                    var years = genYears(fvalues.year,data.totalpopulation[data.totalpopulation.length-1].year+1);
                    years.push(parseInt(fvalues.year));
                    var preData = getTablePredicatedData(data,fvalues);
                    var lchartData =  predictedData(years,data,fvalues);
                    console.log(lchartData);
                    this.setState({
                        tdata: preData, bdata: barChartData(preData),
                        data:getData(lchartData[4],lchartData)
                    });
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
        <h5 className="side" style={{color:"rgb(238,104,47)"}}>: Workers Population  </h5>
        <h5 className="side" style={{color:"rgb(34,210,63)"}}>: Unemployed Persons </h5>
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


function getPresentData(data,fvalues) {
    var selTypeParamData =  _.filter(data.totalparameters,function(d) { return d.type == fvalues.datatype && d.parameter!="UR";});
    var projData = _.filter(data.totalpopulation,function(d) { return d.year == fvalues.year;})[0];
    var tableData = _.map(selTypeParamData,function(d){
        var obj = { "paramType": getTypeOfParam(d.parameter),"rural_male": parseInt(((projData["rural_male"] * d["rural_male"])/100).toFixed(0)),
            "rural_female": parseInt(((projData["rural_female"] * d["rural_female"])/100).toFixed(0)),"urban_male": parseInt(((projData["urban_male"] * d["urban_male"])/100).toFixed(0)),
            "urban_female": parseInt(((projData["urban_female"] * d["urban_female"])/100).toFixed(0))};
        obj.rural_person = obj.rural_male + obj.rural_female;
        obj.urban_person = obj.urban_male + obj.urban_female;
        obj.rural_urban_male = obj.rural_male + obj.urban_male ;
        obj.rural_urban_female = obj.rural_female + obj.urban_female;
        obj.rural_urban_person = obj.rural_person + obj.urban_person;
        return obj;});
    tableData.push({ "paramType": "Unemployed Persons","rural_male": tableData[0]["rural_male"]-tableData[1]["rural_male"],
        "rural_female": tableData[0]["rural_female"]-tableData[1]["rural_female"],"rural_person": tableData[0]["rural_person"]-tableData[1]["rural_person"],
        "urban_male": tableData[0]["urban_male"]-tableData[1]["urban_male"],
        "urban_female": tableData[0]["urban_female"]-tableData[1]["urban_female"],
        "urban_person": tableData[0]["urban_person"]-tableData[1]["urban_person"],
        "rural_urban_male": tableData[0]["rural_urban_male"]-tableData[1]["rural_urban_male"],
        "rural_urban_female": tableData[0]["rural_urban_male"]-tableData[1]["rural_urban_male"],
        "rural_urban_person": tableData[0]["rural_urban_person"]-tableData[1]["rural_urban_person"]});
    projData["paramType"] = "Projected Population as on "+fvalues.year;
    tableData.push(projData);
    return [tableData,getLineChartData(_.filter(data.totalpopulation,function(d) { return d.year <= fvalues.year;}),
        _.filter(data.totalparameters,function(d) { return d.type == fvalues.datatype;}),fvalues)];
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

function getLineChartData(selYearsData,paramsData,fvalues) {

    var lpfData = getCurrentParamTypeLineChartData(selYearsData,paramsData[0],fvalues);
    var wpData =  getCurrentParamTypeLineChartData(selYearsData,paramsData[1],fvalues);
    var umpData = [];
    for(var i=0;i<lpfData.length;i++)
        umpData.push(lpfData[i]-wpData[i]);
    return [lpfData,wpData,umpData, _.map(selYearsData,function(d){ return d[fvalues.geo+'_'+fvalues.gen];})];
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

function predictedData(years,data,fvalues){
    var dataParams = _.filter(data.totalparameters,function(da){ return da.type == fvalues.datatype;});
    var endData = data.totalpopulation[data.totalpopulation.length-1];
    var obj1=getCurrentParamTypeLineChartData(data.totalpopulation,dataParams[0],fvalues),
        obj2=getCurrentParamTypeLineChartData(data.totalpopulation,dataParams[1],fvalues),
        obj3=[],obj4 = _.map(data.totalpopulation, function (d) { return d[fvalues.geo+'_'+fvalues.gen];});
    for(var i=0;i<obj1.length;i++)
        obj3.push(obj1[i]-obj2[i]);
    _.each(years,function(y){
        var projPop = {};
        var df = diff(y,endData.year);
        _.each(labels,function(l){
            projPop[l] = parseInt(projectedValue(R(data.totalpopulation[0][l],endData[l]).toFixed(3),df,endData[l]).toFixed(0));
        });
        setPersonsAndTotalValues(projPop);
        var obj1val = getCurrentParamTypeLineChartData1(projPop,dataParams[0],fvalues);
        var obj2val = getCurrentParamTypeLineChartData1(projPop,dataParams[1],fvalues);
        var obj3val = obj1val-obj2val;
        obj1.push(obj1val);
        obj2.push(obj2val);
        obj3.push(obj3val);
        obj4.push(projPop[fvalues.geo+'_'+fvalues.gen]);
    });
    return [obj1,obj2,obj3,obj4,genYears(parseInt(fvalues.year)+1,data.totalpopulation[0].year)];
}

function getTablePredicatedData(data,fvalues){
    var df =  diff(fvalues.year,data.totalpopulation[data.totalpopulation.length-1].year);
    var dataParams = _.filter(data.totalparameters,function(da){ return da.type == fvalues.datatype;});
    var obj1 = {paramType:"Labour Force"},obj2={paramType:"Workers"},obj3={paramType:"Unemployed Persons"},
        obj4={paramType:"Projected population As On 1'st March "+fvalues.year};
    var endData = data.totalpopulation[data.totalpopulation.length-1];
    _.each(labels,function(l){
        obj4[l] = parseInt(projectedValue(R(data.totalpopulation[0][l],endData[l]).toFixed(3),df,endData[l]).toFixed(0));
    });
    setPersonsAndTotalValues(obj4);
    _.each(labels,function(l){
        obj1[l] = parseInt((obj4[l]*dataParams[0][l]).toFixed(0)/100);
        obj2[l] = parseInt((obj4[l]*dataParams[1][l]).toFixed(0)/100);
        obj3[l] = obj1[l] - obj2[l];
    });
    setPersonsAndTotalValues(obj1);
    setPersonsAndTotalValues(obj2);
    setPersonsAndTotalValues(obj3);
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
    if(v =="LFPR") return "Labour Force";
    if(v == "WPR") return "Workers";
    if(v == "UR") return "Unemployed Persons";
}

function otherYearSelTypePresentProjData(fvalues,selYear,decYear,decadedata) {
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


function getCurrentParamTypeLineChartData(selYearsData,paramsData,fvalues) {
    return (fvalues.geo == "rural_urban") ? (fvalues.gen == 'person') ?
        _.map(selYearsData,function(syd) {
            return parseInt(((paramsData['rural_male']*syd['rural_male'])/100 + (paramsData['rural_female']*syd['rural_female'])/100 + (paramsData['urban_male']*syd['urban_male'])/100 +
            (paramsData['urban_female']*syd['urban_female'])/100).toFixed(0));}): _.map(selYearsData,function(syd) {
        return parseInt(((paramsData['rural_'+fvalues.gen]*syd['rural_'+fvalues.gen])/100 + (paramsData['urban_'+fvalues.gen]*syd['urban_'+fvalues.gen])/100).toFixed(0));}):
        (fvalues.gen == 'person') ? _.map(selYearsData,function(syd) {
            return parseInt(((paramsData[fvalues.geo+'_'+'male']*syd[fvalues.geo+'_'+'male'])/100 + (paramsData[fvalues.geo+'_'+'female']*syd[fvalues.geo+'_'+'female'])/100).toFixed(0));}):
            _.map(selYearsData,function(syd) {
                return parseInt(((paramsData[fvalues.geo+'_'+fvalues.gen]*syd[fvalues.geo+'_'+fvalues.gen])/100).toFixed(0));});
}

function getCurrentParamTypeLineChartData1(selYrsDt,paramsData,fvalues) {
    return (fvalues.geo == "rural_urban") ? (fvalues.gen == 'person') ?
        parseInt(((paramsData['rural_male']*selYrsDt['rural_male'])/100 + (paramsData['rural_female']*selYrsDt['rural_female'])/100 + (paramsData['urban_male']*selYrsDt['urban_male'])/100 +
        (paramsData['urban_female']*selYrsDt['urban_female'])/100).toFixed(0)):parseInt(((paramsData['rural_'+fvalues.gen]*selYrsDt['rural_'+fvalues.gen])/100 + (paramsData['urban_'+fvalues.gen]*selYrsDt['urban_'+fvalues.gen])/100).toFixed(0)):
        (fvalues.gen == 'person') ? parseInt(((paramsData[fvalues.geo+'_'+'male']*selYrsDt[fvalues.geo+'_'+'male'])/100 + (paramsData[fvalues.geo+'_'+'female']*selYrsDt[fvalues.geo+'_'+'female'])/100).toFixed(0)):
            parseInt(((paramsData[fvalues.geo+'_'+fvalues.gen]*selYrsDt[fvalues.geo+'_'+fvalues.gen])/100).toFixed(0));
}
