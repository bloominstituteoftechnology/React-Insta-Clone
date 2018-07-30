import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = () => {
    return (
        <div className="post-container">
            this is the post container
            <CommentSection />
        </div>
    );
}

export default PostContainer;