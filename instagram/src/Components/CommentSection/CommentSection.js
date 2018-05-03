import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
  return (
    <div>
      {props.comments.map((comment, index) => {
        return (
          <p key={index}><b>{comment.username}</b> {comment.text}</p>
        );
      })}
    </div>
  );
}

export default CommentSection;
