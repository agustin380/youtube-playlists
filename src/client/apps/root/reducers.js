import { combineReducers } from 'redux';
import player from '../player/reducers.js';

const rootApp = combineReducers({
  player,
});

export default rootApp;
