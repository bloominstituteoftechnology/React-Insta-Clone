import React from 'react';
import './CommentSection.css';

 const CommentSection = (props) =>{
   return(
    <div className ='comment'>
    <span className='userName'> {props.data.username}</span>
    <span className='userComment'>{props.data.text}</span>
    </div> 
  )
}


export default CommentSection;