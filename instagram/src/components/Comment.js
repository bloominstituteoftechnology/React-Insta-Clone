import React from 'react';

const Comment = props => {
  return (
    <div>
      <p key={props.id}>
        <span className="username">{props.username} </span>
        {props.text}
      </p>
      <p className="timeline">{props.timeStamp}</p>
    </div>
  );
};

export default Comment;
