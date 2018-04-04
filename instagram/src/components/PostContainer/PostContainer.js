import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
	// alert('made it!');
	// console.log(props.dummy);
  return (
  	<div>
  		{props.dummy.map(post => {
  			<div><CommentSection commentList={post.comments}/></div>
  		})}
  	</div>
  )
}

export default PostContainer;
