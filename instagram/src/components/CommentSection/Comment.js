import React from 'react';
import './Comment.css';
const Comment = props => {
    return (
        <div className="comment-container">
            <div className="username">{props.username}</div>
            <div className="comment">{props.text}</div>
        </div>
    )
}

export default Comment;