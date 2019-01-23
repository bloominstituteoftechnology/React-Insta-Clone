import React from 'react';

const CommentInput = (props) => {
	return (
		<form onSubmit={props.commentSubmit}>
			<input type="text" value={props.comment} placeholder="Add here" onChange={props.changeComment} />
		</form>
	);
};
export default CommentInput;
