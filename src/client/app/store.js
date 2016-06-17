import { createStore } from 'redux';
import rootApp from './reducers/app.js';

const store = createStore(rootApp, undefined,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
