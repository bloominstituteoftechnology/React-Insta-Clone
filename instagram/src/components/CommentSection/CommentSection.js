import React from 'react';

const Comment = props => {
	return(
		<div>
			{props.comment.map(comments => (
				<div>{<strong>{comments.username}</strong>} {comments.text}</div>
			))}
		</div>
	);
	
};

export default Comment;