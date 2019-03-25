import React from 'react';

const Comment = props => {
  return (
    <p key={props.id}>
      <span className="username">{props.username} </span>
      {props.text}
    </p>
  );
};

export default Comment;
