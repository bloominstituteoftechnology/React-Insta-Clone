import React from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css';
function CommentSection(props) {
  return (
    <div className="CommentSection">
      {props.comments.map(comment => (
        <Comment comment={comment} key={comment.username + Math.random()} />
      ))}
    </div>
  );
}
export default CommentSection;
