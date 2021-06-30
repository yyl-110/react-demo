/*
 * @Author: your name
 * @Date: 2021-06-19 16:48:33
 * @LastEditTime: 2021-06-30 11:22:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first-demo/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import './App.scss'
import Router from './router'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router />
    {/* <App /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
