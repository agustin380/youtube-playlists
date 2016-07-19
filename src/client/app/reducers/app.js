import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import player from './player.js';
import playlist from './playlist.js';


const rootApp = combineReducers({
  player,
  playlist,
});

export const store = createStore(rootApp, undefined, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
