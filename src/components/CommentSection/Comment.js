import React from 'react';
import EachComment from './EachComment.js';
import './CommentSection.css';
import CommentInput from './CommentInput.js'
const Comment = (props) => {
  console.log(props);
   return(
     <div className="Comment">
<CommentInput userData = {props.userData.comments} handleChange = {props.handleChange} addNewComment={props.addNewComment} />
</div>
)}
export default Comment
