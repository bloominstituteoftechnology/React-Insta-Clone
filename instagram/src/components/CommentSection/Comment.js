import React from 'react';

const Comment = props => {
  return (
    <div>
      <p><strong>{props.comment.username}</strong> {props.comment.text}</p>
    </div>
  );
};

export default Comment;
