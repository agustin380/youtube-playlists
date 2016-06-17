import { combineReducers } from 'redux';
import player from './player.js';
import playlist from './playlist.js';
import playlistForm from './form.js';


const rootApp = combineReducers({
  player,
  playlist,
  playlistForm,
});

export default rootApp;
