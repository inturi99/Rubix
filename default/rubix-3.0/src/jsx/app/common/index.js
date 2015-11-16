
import {Charts} from './chartexm.js';
import React from 'react';
import BarChart from './barchart.js';
import {CommentBox} from './Comments'
import { render } from 'react-dom';
import {LineChart} from './forecast.js';


//render(<KeysExample results={[ {id : 1, text : 'helloububg'}, {id : 2, text : 'world'}, {id: 3, text : 'universe'}]} />,
//     document.getElementById("root"));

// render(<PopChart/>,document.getElementById("root"));


var linedata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {}
    ]
};

//render(<BarChart linedata={linedata}/>,document.getElementById("root"));
//render(<CommentBox data={data}/>,document.getElementById("root"));
//render(<Charts data={linedata}></Charts>,document.getElementById("root"));
render(<LineChart data={linedata}></LineChart>,document.getElementById("root1"));
