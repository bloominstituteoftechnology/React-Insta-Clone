import React from '../../node_modules/react';


const CommentSection = props => {
    return (
  
      <div>
      {props.comments.username} {props.comments.text} 
      
      </div>
    )
  };
export default CommentSection;