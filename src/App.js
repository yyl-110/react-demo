/*
 * @Author: your name
 * @Date: 2021-06-19 16:53:41
 * @LastEditTime: 2021-06-30 11:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first-demo/src/App.js
 */
import './App.scss';
import store from './store';
import { Provider } from 'react-redux'
import React, {
  Fragment
} from 'react'
import {route} from './router'

function App() {
  return (
    <Provider store={store}>
  <route />
  </Provider>
  )
  
}

export default App