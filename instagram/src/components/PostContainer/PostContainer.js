import React from 'react'
import './PostContainer.css';
import CommentSection from './CommentSection/CommentSection'

function PostContainer (props) {
    return (
        <div className="post-container">
            <h1>Post-container</h1>
            <CommentSection comments={props.post.comments} />
        </div>
    );
}

export default PostContainer;