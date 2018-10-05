import React from 'react';
import "../../App.css"

const Comment = props => {
    return (
       <div className="commentUser">
      <div className="user"> {props.user}</div> <div className="comment">{props.comments}</div><a className='button' id='commentIcon'></a>
        
              </div>

   ); 
};




export default Comment;