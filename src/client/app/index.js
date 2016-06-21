import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppRoot from './components/app.jsx';
import rootApp from './reducers/app.js';

const store = createStore(rootApp, undefined,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

ReactDOM.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('app')
);
