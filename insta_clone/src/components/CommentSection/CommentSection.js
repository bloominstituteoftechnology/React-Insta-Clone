import React from 'react';
import Comment from '../Comment/Comment';

function CommentSection({ comments }) {
  return (
    <div>
      {comments.map((c, index) => (
        <Comment text={c.text} username={c.username} key={index} />
      ))}

      <input placeholder="Add a comment" type="text" />
    </div>
  );
}

export default CommentSection;
