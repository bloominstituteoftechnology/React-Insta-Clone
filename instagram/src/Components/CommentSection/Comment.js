import React, { Component } from 'react';

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }
    
    clicky = () => {
        this.setState({clicked: !this.state.clicked});
    };

    render() {
        return <div onClick = {this.clicky}>{this.props.thing}</div>;
    }
}

export default Comment;