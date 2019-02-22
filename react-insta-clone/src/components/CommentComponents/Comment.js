import React from 'react';

const Comment = props => {
  return (
    <div>
      <p>
      <span><b>{props.newComment.username}</b> </span>
      <span>{props.newComment.text}</span>
      </p>
    </div>
  )
};

export default Comment;
