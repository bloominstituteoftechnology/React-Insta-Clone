import React from 'react';
import './Comment.css';



const Comment = props => {
  return (
    <div className='commentList'>
      <h1>{props.comment.text}</h1>
      <h1>{props.comment.username}</h1>
    </div>
  )
}

export default Comment;