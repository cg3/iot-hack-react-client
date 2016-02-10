import React, {Component} from 'react';
import {routeActions} from 'react-router-redux';

class MainLayout extends Component {
  render() {
    return (<div>
        <header className="app-header">
          <h1 className="branding"><a href="index.html">IOT GO</a></h1>
        </header>
        <div className="main-container">
          {this.props.children}
        </div>
    </div>);
  }
}


export default MainLayout;
