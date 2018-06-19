import React from 'react';

const Comment = (props) => {
	return (
		<div className="comment-item">
			<p><span className='username'>{props.comment.username}</span> {props.comment.text}</p>
		</div>
	);
};

export default Comment;