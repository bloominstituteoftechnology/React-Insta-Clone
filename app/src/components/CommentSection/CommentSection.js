import React from 'react';
import './CommentSection.css';

function CommentSection(commentData) {
  return (
    <div className="commentData">
      <b>{commentData.comment.username}: </b> {commentData.comment.text}
    </div>
  )
}

export default CommentSection;
