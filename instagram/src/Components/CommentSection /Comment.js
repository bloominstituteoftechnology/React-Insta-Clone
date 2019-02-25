import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
	return (
		<div>
			<div> {props.comment.text}</div>
			<div> {props.comment.username}</div>
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.shape({
		text: PropTypes.string,
		username: PropTypes.string
	})
};
export default Comment;
