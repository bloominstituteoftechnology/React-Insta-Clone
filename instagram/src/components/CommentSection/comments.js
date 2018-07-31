import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
      <div className="comment-text">
        <span className="comment">{props.comment.text}</span>{' '}
        <span className="user">-{props.comment.username}</span>
      </div>
    );
  };

  export default Comment;