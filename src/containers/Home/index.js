import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {routeActions} from 'react-router-redux';

class Home extends Component {

  render() {
    const {dispatch} = this.props;
    return (
       <ul className="device-list clearfix">
      <li className="device-item card two-col">
        <img className="device-img" src={require('../../img/iot-go-peach.png')}/>
        <h4 className="device-name"><a onClick={() => dispatch(routeActions.push('/device'))}>Box one</a></h4>
      </li>

      <li className="device-item card two-col">
        <img className="device-img" src={require('../../img/iot-go-red.png')}/>
        <h4 className="device-name"><a onClick={() => dispatch(routeActions.push('/device'))}>Box two</a></h4>
      </li>

      <li className="device-item card two-col">
        <img className="device-img" src={require('../../img/iot-go-purple.png')}/>
        <h4 className="device-name"><a onClick={() => dispatch(routeActions.push('/device'))}>Box three</a></h4>
      </li>
      <li className="device-item card two-col">
        <img className="device-img" src={require('../../img/iot-go-pink.png')}/>
        <h4 className="device-name"><a onClick={() => dispatch(routeActions.push('/device'))}>Box four</a></h4>
      </li>
    </ul>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.shape({
    username: PropTypes.string
  })
};

const mapStateToProps = ({auth}) => ({
  auth
});

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
