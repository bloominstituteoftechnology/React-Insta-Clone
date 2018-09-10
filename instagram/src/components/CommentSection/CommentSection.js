import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';

function CommentSection(props) {
	return (
		<div>
			{props.comments.map((comment) => (
				<Comments key={comment.username} comment={comment} />
			))}
		</div>
	);
}

CommentSection.PropTypes = {
	comment: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string,
	}),
};

export default CommentSection;
