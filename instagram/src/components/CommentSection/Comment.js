 import React from 'react';
 const Comment = props => {
  return (	 
      <div className="comment">
       <div class="commentPart">
          <div class="comment-user">{props.username} {props.text}</div> 
      </div>
      <div className="addComment">
        <input value="Add a comment..." />
        <div className="threeDots">...</div>
      </div>
      </div>
  )}
 export default Comment;