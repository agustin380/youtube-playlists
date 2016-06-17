import { createStore } from 'redux';
import rootApp from './reducers.js';

const store = createStore(rootApp, undefined,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
