import React from 'react';
import './CommentSection.css';

const EachComment = (props) => {
  console.log(props);
   return(
     <div className="Comment">


<p className = 'commentText'><span>{props.userData.username}: </span>{props.userData.username} {props.userData.text}</p>
     </div>
)}
export default EachComment
