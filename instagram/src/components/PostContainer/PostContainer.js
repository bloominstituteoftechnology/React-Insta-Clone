import React, { Component } from 'react';
import './PostContainer.css';


class PostContainer extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>{this.props.data}</div>
        )
    }
}

export default PostContainer;