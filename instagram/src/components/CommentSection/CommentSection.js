import React from 'react';

import './CommentSection.css';


const CommentSection = props => (
  <div className='comment-section'>
    Comment Section!!
    {props.comments.map(comment => (
      <div>
        <p>{comment.username}</p>
        <p>{comment.text}</p>
      </div>
    ))}
  </div>
);


export default CommentSection;