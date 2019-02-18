import React from 'react';

function CommentSection({ comments }) {
  return (
    <div>
      {comments.map((c, index) => (
        <h3 key={index}>{c.username}</h3>
      ))}
    </div>
  );
}

export default CommentSection;
