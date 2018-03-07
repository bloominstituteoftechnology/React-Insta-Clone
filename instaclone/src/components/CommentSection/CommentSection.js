import React from 'react';

export const CommentSection = (props) => {

  return (
    <div>
      {props.post.map((comments) => {
        return <div>{comments.comment}</div>
      })}
    </div>
  );

}