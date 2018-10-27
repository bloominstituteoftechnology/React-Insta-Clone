import React from 'react';
import './comment.css';

const CommentInput = props => {
	return	(
        
		<form onSubmit={props.submitHandler}>
			<input 
				value={props.comment}
				onChange={props.addNewComment}
				type="text" 
				placeholder="Add comment..."
			/>
		</form>
	);
};

export default CommentInput;