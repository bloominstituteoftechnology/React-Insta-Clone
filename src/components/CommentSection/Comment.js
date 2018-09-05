import React from 'react';
import EachComment from './EachComment.js';
import './CommentSection.css';

const Comment = (props) => {
  console.log();
   return(
     <div className="Comment">
{props.userData.map(comment=> <EachComment userData = {comment}/>)}

</div>
)}
export default Comment
