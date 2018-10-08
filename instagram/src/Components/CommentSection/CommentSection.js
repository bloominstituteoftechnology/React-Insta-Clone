import React from 'react';
import './CommentSection.css';
import PostActions from './PostActions';
import PostInfo from './PostInfo';
import CommentContainer from './CommentContainer';
import CommentInput from './CommentInput';


const TM_FILENAME_BASE = () => {
    return (
        <div className="comment-section">
            <PostActions />
            <PostInfo />
            <CommentContainer />
            <time>21 minutes ago</time>
            <CommentInput />
        </div>
    );
}

export default TM_FILENAME_BASE;
