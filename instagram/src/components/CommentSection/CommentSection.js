import React from 'react';

const CommentSection = props => (
  <div>
    {props.comments.map((c, i) => (
      <div key={i}>
        <span className="username">{c.username}</span>
        {c.text}
      </div>
    ))}
  </div>
);

export default CommentSection;
