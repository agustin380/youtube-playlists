import { combineReducers, createStore } from 'redux';

import player from './player.js';
import playlist from './playlist.js';


const rootApp = combineReducers({
  player,
  playlist,
});

export const store = createStore(rootApp, undefined,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);
