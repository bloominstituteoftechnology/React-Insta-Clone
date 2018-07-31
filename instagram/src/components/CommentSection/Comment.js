import React from 'react';
import './CommentSection.css';

const Comment = props => {
    return (
        <div className="comment-section">
            <span className="comment-username"><b>{props.comment.username}</b></span>{' '}
            <span>{props.comment.text}</span>
        </div>
    );
}

export default Comment;