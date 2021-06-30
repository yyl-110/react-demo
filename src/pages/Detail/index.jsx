import React, { Component } from 'react';

class index extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                详情页面{this.props.location.query.name}
            </div>
        );
    }
}

export default index;
