import React from 'react';

const Comment = props => {
  return (
    <div className="post-comment">
      <span className="post-comment-username">{props.username}</span>
      <span className="post-comment-text">{props.text}</span>
    </div>
  );
}

export default Comment;
