import React from 'react';



const Comment = props => {
  return (
    <div>
      <span>{props.comments.username}</span>{' '}
      <span>{props.comments.text}</span>
      
    </div>
  );
};


export default Comment;
