import React from 'react';
import './comment.css';

const Comment = props => {
    return (
        <div className="comments">
            <span className="comment">{props.comments.text}</span>{' '}
            <span className="username">{props.comments.username}</span>
            
        </div>

    );
};

export default Comment;