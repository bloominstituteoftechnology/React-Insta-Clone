import React, { Component } from 'react';

import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.post.comments
        };
    }

    render() {
        return (
            <div className= 'PostContainer'>
                <CommentSection comments={ this.state.comments } />
            </div>
        )
    }
}

export default PostContainer;

