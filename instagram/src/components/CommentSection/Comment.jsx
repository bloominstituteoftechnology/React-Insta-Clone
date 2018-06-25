import React from 'react';
import './CommentStyles.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>{' '}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

export default Comment;