import { createStore } from 'redux';
import rootApp from './reducers.js';

const store = createStore(rootApp);

export default store;
