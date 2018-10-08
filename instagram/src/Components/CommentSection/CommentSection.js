import React from 'react';
import './CommentSection.css';
import PostActions from './PostActions';
import CommentContainer from './CommentContainer';

const CommentSection = ({likes, timestamp, comments}) => {
    console.log(timestamp);
    console.log(Date.parse(timestamp));
    return (
        <div className="comment-section">
            <PostActions />
            <div className="likes">{likes} likes</div>
            <CommentContainer comments={comments} />
            <time>21 minutes ago</time>
            <div className="comment-input">
                <textarea placeholder="Add a comment..."/>
                <span className="sprite options-icon"></span>
            </div>
        </div>
    );
}

export default CommentSection;
