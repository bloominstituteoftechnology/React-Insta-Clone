import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
  return (
    <div>
      {
        props.comments.map(comment => {
          return (
            <p key={comment.text}>{comment.text}</p>
          );
        })
      }       
      <input type="text"/>
    </div>
  );
}

export default CommentSection;