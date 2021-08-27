import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.scss'
import 'antd/dist/antd.css';

import { Provider } from "react-redux";
import initializeStore from "./store/init";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={initializeStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);