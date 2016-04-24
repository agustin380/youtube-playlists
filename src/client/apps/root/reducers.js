import { combineReducers } from 'redux';
import player from '../player/reducers.js';
import playlist from '../playlist/reducers.js';

const rootApp = combineReducers({
  player,
  playlist,
});

export default rootApp;
