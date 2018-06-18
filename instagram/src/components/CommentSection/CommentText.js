import React from 'react';
import './CommentSection.css';

const CommentText = (props) => {
  return(
    <span className="comment__text">{props.text}</span>
  );
};

export default CommentText;