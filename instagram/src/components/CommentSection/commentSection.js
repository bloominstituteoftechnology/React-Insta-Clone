import React from 'react';
import './commentSection.css';

function CommentSection(props) {
  return (
    <div className="comment">
      <span className="bolded">{props.comment.username}:  </span>  
      <span className="normal">  {props.comment.text}</span>
    </div>
  )
}

export default CommentSection;