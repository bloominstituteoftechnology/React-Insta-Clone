import React from 'react';

const CommentSection = ({ comments }) => {
  console.log(comments)
  return (
    <div>
      { comments.map((comment, i) => 
          <div key={i}>
            <div className="name">{comment.username}</div>
            <div className="message">{comment.text}</div>
          </div>
      )}      
    </div>
  );
}

export default CommentSection;
