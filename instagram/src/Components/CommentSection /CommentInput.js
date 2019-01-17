import React from 'react';

const CommentInput = (props) => {
	return (
		<form onSubmit={props.submitComment}>
			<input value={props.comment} onChange={props.changeComment} />
		</form>
	);
};
export default CommentInput;
