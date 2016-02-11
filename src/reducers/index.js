import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import charts from './charts';

export default combineReducers({
  charts,
  routing: routeReducer,
  form: formReducer
});
