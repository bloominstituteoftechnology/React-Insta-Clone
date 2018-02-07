import React from 'react';
import './comment-section.css'

function CommentSection(props) {
  // console.log(props);
  return (
    <div className='comment-section'>
      <h6>{props.username}</h6>
      <p>{props.text}</p>
    </div>
  )
}

export default CommentSection;