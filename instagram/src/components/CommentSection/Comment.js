import React from 'react';

const Comment = props => {
	return (
		<div>
			<h4>{props.comment.text}</h4>
			<p> - {props.comment.username}</p>
		</div>
	)
}

export default Comment;