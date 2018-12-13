import React from 'react';

const Comment = props => {
  const { comment } = props;

  return (
    <div>
      <p>{comment.username}</p>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;