import React from 'react';
import './commentSection.css'


 const Comment = props => {
  return (
    <div className='username-text'>
        <div className='username'><strong>{props.comment.username}</strong></div> <p>{props.comment.text}</p>
    </div>
      
    
  );
};
 export default Comment;