import React from 'react';

import "./CommentSection.css";

const CommentSection = ({ comments }) => {
  return (
    <div>
      { comments.map((comment, i) => 
          <div key={i} className="comment">
            <div className="name">{comment.username}</div>
            <div className="message">{comment.text}</div>
          </div>
      )}      
    </div>
  );
}

export default CommentSection;
