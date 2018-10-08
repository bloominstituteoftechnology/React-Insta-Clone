import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';

const Post = () => {
    return (
        <div className="post">
            <PostHeader />
            <PostContent />
            <CommentSection />
        </div>
    );
}

export default Post;
