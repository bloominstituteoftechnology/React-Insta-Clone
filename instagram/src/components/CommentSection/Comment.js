import React from 'react';
import './CommentSection.css';

const Comment = props => {
  return(
      <span><span className="user">{props.obj.username}</span>{props.obj.text}</span>
  )
}

export default Comment;
