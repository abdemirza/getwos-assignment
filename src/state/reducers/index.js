import {combineReducers} from 'redux';
import {trackReducer} from './trackReducer';
export const rootReducer = combineReducers({
  track: trackReducer,
});
