import React, { Component } from 'react';


const Comments = (props) => {
  return (
    <div className='comment'>
      {props.comments.map((comment) => {
        return (
          <div className='comment_column'>
            <div className='comment_center'>
              <div className='comment_user'>{comment.username}</div>
              <div className='comment_text'>{comment.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
