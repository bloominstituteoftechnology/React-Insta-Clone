import React, { Component } from "react";
import dummyData from '../../dummy-data.js'
import Post from '../Post/Post.js'

export class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postContent: [...dummyData]
        };
    }

    render() {
        return <div>{this.state.postContent.map((content) => (<Post userPost={content} />))}</div>;
    }
};

export default PostContainer;