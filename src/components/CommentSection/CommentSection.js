import React from 'react';
import EachComment from './EachComment.js'
const CommentSection = (props) => {
  console.log(props);
   return(
     <div className="Comment">
{props.comments.map(comment => <EachComment comments={comment} />)}
<input type='text' name="text" onChange={props.handleChange} />
<button onClick={props.addNewComment}>Submit</button>
</div>
)}
export default CommentSection
