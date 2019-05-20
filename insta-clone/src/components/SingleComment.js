//Single comment
import React from 'react';

const Comment = props => {
  return (
    <div>
      <span>{props.comment.text}</span>
      <span>{props.comment.username}</span>
    </div>
  );
};

export default Comment;
