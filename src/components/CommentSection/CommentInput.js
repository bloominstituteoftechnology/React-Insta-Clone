import React from 'react';
import EachComment from './EachComment.js';
import './CommentSection.css';

const CommentInput = (props) => {
  console.log();
   return(
     <div className="Comment">
       <input type='text' name="newComment"  onChange={props.input.addNewComment}/>
       <button onClick={props.input.addNewComment}>Submit</button>

</div>
)}
export default CommentInput
