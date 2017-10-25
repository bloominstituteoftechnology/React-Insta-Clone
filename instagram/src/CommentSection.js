import React from 'react';
export const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => {
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
