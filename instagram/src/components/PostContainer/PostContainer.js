import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
    constructor () {
        super();
        this.state = {
            commentPostsArray: []
        }
    }

    componentDidMount() {
        // all I want are is the comments array from each "thing"


    }

    render() {
        // passing an array of comments from my object
        return (
            <div></div>
        );

    }
}

export default PostContainer;