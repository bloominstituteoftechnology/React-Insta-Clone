import React, { Component } from 'react';

function CommentSection(props) {
  // console.log(props);
  return (
    <div className='comment-section'>
      <h3>Comment Section</h3>
      <h4>{props.username}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default CommentSection;