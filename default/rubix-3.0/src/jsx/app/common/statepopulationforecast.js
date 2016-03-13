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
    return { labels: labeldata,
        datasets:[
            {
                label: "original",
                //fillColor: "rgba(220,220,220,0.2)",
                //strokeColor: "rgba(220,220,220,1)",
                //pointColor: "rgba(220,220,220,1)",
                //pointrokeColor: "#fff",
                //pointHighlightFill: "#fff",
                //pointHighlightStroke: "rgba(220,220,220,1)",
                fillColor: "rgba(128,170,212,0.7)"//"#80AAD4"//"rgba(151,187,205,0.2)"
                ,strokeColor: "#0054A9"//"rgba(151,187,205,1)",
                ,pointColor: "#0054A9"//"rgba(151,187,205,1)",
                ,pointStrokeColor: "#0054A9"//"#fff",
                ,pointHighlightFill: "#0054A9"//"#fff",
                ,pointHighlightStroke: "#0054A9"//"rgba(151,187,205,1)",
                , data: dataarray
            }


        ]};
}
var options = { bezierCurve: true,datasetFill:true,pointDot:true};
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
var url1 = "http://localhost:8091/all";
export class PopulationChart extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data,tdata:[],bdata:props.bdata,knobvalue:0};
    }
    componentDidMount() {
        $('#dates').val(2012);
        var fvalues = getFilterValues();
        $.ajax({
            url: "http://localhost:8091/statepopulation/lfpr/"+fvalues.state+"/"+fvalues.gen+"/"+fvalues.year,
            dataType: 'json',
            success: function (data) {
                this.setState({tdata:data.lcdata.filter(function(o){return o.year == fvalues.year;}),data:getData(data.lcdata.map(function(o){ return o.year.toString();}),data.lcdata.map(function(o){ return o.lfpr;})),
                    knobvalue:data.lcdata[0].lfpr,bdata:barChartData(data.bardata)});
               // this.setState({tdata:opData[0],data:getData(data.map(function(o){ return o.year.toString;}),data.map(function(o){ return o.lfpr;})),c:barChartData(arr),knobvalue:opData[1].datasets[0].data[opData[1].datasets[0].data.length-1]});
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
                    opData = getPresentData(arr,data.decade,fvalues.year,data[this.props.paramType].filter(function(l) { return l.type == "UPS" && l.year <= fvalues.year;}),fvalues);
                    console.log(opData[0]);
                    this.setState({tdata:opData[0],data:opData[1],bdata:barChartData(arr)});
                }
                else {
                    var years = genYears(fvalues.year,minandmaxdatadates[0]);
                    years.push(parseInt(fvalues.year));
                    var preData  = predictedData(years,data,fvalues,this.props.paramType,minandmaxdatadates)
                    this.setState({tdata:preData[0],data:preData[1],bdata:barChartData(preData[0])});
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
            url: "http://localhost:8091/statepopulation/lfpr/"+fvalues.state+"/"+fvalues.gen+"/"+fvalues.year,
            dataType: 'json',
            success: function (data) {
                this.setState({tdata:data.lcdata.filter(function(o){return o.year == fvalues.year;}),data:getData(data.lcdata.map(function(o){ return o.year.toString();}),data.lcdata.map(function(o){ return o.lfpr;})),
                    knobvalue:data.lcdata.filter(function(o){return o.year == fvalues.year;})[0].lfpr,bdata:barChartData(data.bardata)});
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
            url: "http://localhost:8091/statepopulation/lfpr/"+fvalues.state+"/"+fvalues.gen+"/"+fvalues.year,
            dataType: 'json',
            success: function (data) {
                this.setState({tdata:data.lcdata.filter(function(o){return o.year == fvalues.year;}),data:getData(data.lcdata.map(function(o){ return o.year.toString();}),data.lcdata.map(function(o){ return o.lfpr;})),
                    knobvalue:data.lcdata.filter(function(o){return o.year == fvalues.year;})[0].lfpr,bdata:barChartData(data.bardata)});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    stateHandle(){
        var fvalues = getFilterValues();
        $.ajax({
            url: "http://localhost:8091/statepopulation/lfpr/"+fvalues.state+"/"+fvalues.gen+"/"+fvalues.year,
            dataType: 'json',
            success: function (data) {
                this.setState({tdata:data.lcdata.filter(function(o){return o.year == fvalues.year;}),data:getData(data.lcdata.map(function(o){ return o.year.toString();}),data.lcdata.map(function(o){ return o.lfpr;})),
                    knobvalue:data.lcdata.filter(function(o){return o.year == fvalues.year;})[0].lfpr,bdata:barChartData(data.bardata)});
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
            <Panel horizontal className='force-collapse'>
            <PanelLeft className='col-xs-6'>
            <PanelHeader className='bg-orange75 fg-white center text-center'>

            <h4>Labour Force Parameters</h4>
        </PanelHeader>
        <PanelBody style={{padding:10}}>
          <div>
            State: <StateComboBox  data={this.state.data} onChange={this.stateHandle.bind(this)}></StateComboBox>
          </div>
        <Filter handleDataType={this.handleDataType.bind(this)}
        data={this.state.data} tdata={this.state.tdata}
        genderHandle={this.genderHandle.bind(this)}></Filter>
        <FormGroup>
        <Label>Year</Label>
        <div>
        <ComboBox dates={yearsData(2012,2026)} onChange={this.onChange.bind(this)} tdata={this.state.tabledata}></ComboBox>
        </div>
        </FormGroup>
        </PanelBody>
        </PanelLeft>
        <PanelRight className='col-xs-6 text-center'>
            <PanelHeader className='bg-orange75 fg-white center text-center'>

            <h4>Labour Froce Participation Rate Per 1000 Households</h4>
        </PanelHeader>
        <PanelBody style={{padding:10}}>

    <input type='text' value={this.state.knobvalue} className='dial autosize' data-width='150%' data-fgcolor='#498bcb' disabled  data-min="60000000" data-max='100000000' />
        </PanelBody>
        </PanelRight>
        </Panel>
        </PanelContainer>
        <PanelContainer noOverflow controlStyles='bg-orange75 fg-white'>
            <Panel>
            <PanelHeader className='bg-orange75 fg-white center text-center'>

            <h4>Labour Force Parameter Trend</h4>

        </PanelHeader>
        <PanelBody>
        <Line id="chart" data={this.state.data} options={options}  style={{"height" : "250px", "width" : "100%"}}
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
        <h6 className="side" style={{color:"rgb(128,177,211)"}}>: LF-PERSON </h6>


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





function getPresentData(data,decadeData,selYear,allYearsData,fvalues) {
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
    var lchartData = getLineChartData(allYearsData,fvalues);
    return [data,getData(lchartData[0],lchartData[1])];
}

export class Filter extends Component {
    render() {
        return (
            <Container>
            <Form>

            <FormGroup>
            <Label>Gender</Label>
            <div>
            <Radio inline id= "1" value='option1' name="gen"  onClick={this.props.genderHandle.bind(this)}>
        Male
        </Radio>
        <Radio inline id="2"  value='option2'  name="gen" onClick={this.props.genderHandle.bind(this)}>
        Female
        </Radio>
        <Radio inline id="3"  value='option3' defaultChecked name="gen" onClick={this.props.genderHandle.bind(this)}>
        Person
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

export class StateComboBox extends Component{
    render(){
        var stdata = ["AndhraPradesh","ArunachalPradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","HimachalPradesh","Jammu&Kashmir","Jharkhand","Karnataka","Kerala","MadhyaPradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Punjab","Rajasthan","Sikkim","TamilNadu","Tripura","Uttarakhand","UttarPradesh","WestBengal","A&NIslands","Chandigarh","Dadra&NagarHaveli","Daman&Diu","Lakshadweep","Puducherry"];
        var optionsarray = stdata.map(function(d){
            return <option key={d}  value={d}>{d}</option>
        });
        return (<select id="states" onChange={this.props.onChange.bind(this)}>{optionsarray}</select>);
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
            <tr>
            <th>Year</th>
            <th>Population 15 years and above ('000)</th>
            <th>Labour Force participation rate per 1000 households</th>
            <th>Labour force population ('000)</th>
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
            <td>{d.year}</td>
        <td><p className="dataCell">{d.statepop}</p></td>
        <td><p className="dataCell">{d.lfpr}</p></td>
        <td><p className="dataCell">{d.lfprpop}</p></td>
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
        "Male": ["Male", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)", "rgba(190,186,218,0.5)"],
        "Female": ["Female", "rgb(253,180,98)", "rgb(253,180,98)", "rgb(253,180,98)", "rgb(253,180,98)"],
        "Person": ["Person", "rgb(217,217,217)", "rgb(217,217,217)", "rgb(217,217,217)", "rgb(217,217,217)"],
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
    //var Types = $('input[name=charttype]:checked')[0];
    return {
        gen: Gen.id,
        state: $('#states').val(),
        year: $('#dates').val()
    };
}

function getLineChartData(previousData,fvalues) {
    var labels = [];
    var axisData = [];
    _.each(previousData,function(c){
        labels.push(c.year.toString());
        axisData.push(c[fvalues.geo+'_'+fvalues.gen]);
    });
    return [labels,axisData];
}

    function barChartData(data) {
    return {
        labels:["Gender"] ,
        datasets: [
        {
            label: "Male",
            fillColor: "rgb(141,211,199)",
            strokeColor: "rgb(141,211,199)",
            highlightFill: "rgb(141,211,199)",
            highlightStroke: "rgb(141,211,199)",
            data: [data.filter(function(o){return o.gender == 1;})[0].lfpr]
        },
        {
            label: "Female",
            fillColor: "rgb(251,180,174)",
            strokeColor: "rgb(251,180,174)",
            highlightFill: "rgb(251,180,174)",
            highlightStroke: "rgb(251,180,174)",
            data: [data.filter(function(o){return o.gender == 2;})[0].lfpr]
        },
            {
                label: "Person",
                fillColor: "rgb(128,177,211)",
                strokeColor: "rgb(128,177,211)",
                highlightFill: "rgb(128,177,211)",
                highlightStroke: "rgb(128,177,211)",
                data: [data.filter(function(o){return o.gender == 3;})[0].lfpr]
            }
    ]
    };
}
function getMinDateAndMaxDateInGivenData(data){
    return [_.min(data),_.max(data)];
}

function predictedData(years,data,fvalues,paramType,minMaxDates){
    var labels = [];
    var lineChartData = [];
    var maxYearData = _.filter(data[paramType],function(data)
    { return data.year == minMaxDates[1] && data.type == fvalues.datatype;})[0]
    _.each(years,function(d) {

        if(d<=minMaxDates[1]) {
            labels.push(d.toString());
            lineChartData.push(_.filter(data[paramType],function(data)
            { return data.year == d && data.type == fvalues.datatype;})[0][fvalues.geo+'_'+fvalues.gen]);
        }
        else {

            labels.push(d.toString());
            var projData = (fvalues.geo == 'rural_urban') ? (fvalues.gen == 'person') ? (parseInt(projectedValue(R(data.decade[0]['rural'+'_'+'male'],data.decade[1]['rural'+'_'+'male']).toFixed(3),
                diff(d,minMaxDates[1]),maxYearData['rural'+'_'+'male']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['rural'+'_'+'female'],data.decade[1]['rural'+'_'+'female']).toFixed(3),
                diff(d,minMaxDates[1]),maxYearData['rural'+'_'+'female']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['urban'+'_'+'male'],data.decade[1]['urban'+'_'+'male']).toFixed(3),
                diff(d,minMaxDates[1]),maxYearData['urban'+'_'+'male']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['urban'+'_'+'female'],data.decade[1]['urban'+'_'+'female']).toFixed(3),
                diff(d,minMaxDates[1]),maxYearData['urban'+'_'+'female']).toFixed(0))) : (parseInt(projectedValue(R(data.decade[0]['rural'+'_'+fvalues.gen],data.decade[1]['rural'+'_'+fvalues.gen]).toFixed(3),
                diff(d,minMaxDates[1]),maxYearData['rural'+'_'+fvalues.gen]).toFixed(0)) + parseInt(projectedValue(R(data.decade[0]['urban'+'_'+fvalues.gen],data.decade[1]['urban'+'_'+fvalues.gen]).toFixed(3),
                diff(d,minMaxDates[1]),maxYearData['urban'+'_'+fvalues.gen]).toFixed(0))) : (fvalues.gen == 'person') ? parseInt(projectedValue(R(data.decade[0][fvalues.geo+'_'+'male'],data.decade[1][fvalues.geo+'_'+'male']).toFixed(3),
                diff(d,minMaxDates[1]),maxYearData[fvalues.geo+'_'+'male']).toFixed(0)) + parseInt(projectedValue(R(data.decade[0][fvalues.geo+'_'+'female'],data.decade[1][fvalues.geo+'_'+'female']).toFixed(3),
                diff(d,minMaxDates[1]),maxYearData[fvalues.geo+'_'+'female']).toFixed(0)) : parseInt(projectedValue(R(data.decade[0][fvalues.geo+'_'+fvalues.gen],data.decade[1][fvalues.geo+'_'+fvalues.gen]).toFixed(3),
                diff(d,minMaxDates[1]),maxYearData[fvalues.geo+'_'+fvalues.gen]).toFixed(0));
            lineChartData.push(projData);
        }
    });
    return [getTablePredicatedData(data,fvalues,minMaxDates),getData(labels,lineChartData)] ;
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
