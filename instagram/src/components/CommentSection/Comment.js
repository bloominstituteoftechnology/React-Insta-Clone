import React from 'react';
import PropTypes from 'prop-types';

const Comment = props =>{
    
    return (
      <div >
         <p> {props.username} {props.text}</p>
      </div>
    )
}



export default Comment;
