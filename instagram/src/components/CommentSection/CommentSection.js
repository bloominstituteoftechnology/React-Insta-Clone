import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

 function CommentSection(props) {
  return (
    <div className="commentSection">
      {props.comments.map((comment) => (
        <Comment comment={comment} key={comment.text} />
      ))}
      <input value="" placeholder="Add a comment..." />
    </div>
  );
}

 export default CommentSection;