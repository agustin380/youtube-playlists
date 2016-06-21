import { combineReducers } from 'redux';
import player from './player.js';
import playlist from './playlist.js';


const rootApp = combineReducers({
  player,
  playlist,
});

export default rootApp;
