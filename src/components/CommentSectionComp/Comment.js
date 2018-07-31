import React from 'react';
import './comment-section.css';

const Comment = props => {
  return (
    <div className="comment-section__comment-container">
      <p className="comment-section__comment"><strong>{props.username}</strong> {props.text}</p>
    </div>
  );
}

export default Comment;