/**
 * Created by rajesh on 6/11/15.
 */
import {Bar} from 'react-chartjs';
import React, { Component } from 'react';
import {Filter} from './chartexm.js';

let BarChart = ({linedata}) => (
    <Filter/>,
    <Bar data={linedata} width="600" height="250"/>
);
export default  BarChart;

