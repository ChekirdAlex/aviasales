import { combineReducers } from 'redux';

import { stopBoxReducer } from './stop-box-reducer';

const rootReducer = combineReducers({ stopBox: stopBoxReducer });

export default rootReducer;
