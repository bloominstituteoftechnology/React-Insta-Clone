import React from 'react';
import './comment-section.css'

function CommentSection(props) {
  // console.log(props);
  return (
    <div className='comment-section'>
      {/* <h6>Comment</h6> */}
      <h5>{props.username}</h5>
      <p>{props.text}</p>
    </div>
  )
}

export default CommentSection;