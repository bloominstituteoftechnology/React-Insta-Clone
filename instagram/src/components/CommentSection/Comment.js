import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
	return (
		<div className='comment-section'>
			<strong>{props.comment.username}</strong>{props.comment.text}
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.object
};

export default Comment;
