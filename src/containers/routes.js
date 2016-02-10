import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import MainLayout from './MainLayout';
import Device from './Device';
import Home from './Home';
import NotFound from './NotFound';

class Root extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path={'/'} component={MainLayout}>
          <IndexRoute component={Home} />
          <Route path={'/device'} component={Device}/>
          <Route path={'*'} component={NotFound}/>
        </Route>
      </Router>
      );
  }
}

export default Root;
