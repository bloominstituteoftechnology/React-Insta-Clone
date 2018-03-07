import React from 'react';

const CommentSection = props => {
  return (
    <div>
      {props.words.map(comment => {
        return (
          <div>
            <div>{comment.username}</div>
            <div>{comment.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
