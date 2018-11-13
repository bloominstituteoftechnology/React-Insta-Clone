import React from 'react';
import PropTypes from 'prop-types'

const Comment = (props) => {
	return (
		<form onSubmit={props.AddComment}>
			<input
				type="text"
				name="commentInput"
				placeholder="Add a comment ..."
				value={props.commentInput}
				onChange= {(event) => {
					props.handleChange(event)
				}}
			/>
		</form>
	);
};

Comment.propTypes = {
	AddComment: PropTypes.func,
	commentInput: PropTypes.string,
	handleChange: PropTypes.func
};


export default Comment;
