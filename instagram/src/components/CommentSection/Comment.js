import React from 'react';

const Comment = (props) => {
	return (
		<div className="comment-item">
			<h4>{props.comment.username}</h4><p>{props.comment.text}</p>
		</div>
	);
};

export default Comment;