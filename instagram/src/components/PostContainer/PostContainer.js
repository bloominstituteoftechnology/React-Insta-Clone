import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    render() {
        return (
            <div>
                <p>Post Container here</p>
                <CommentSection />
            </div>
        );
    }
}
export default PostContainer;