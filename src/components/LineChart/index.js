import React, {Component} from 'react';
import {LineChart} from 'react-d3';

  // (new Date()).getTime()}

export default class MyComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {lineData} = this.props;

    const graph = lineData.length ? <LineChart
        data={lineData}
        width='100%'
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        title="Lux Chart"
        yAxisLabel="Lux"
        xAxisLabel="Elapsed Time (sec)"
        gridHorizontal={true}/> : <span> {'No Data'} </span>;

    return graph;
  }
}

MyComponent.defaultProps = {
  lineData: []
};