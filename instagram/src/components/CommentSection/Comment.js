import React from 'react';
import './Comments.css';


const Comment = props => {
  console.log(props)
  return (
    <div>
      <p><span>{props.comment.username}</span>{props.comment.text}</p>
    </div>
  )
}

export default Comment;
