import React from 'react';
import './comment.css';

const Comment = props => {
    return (
        <div className="comments">
            <span className="comment">{props.comment.text}</span>{' '}
            <span className="username">{props.comment.username}</span>
            
        </div>

    );
};

export default Comment;