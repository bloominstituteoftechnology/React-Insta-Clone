import React from 'react';
import './comment-section.css';

const Comment = props => {
  return (
    <div className="comment-section__user-comments">
      <p><strong>{props.username}</strong> {props.text}</p>
    </div>
  );
}

export default Comment;