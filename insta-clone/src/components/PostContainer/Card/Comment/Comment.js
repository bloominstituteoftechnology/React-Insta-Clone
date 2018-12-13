import React from 'react';
import './Comment.css';

const Comment = props => {
  const { comment } = props;

  return (
    <div className="commentBox">
      <p><span>{comment.username}</span> {comment.text}</p>
    </div>
  );
};

export default Comment;