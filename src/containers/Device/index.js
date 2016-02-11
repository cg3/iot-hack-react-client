import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {routeActions} from 'react-router-redux';
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
    const {dispatch, charts: {light, lightValue, sound, soundValue, temperature, temperatureValue, vibration, vibrationValue, accelerometerValue}} = this.props;

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

      <a onClick={() => dispatch(routeActions.push('/edit'))} className="btn btn-full-width">Edit Device settings</a>

      <ul className="sensor-list">
        <li className="sensor-item card">
          <label>Light sensor</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>LUX</label>
              <span className="1-light">{lightValue}</span>
            </div>
            <div className="sensor-readout-graph light-graph"><LineGraph lineData={light} name="LUX"/></div>
          </div>
        </li>

        <li className="sensor-item card">
          <label>Sound sensor</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>DB</label>
              <span className="1-sound">{soundValue}</span>
            </div>
            <div className="sensor-readout-graph light-graph"><LineGraph lineData={sound} name="Sound"/></div>
          </div>
        </li>

        <li className="sensor-item card">
          <label>Temperature sensor</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>&deg; C</label>
              <span className="1-temperature">{temperatureValue}</span>
            </div>
            <div className="sensor-readout-graph light-graph"><LineGraph lineData={temperature} name="Temperature"/></div>
          </div>
        </li>

        <li className="sensor-item card">
          <label>Vibration sensor</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>G</label>
              <span className="1-vibrate">{vibrationValue}</span>
            </div>
            <div className="sensor-readout-graph light-graph"><LineGraph lineData={vibration} name="Vibration"/></div>
          </div>
        </li>

        <li className="sensor-item card">
          <label>Accelerometer</label>
          <div className="sensor-readout clearfix">
            <div className="sensor-value-container">
              <label>XYZ</label>
              <span className="1-accelerometer x-value">{accelerometerValue.x}</span>
              <span className="1-accelerometer y-value">{accelerometerValue.y}</span>
              <span className="1-accelerometer z-value">{accelerometerValue.z}</span>
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
  actions: bindActionCreators(actionCreators, dispatch),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
