import React from 'react';



const Comment = props => {
  return (
    <div>  
      <span>{props.comments.text}</span>
      <span>-{props.comments.username}</span>
    </div>
  
  );
};



export default Comment;