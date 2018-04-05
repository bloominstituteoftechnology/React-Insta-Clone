import React from 'react';
import './commentSection.css';

const CommentSection = (props) => {
  return (
    <div className='commentContainer'>
    {props.comments.map((comment, i) => (
      <div className='commentSection'>
        <p className='comment'><span className='commentHeader'>{comment.username}</span> {comment.text}</p>
      </div>
    ))}
      <input
        className='commentBar'
        placeholder='Add a comment...'
      />
    </div>
  );
}
export default CommentSection;
