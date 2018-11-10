import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div className="comment">
            <span className="comment__name">{props.comment.username}</span> <span className="comment__content">{props.comment.text}</span>
        </div>
    );
}

export default Comment;