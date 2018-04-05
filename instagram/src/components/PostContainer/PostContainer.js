import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
	// alert('made it!');
	// console.log('dummy datalist: ', props.dummy);
  return (
  	<div>
  		{props.dummy.map((post, index) => (
			<CommentSection key={index} commentList={post.comments} />	
  		))}
  	</div>
  );
}

export default PostContainer;
