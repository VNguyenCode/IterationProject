import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import store from './store.js';

import './styles.scss';


render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  // </BrowserRouter>,
  document.getElementById('contents')
);

