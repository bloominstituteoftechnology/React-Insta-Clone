import React from 'react';
import './CommentSection.css';
import Comment from './Comment';

const CommentSection = props => {
  console.log(props.comments);

  return (
    <div>
      {props.comments.map(comment => {
        return (
          <Comment comment={comment} />
        )
      })}
      <input></input>
    </div>
  );
};

export default CommentSection;
