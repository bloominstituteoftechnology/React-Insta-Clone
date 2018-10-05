import React from 'react';

const Comment = props => {
  return (
    <div className="Comment">
      <span className="Comment-User">{props.comment.username}</span>{' '}
      {props.comment.text}
    </div>
  );
};

export default Comment;
