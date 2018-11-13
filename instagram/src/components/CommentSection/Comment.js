import React from "react";
const Comment = props => {
 return (
   <div className="comment-container">
     <p>
       <span>{props.data.username}</span> {props.data.text}
     </p>
   </div>
 );
};
export default Comment;