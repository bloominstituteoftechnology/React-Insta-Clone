import React, { Component } from 'react';

import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts
        };
    }

    render() {
        return (
            <div className= 'PostContainer'>
                <CommentSection comments={ this.state.posts.comments } />
            </div>
        )
    }
}

export default PostContainer;

