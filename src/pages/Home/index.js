/*
 * @Author: your name
 * @Date: 2021-06-19 17:47:48
 * @LastEditTime: 2021-06-30 11:03:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first-demo/src/pages/Home/index.js
 */
import React, { Component } from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from './index.scss'


class index extends Component {
    constructor(){
        super()
this.state = {
    a:1
}
    }
    render() {
        return (
            <div className="container">
                <Header />
                <main className="main" onClick={() => {this.props.history.push({pathname:'/Detail',query:{name:1}})}}>这是首页</main>
                <Footer />
            </div>
        );
    }
}

export default index;