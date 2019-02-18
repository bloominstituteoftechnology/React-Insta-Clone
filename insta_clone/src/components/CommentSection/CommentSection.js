import React from 'react';
import Comment from '../Comment/Comment';

function CommentSection({ comments }) {
  return (
    <div>
      {comments.map((c, index) => (
        <h3 key={index}>{c.username}</h3>
      ))}

      <input placeholder="Add a comment" type="text" />
    </div>
  );
}

export default CommentSection;
