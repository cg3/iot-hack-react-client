import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {socket} from '../socket';
import {routeActions} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/charts';

class Home extends Component {

  render() {
    const {dispatch} = this.props;

    return (
        <div className="device-edit-container">
      <div className="card">
        <label>Device name</label>
        <input type="text" value="Box one"/>
      </div>

      <div className="card">
        <label>Device Location</label>
        <input type="text" value="IOT Expo fire escape"/>
      </div>

      <ul className="sensor-list">
        <li className="sensor-item card clearfix">
          <h4 className="sensor-name">Light sensor</h4>
          <span onclick="toggleSwitch(this)" className="toggle inactive"></span>
        </li>

        <li className="sensor-item card clearfix">
          <h4 className="sensor-name">Sound sensor</h4>
          <span onclick="toggleSwitch(this)" className="toggle inactive"></span>
        </li>

        <li className="sensor-item card clearfix">
          <h4 className="sensor-name">Temperature sensor</h4>
          <span onclick="toggleSwitch(this)" className="toggle inactive"></span>
        </li>

        <li className="sensor-item card clearfix">
          <h4 className="sensor-name">Vibration sensor</h4>
          <span onclick="toggleSwitch(this)" className="toggle inactive"></span>
        </li>

        <li className="sensor-item card clearfix">
          <h4 className="sensor-name">Accelerometer</h4>
          <span onclick="toggleSwitch(this)" className="toggle inactive"></span>
        </li>
      </ul>

      <a onClick={() => dispatch(routeActions.push('/device'))} className="btn btn-full-width">Close</a>
      </div>
    );
  }
}

const mapStateToProps = ({charts}) => ({
  charts
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
