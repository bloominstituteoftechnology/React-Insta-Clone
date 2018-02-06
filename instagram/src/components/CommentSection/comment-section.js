import React, { Component } from 'react';

function CommentSection(props) {
  console.log(props.comments);
  return (
    <div className='comment-section'>
      <h3>Comment Section</h3>
      {/* <p>{props.comments.map((comment) => {
        return (
          {comment}
        )
      })}</p> */}
    </div>
  )
}

export default CommentSection;