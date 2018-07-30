import React from 'react';
import './comment.css';

const CommentDisplay = props => {
  return(
    <div className="comment">
      <p><strong>{props.comment.username}</strong> {props.comment.text}</p>
    </div>
  );
};

export default CommentDisplay;
