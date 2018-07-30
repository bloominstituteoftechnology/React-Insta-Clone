import React from 'react';
import './Card.css';

const Comments = ({ timestamp, comments }) => {
  return (
    <div className="Card__comments">
      {comments.map(({ username, text }, i) => (
        <div key={i} className="Card__comment">
          <p>
            <span className="Card__comment-user">{username}</span>
            {text}
          </p>
        </div>
      ))}
      <div className="Card__last-comment">{timestamp}</div>
    </div>
  );
};

export default Comments;
