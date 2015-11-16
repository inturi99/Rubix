import React, { Component } from 'react';
import {Line} from 'react-chartjs';
import _ from 'underscore';


function mean(data,prop){
    return _.reduce(data,function(acc,d) { return acc+d[prop];},0)/data.length;
}

function a (xbar,ybar,b) {
    return (ybar-(b*xbar));
}

function b (xmean,ymean,data) {
    return (_.reduce(data,function(acc,d) { return acc + ((d.year-xmean)*(d.y-ymean));  },0)/
    (_.reduce(data,function(acc,d){ return acc + Math.pow(d.year-xmean,2);},0)));
}

function y (x,data) {
    var xbar = mean(data,"year");
    var ybar = mean(data,"y");
    var bop = b(xbar,ybar,data);
    return (a(xbar,ybar,bop)+ (bop*x)).toFixed(0);
}


function sampleData(){
    var data = {
        "Persons":{"labour-rate": [{"year":1,"y":35.9},{"year":3,"y":54.15},{"year":4,"y" :51.65},{"year":5,"y":54.05}],
                   "worker-population":[{"year":1,"y":46.5},{"year":3,"y":52.2},{"year":4,"y" :49.3},{"year":5,"y":51.8}],
                   "unemployment-rate":[{"year":1,"y":9.4},{"year":3,"y":3.55},{"year":4,"y" :4.6},{"year":5,"y":4.5}],
                   "proportion-unemployment":[{"year":1,"y":3.4},{"year":3,"y":1.9},{"year":4,"y" :2.35},{"year":5,"y":2.25}]
                  },
        "Females":{"labour-rate": [{"year":1,"y":35.9},{"year":3,"y":54.4},{"year":4,"y" :53.1},{"year":5,"y":55.6}],
                   "worker-population":[{"year":1,"y":46.5},{"year":3,"y":53.6},{"year":4,"y" :51.0},{"year":5,"y":53.7}],
                   "unemployment-rate":[{"year":1,"y":9.4},{"year":3,"y":3.3},{"year":4,"y" :4},{"year":5,"y":3.4}],
                   "proportion-unemployment":[{"year":1,"y":3.4},{"year":3,"y":1.8},{"year":4,"y" :2.1},{"year":5,"y":1.9}]
                   },
        "Males":{"labour-rate": [{"year":1,"y":35.9},{"year":3,"y":52.9},{"year":4,"y" :50.2},{"year":5,"y":52.5}],
                 "worker-population":[{"year":1,"y":46.5},{"year":3,"y":50.8},{"year":4,"y" :47.6},{"year":5,"y":49.9}],
                  "unemployment-rate":[{"year":1,"y":9.4},{"year":3,"y":3.8},{"year":4,"y" :5.2},{"year":5,"y":4.9}],
                 "proportion-unemployment":[{"year":1,"y":3.4},{"year":3,"y":2.0},{"year":4,"y" :2.6},{"year":5,"y":2.6}]
                }
        };
    return data;
}


function labour_rate_persons_data(){

    return [{"year":1,"y":9.4},{"year":3,"y":3.55},{"year":4,"y":4.6},{"year":5,"y":4.15}];

}

function getY(year,data) {
    return y(year,data);
}

function getData(year,data){
    var data15 = getY(6,data);
    var trenddata = [getY(1,data),getY(2,data),getY(3,data),getY(4,data),getY(5,data),data15];
    return { labels: ["2010","2011","2012", "2013", "2014", "2015"],
             datasets:[
                 {
                     label: "original",
                     fillColor: "rgba(220,220,220,0.2)",
                     strokeColor: "rgba(220,220,220,1)",
                     pointColor: "rgba(220,220,220,1)",
                     pointStrokeColor: "#fff",
                     pointHighlightFill: "#fff",
                     pointHighlightStroke: "rgba(220,220,220,1)",
                     data: _.reduce(data,function(acc,d) { acc.push(d.y); return acc; },[])
                 },

                 {
                     label: "expected",
                     fillColor: "rgba(151,187,205,0.2)",
                     strokeColor: "rgba(151,187,205,1)",
                     pointColor: "rgba(151,187,205,1)",
                     pointStrokeColor: "#fff",
                     pointHighlightFill: "#fff",
                     pointHighlightStroke: "rgba(151,187,205,1)",
                     data: trenddata
                 }
             ]};
}

var options = { bezierCurve: true,datasetFill:false,pointDot:false};

