import React from 'react';
import Comment from './Comment';

function CommentSection(props) {
  // console.log(props.comments);
  return (
    <div className="comment-section">
      {props.comments.map((comment) => (
        <Comment comment={comment} key={comment.text} />
      ))}
      <input value="" placeholder="Add a comment..." />
    </div>
  );
}

export default CommentSection;
