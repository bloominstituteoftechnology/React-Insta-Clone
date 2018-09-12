import React from 'react';
import './CommentSection.css';

const EachComment = (props) => {
  console.log(props);

   return(
     <div className="Comment">


<p><span>{props.comments.username}: </span> {props.comments.text}</p>

     </div>
)}
export default EachComment
