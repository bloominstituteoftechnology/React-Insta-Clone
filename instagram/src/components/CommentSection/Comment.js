 import React from 'react';

 const Comment = props => {
  return (	 
      <div className="comment">
       <div class="commentPart">
          <span class="commentUser">{props.username} </span> 
           {props.text}
      </div>

      </div>
  )}
 export default Comment;