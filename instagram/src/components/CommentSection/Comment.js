import React from "react";

const Comment = props => {
	return (
		<div className='comment'>
			<h1>{props.comment.username}</h1>
			<p>{props.comment.text}</p>
		</div>
	);
};
export default Comment;
