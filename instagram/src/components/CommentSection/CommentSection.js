import React from 'react';



const Comment = props => {
  return (
    <div> 
    {props.posts.map((username,i) =>  {key={i} username=username )}
     
      <span>{props.comments.text}</span>
      <span>-{props.comments.username}</span>
    </div>
  
  );
};



export default Comment;