import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
	// alert('made it!');
	// console.log(props.dummy);
  return (
  	<div>
  	
  		<CommentSection commentList={props.commentList} />
  	</div>
  );
}

export default PostContainer;
