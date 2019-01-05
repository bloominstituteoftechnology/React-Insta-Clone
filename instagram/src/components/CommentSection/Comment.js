 import React from 'react';
 const Comment = props => {
  return (	 
      <div className="comment">
       <div class="commentPart">
          <span class="comment-user">{props.username} {props.text}</span> 
      </div>
      </div>
  )}
 export default Comment;