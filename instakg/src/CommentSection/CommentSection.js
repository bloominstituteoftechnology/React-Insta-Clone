import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

 const CommentSection = (props) =>{
   
   return(
    <div className ='comment'>
    <span className='userName'> {props.data.username}</span>
    <span className='userComment'>{props.data.text}</span>
    </div> 
  )
}
CommentSection.propTypes = {
   data: PropTypes.shape({
       username:PropTypes.string.isRequired,
       text:PropTypes.string.isRequired,
   })
}

export default CommentSection;