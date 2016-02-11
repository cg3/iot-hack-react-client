import {createReducer} from '../utils';

const initialState = {
  light: [],
  lightValue: 0,
  sound: [],
  soundValue: 0,
  temperature: [],
  temperatureValue: 0,
  vibration: [],
  vibrationValue: 0,
  accelerometerValue: {x: 0, y: 0, z: 0}
};

export default createReducer(initialState, {
  ['CHART_SUCCESS']: (state, payload) => {

    return Object.assign({}, state, {
      light: [
        ...state.light.slice(-25), {x: new Date().getTime(), y: payload.light}
      ],
      lightValue: payload.light,
      sound: [
        ...state.sound.slice(-25), {x: new Date().getTime(), y: payload.sound}
      ],
      soundValue: payload.sound,
      temperature: [
        ...state.temperature.slice(-25), {x: new Date().getTime(), y: payload.temperature}
      ],
      temperatureValue: payload.temperature,
      vibration: [
        ...state.vibration.slice(-25), {x: new Date().getTime(), y: payload.vibration}
      ],
      vibrationValue: payload.vibration,
      accelerometerValue: payload.accelerometer
    });
  }
});
