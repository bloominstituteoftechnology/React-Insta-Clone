import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div className="comment-wrapper">
          <span className="comment-comment">{props.comment.text}</span>{''}
          <span className="comment-user">{props.comment.username}</span>
        </div>
    );
};

export default Comment;