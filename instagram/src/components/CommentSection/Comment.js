import React from 'react';
import "../../App.css"

const Comment = props => {
    return (
       <div className="commentUser">
       {props.user} {props.comments}
        
              </div>

   ); 
};




export default Comment;