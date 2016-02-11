import {createReducer} from '../utils';

const initialState = {
  light: [],
  lightValue: 0
};

export default createReducer(initialState, {
  ['CHART_SUCCESS']: (state, payload) => {

    return Object.assign({}, state, {
      light: [
        ...state.light, {x: new Date().getTime(), y: payload.light}
      ],
      lightValue: payload.light
    });
  }
});
