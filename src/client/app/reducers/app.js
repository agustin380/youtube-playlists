import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer as player } from './player.js';
import { reducer as playlist } from './playlist.js';


const rootApp = combineReducers({
  player,
  playlist,
});

export const store = createStore(rootApp, undefined, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
