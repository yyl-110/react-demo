/*
 * @Author: your name
 * @Date: 2021-06-19 17:35:01
 * @LastEditTime: 2021-06-30 14:31:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first-demo/src/store/reducer.js
 */
import * as constants from './contants'

// 初始默认的state
const defaultState = {
    myData: null,
    count:1
}

export default (state = defaultState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case constants.SET_DATA:
            newState.myData = action.data
            return newState
        case constants.ADD_COUNT:
            newState.count++
            console.log(newState);
            return newState
            case constants.REDUCE_COUNT:
            newState.count--
            return newState
        default:
            return state
    }
}