import React from 'react';

const Comment = props => {
  return (
    <div className="comment">
      <div className="username">{props.comment.username}</div>
      <p className="text">{props.comment.text}</p>
    </div>
  );
}

export default Comment;