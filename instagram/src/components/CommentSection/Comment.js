import React from 'react';
import PropTypes from 'prop-types';

const Comment = props =>{
    
    return (
      <div className="d-flex " >
         <p className="user-name pr-1 font-weight-bold"> {props.username}</p> 
         <p className="comment-text">{props.text}</p>
      </div>
    )
}



export default Comment;
