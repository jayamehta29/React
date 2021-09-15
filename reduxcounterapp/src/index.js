import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store";
import {Provider} from 'react-redux';
//change listener
store.subscribe(()=>console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    {/* centralised data provided to the main App */}
    <Provider store={store}>
    <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
