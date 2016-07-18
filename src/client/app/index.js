import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoot from './components/app.jsx';
import { store } from './reducers/app.js';

ReactDOM.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('app')
);