export class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data,tdata:[]};
    }
    componentDidMount() {
         var fvalues = getFilterValues();
         this.setState({data: getData(6,sampleData()[fvalues.gen][fvalues.type])});
        $.ajax({
            url: "http://localhost:8091/lfpr",
            dataType: 'json',
            cache: false,
            success: function (data) {
                var dt = data.filter(function (i) {
                    return i.type === "UPS";
                });
             var data = getPredictedData(dt,2016);
             this.setState({tdata:data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    handleClick() {
        var fvalues = getFilterValues();
        //this.setState({data: getData(6,sampleData()[fvalues.gen][fvalues.type])});
        $.ajax({
            url: "http://localhost:8091/"+getChartType(fvalues.type),
            dataType: 'json',
            cache: false,
            success: function (data) {
                var dt = data.filter(function (i) {
                    return i.type === "UPS";
                });
                var data = getPredictedData(dt,2016);
                this.setState({tdata:data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    onChange(){
        var fvalues = getFilterValues();
        //this.setState({data: getData(6,sampleData()[fvalues.gen][fvalues.type])});
        $.ajax({
            url: "http://localhost:8091/"+getChartType(fvalues.type),
            dataType: 'json',
            cache: false,
            success: function (data) {
                var dt = data.filter(function (i) {
                    return i.type === "UPS";
                });
                var data = getPredictedData(dt,fvalues.year);
                this.setState({tdata:data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        return (<div>
             <Filter handleClick={this.handleClick.bind(this)} data={this.state.data}></Filter>
             <br/>
            <ComboBox dates={yearsData(2012,2030)} onChange={this.onChange.bind(this)} tabledata={this.state.tabledata}></ComboBox>

            <DataTable tabledata={this.state.tdata}></DataTable>
        </div>);
    }
}

export class Filter extends Component {
    render() {
        return (
            <div>
            <h4>Forecasted Table</h4>

            <div><input id="labour-rate" type="radio" name="charttype" defaultChecked="true" onClick={this.props.handleClick.bind(this)}>Labour Force Participation Rate</input>
            <input id="worker-population" type="radio" name="charttype" onClick={this.props.handleClick.bind(this) } >Worker Population Ratio </input>
            <input id="unemployment-rate" type="radio" name="charttype" onClick={this.props.handleClick.bind(this)}>Unemployment Rate</input>
            <input id="proportion-unemployment" type="radio" name="charttype" onClick={this.props.handleClick.bind(this)}>Proportion Unemployed</input></div>
                    </div>);
    }
}

export class ComboBox extends Component{
    render(){
        var optionsarray = this.props.dates.map(function(d){
            return <option value={d.val}>{d.lbl}</option>
        });
        return (<select id="dates" onChange={this.props.onChange.bind(this)}>{optionsarray}</select>);
    }
}

function getFilterValues() {
   // var Gen = $('input[name=gen]:checked')[0];
    var Types = $('input[name=charttype]:checked')[0];
    return {
     //   gen: [Gen.id],
        type: Types.id,
        year: $('#dates').val()
    };
}

function yearsData (start,end) {
    var cmbData = [{lbl:"select",val:0}];
    for(var i = start;i<=end;i++)
     cmbData.push({lbl:i-1+"-"+i,val:i});
    return cmbData;
}

function getPreviousData(cattype,prop,data) {
    return _.map(data,function(x){ return {"year":x["year"],"y":x[prop]};});
}

function getPredictedData(sampledata,year){
    var types = ["SC","ST","OBC","OTHERS","OVERALL"];
    var props = ["rural_male","rural_female","rural_person","urban_male","urban_female","urban_person",
        "rural_urban_male","rural_urban_female","rural_urban_person"];
    var predictedData = [];
    _.each(types,function(obj){
        var transobj = {"type":obj,"year":year};
        var dat = _.filter(sampledata,function(d) { return d.caste === obj});
        _.each(props,function(k) {
            var preData = getPreviousData(obj,k,dat);
            transobj[k] = getY(year,preData);
          });
        predictedData.push(transobj);
      });
    return predictedData;
}

export class DataTable extends Component {
    render(){
        var rows = [];
        this.props.tabledata.forEach(function(dat) {
           rows.push(<Row data={dat}/>);
        });
        return (
            <div>
        <style dangerouslySetInnerHTML={{__html: "\ntable, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n}\nth, td {\n    padding: 5px;\n    text-align: center;    \n}\n" }} />
        <h2>Cell that spans two columns:</h2>
            <table style={{width: '100%'}}>
            <td>Social Group</td>
            <td  colSpan={3}>Rural</td>
            <td  colSpan={3}>Urban</td>
             <td  colSpan={3}>Rural+Urban</td>
            <tbody>
             <th></th>
            <th>MALE</th>
            <th>FEMALE</th>
            <th>PERSON</th>
            <th>MALE</th>
            <th>FEMALE</th>
            <th>PERSON</th>
            <th>MALE</th>
            <th>FEMALE</th>
            <th>PERSON</th>
            {rows}
          </tbody></table>
      </div>
        );
    }
}


export class Row extends Component {
    render(){
        var d = this.props.data;
        return (<tr>
            <td>{d.type}</td>
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
