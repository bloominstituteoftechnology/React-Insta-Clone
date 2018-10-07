import React from 'react';
import "./CommentSection.css";

const CommentSection = (props) => {
  console.log(props);
  return <div><strong>COMMENTS </strong>
    
    <div className="Comments">
     {props.commentProps.map((comment,i)=> {
       return(
         <div><strong>


          <span>{comment.username}: </span>
          </strong>
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