import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();