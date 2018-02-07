import React from 'react';
import styles from './CommentSection.css';

const CommentSection = (props) => {
  return (
    JSON.parse(props.comments).map((comment, i) => {
      return (
        <div key={i} className="comment">
          <strong>{comment.username}</strong>
          &ensp;{comment.text}
        </div>
      )
    })
  );
};

export default CommentSection;