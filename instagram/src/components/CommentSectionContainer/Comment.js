import React from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
	return (
		<div>
			<div className="text">{props.comment.text}</div>
			<div className="user">{props.comment.username}</div>
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.shape({
		text: PropTypes.string,
		username: Proptypes.string
	})
};

export default Comment;