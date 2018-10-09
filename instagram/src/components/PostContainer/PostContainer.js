import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes,
            comments: props.post.comments
        }
    }

    render() {
        // post container header here
        console.log(this.state.comments);
        return (
            <CommentSection likes={this.state.likes} comments={this.state.comments} />
        );
    }
}

export default PostContainer;