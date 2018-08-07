import React from '../../node_modules/react';
import './css/CommentSection.css';

const CommentSection = props => {
    return (
  
      <div>
      <commenter>{props.comments.username}</commenter> <comment>{props.comments.text}</comment> 
      
      </div>
    )
  };
export default CommentSection;