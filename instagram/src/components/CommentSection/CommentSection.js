import React from "react";
// import PostContainer from "./src/components/PostContainer/PostContainer";

const CommentSection = props => {
	// alert('made it!');
	console.log('commentList: ', props.commentList);
  return (
    <div>
    	{props.commentList.map((comment, index) => (
    		[
    			<div>{comment.username}</div>,
    			<div>{comment.text}</div>
    		]
    	))}
    </div>
  );
}

export default CommentSection;
