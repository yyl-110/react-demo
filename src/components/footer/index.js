/*
 * @Author: your name
 * @Date: 2021-06-19 17:45:34
 * @LastEditTime: 2021-06-30 11:03:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first-demo/src/components/footer/index.js
 */
import React, { Component } from 'react'
import store from '../../store'

export default class index extends Component {
    constructor(props){
        super(props)
        console.log(store.getState());
        this.state = {
            count:store.getState().count
        }
    };

    add(){
        store.dispatch({
         type: "ADD_COUNT",
         data:1
        });
    }
   

    render() {
        store.subscribe(() =>{
            this.setState({
                     count: store.getState().count
                     })
        });

        return (
            <div>
                这是footer

                <button onClick={this.add}>add</button>
                {this.state.count}
                <button>reduce</button>
            </div>
        )
    };
}
