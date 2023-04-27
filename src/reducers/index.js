import { combineReducers } from 'redux';

import { SET_STOP_BOX, transferStops } from '../actions';

const { ALL } = transferStops;

const stopBox = (state = ALL, action) => {
  switch (action.type) {
    case SET_STOP_BOX:
      return action.stops;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ stopBox });

export default rootReducer;
