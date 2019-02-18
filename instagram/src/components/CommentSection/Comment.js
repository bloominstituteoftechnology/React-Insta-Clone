import React from 'react';

const Comment = ({ text, username }) => (
  <div>
    <span className="username">{username}</span>
    {' ' + text}
  </div>
);

export default Comment;
