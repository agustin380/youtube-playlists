import { combineReducers } from 'redux';
import player from '../player/reducers.js';
import playlist from '../playlist/reducers.js';
import playlistForm from '../form/reducers.js';


const rootApp = combineReducers({
  player,
  playlist,
  playlistForm,
});

export default rootApp;
