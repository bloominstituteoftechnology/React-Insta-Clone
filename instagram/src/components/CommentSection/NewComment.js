import React from 'react';

const Comment = (props) => {
	return (
		<form onSubmit={props.AddComment}>
			<input
				type="text"
				name="commentInput"
				placeholder="Add a comment ..."
				value={props.commentInput}
				onChange={props.handleChange}
			/>
		</form>
	);
};

export default Comment;
