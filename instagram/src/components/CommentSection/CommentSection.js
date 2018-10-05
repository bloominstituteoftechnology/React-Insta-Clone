import React from 'react';
import Comment from './Comment';
import './CommentSection.css';
import CommentInput from './CommentInput';

const CommentSection = props => {
  return (
    <div className="CommentSection">
      {props.comments.comments.map(comment => {
        return <Comment comment={comment} />;
      })}
      <div className="TimeStamp">2 Hours Ago</div>
      <CommentInput />
    </div>
  );
};

export default CommentSection;
