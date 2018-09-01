import React from 'react';
import './Comment.css';

const Comment = (props) => {
  return (
    <div className='Comment'>
      <a href="/" className="username">
        {props.comment.username}
      </a>
      <span className="comment-text">
        {props.comment.text}
      </span>
    </div>
  );
}

export default Comment;