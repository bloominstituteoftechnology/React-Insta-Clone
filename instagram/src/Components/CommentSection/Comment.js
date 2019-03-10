import React from 'react';
import './commentSection.css'


 const Comment = props => {
  return (
    <div className='username-text'>
      <div className='username'>
        <div className='username'><strong>{props.comment.username}</strong></div> 
      </div>
      <div className='text'>
        <p>{props.comment.text}</p>
      </div>
      
    </div>
   
    
  );
};
 export default Comment;