export const SET_STOP_BOX = 'SET_STOP_BOX';

export const transferStops = {
  ALL: 'ALL',
  NON_STOP: 'NON_STOP',
  ONE_STOP: 'ONE_STOP',
  TWO_STOPS: 'TWO_STOPS',
  THREE_STOPS: 'THREE_STOPS',
};

export const setStopBox = (stops) => ({ type: SET_STOP_BOX, stops });
