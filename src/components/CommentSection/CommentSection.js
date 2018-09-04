import React from 'react';
import Comment from './Comment.js'
const CommentSection = (props) => {
  console.log(props);
   return(
     <div className="CommentSection">

<p>{props.userData.likes} likes </p>
<Comment userData = {props.userData.comments} />
<p>{props.userData.timestamp}</p>
<form >
  <input id = "addComment" placeholder ="Add Comment" ></input>
<button className ="addCommentButton"  >Submit!</button>
</form>
     </div>
   )
}

export default CommentSection
