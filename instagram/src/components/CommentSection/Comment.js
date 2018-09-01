import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
	return (
		<div>
			<p>Comment</p>
			<ul>
				<li>Username: {props.comment.username}</li>
				<li>text: {props.comment.text}</li>
			</ul>
		</div>
	)
}

Comment.propTypes = {
	comment: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
	})
}

export default Comment;