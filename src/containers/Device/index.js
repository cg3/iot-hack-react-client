import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {socket} from '../socket';
import LineGraph from '../../components/LineChart';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/charts';

// const lineData = [
// {
//   values: [ { x: 0, y: 20 }, { x: 24, y: 10 } ],
//   strokeWidth: 3,
//   strokeDashArray: "5,5",
// },
// {
//   values: [ { x: 70, y: 60 }, { x: 76, y: 60 } ]
// }
// ];
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      light: 0,
      sound: 0,
      temperature: 0,
      accelerometer: {x: 0, y: 0, z: 0},
      vibration: 0
    };
  }

  componentDidMount() {
    this.socket = socket.on('data', (data) => {
      if (!data) return;
      this.props.actions.chartDataSuccess(data);
    });
  }

  componentWillUnmount() {
    socket.off('data');
  }

  render() {
    const {sound, temperature, accelerometer, vibration} = this.state;
    const {charts: {light, lightValue}} = this.props;

    return (
        <div className="device-view-container">
      <div className="card">
        <label>Device name</label>
        <h2>Box one</h2>
      </div>

      <div className="card">
        <label>Device Location</label>
        <h2>IOT Expo fire escape</h2>
      </div>

      <a href="device-edit.html" className="btn btn-full-width">Edit Device settings</a>

      <ul className="sensor-list">
        <li className="sensor-item card">
          <label>Light sensor</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>LUX</label>
              <span className="1-light">{lightValue}</span>
            </div>
            <div className="sensor-readout-graph light-graph"><LineGraph lineData={light}/></div>
          </div>
        </li>

        <li className="sensor-item card">
          <label>Sound sensor</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>DB</label>
              <span className="1-sound">{sound}</span>
            </div>
            <div className="sensor-readout-graph"></div>
          </div>
        </li>

        <li className="sensor-item card">
          <label>Temperature sensor</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>&deg; C</label>
              <span className="1-temperature">{temperature}</span>
            </div>
            <div className="sensor-readout-graph"></div>
          </div>
        </li>

        <li className="sensor-item card">
          <label>Vibration sensor</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>G</label>
              <span className="1-vibrate">{vibration}</span>
            </div>
            <div className="sensor-readout-graph"></div>
          </div>
        </li>

        <li className="sensor-item card">
          <label>Accelerometer</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>XYZ</label>
              <span className="1-accelerometer x-value">{accelerometer.x}</span>
              <span className="1-accelerometer y-value">{accelerometer.y}</span>
              <span className="1-accelerometer z-value">{accelerometer.z}</span>
            </div>
            <div className="sensor-readout-graph"></div>
          </div>
        </li>
      </ul>
    </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.shape({
    username: PropTypes.string
  })
};

const mapStateToProps = ({charts}) => ({
  charts
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
