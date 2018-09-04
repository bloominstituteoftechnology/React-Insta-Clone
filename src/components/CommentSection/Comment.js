import React from 'react';
import EachComment from './EachComment.js';
import './CommentSection.css';

const Comment = (props) => {
  console.log(props.userData[0].username);
   return(
     <div className="Comment">
      {props.userData.map(comment=> <EachComment userData = {comment}/>)}
</div>
)}
export default Comment
