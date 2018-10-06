import React from 'react';
import "./CommentSection.css";

const CommentSection = (props) => {
  console.log(props);
  return <div>
    Comments: 
    <div>
     {props.commentProps.map((comment,i)=> {
       return(
         <div>
          <span>{comment.username}: </span>
          <span>
            {comment.text}
          </span>
         </div>
       )
     })} 
    </div>
  </div>
}
export default CommentSection;