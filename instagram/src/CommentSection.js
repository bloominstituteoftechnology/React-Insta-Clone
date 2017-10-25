import React from 'react';
export const CommentSection = props => {
  return (
    <div>
      {console.log(props.comments)}
      {props.comments.map(comment => {
        return (
          <div>
            {console.log(comment)}
            <div>{comment['username']}</div>
            <div>{comment['text']}</div>
          </div>
        );
      })}
    </div>
  );
};
