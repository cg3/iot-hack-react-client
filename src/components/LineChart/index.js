import React, {Component} from 'react';
import {LineChart} from 'react-d3';

  // (new Date()).getTime()}

export default class MyComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const lineData = [
      {
        name: "series1",
        values: [ { x: 0, y: 20 }, { x: 24, y: 10 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },
      {
        name: "series2",
        values: [ { x: 70, y: 82 }, { x: 76, y: 82 } ]
      }
    ];
    return (
      <LineChart
        legend={true}
        data={lineData}
        width='100%'
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        title="Line Chart"
        yAxisLabel="Altitude"
        xAxisLabel="Elapsed Time (sec)"
        gridHorizontal={true}/>
    );
  }
}
