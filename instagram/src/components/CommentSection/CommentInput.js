import React from 'react';

const CommentInput = (props) => {
	return (
		<form onSubmit={props.submitComment} className="inputContainer">
			<input
				type="text"
				value={props.comment}
				placeholder="Add comment... "
				onChange={props.changeComment}
				className="inputComment"
			/>
		</form>
	);
};

export default CommentInput;
