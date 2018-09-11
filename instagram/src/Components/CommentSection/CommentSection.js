import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
  return (
    <div>
      {props.c.map(c => (
        <div className="comments-container">
          <div className="post-comments">
            <div className="poster-id" key={c.username}>
              {c.username}
            </div>
            <div className="post-text" key={c.username}>
              {c.text}
            </div>
            <input className="add-comment" placeholder="Add a comment" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
