/*
 * @Author: your name
 * @Date: 2021-06-19 17:44:35
 * @LastEditTime: 2021-06-30 11:36:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first-demo/src/components/header/index.js
 */
import React, { Component } from 'react';
import styles from './index.scss';
import { connect } from 'react-redux';

class index extends Component {
    constructor(props){
        super(props)
        console.log(props,9999);

    }
    componentDidMount(){
        console.log(this.refs.Header);
    }
    reduce(){
        this.props.dispatch({
            type:'REDUCE_COUNT',
        })
    }
    render() {
        return (
            <div className={styles.box} onClick={this.reduce.bind(this)}>
                <p ref='Header'>这是头部</p>
                {this.props.state.count}
            </div>
        );
    }
}

const myState = state => ({
    state
})

export default connect(myState) (index);