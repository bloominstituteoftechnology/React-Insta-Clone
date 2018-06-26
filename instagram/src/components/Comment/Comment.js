import React from 'react';
import './Comment.css';

const Comment = (props) => {
  return (
    <div>
      <p><strong>{props.username}</strong>{props.comment}</p>
    </div>
  );
}

export default Comment;