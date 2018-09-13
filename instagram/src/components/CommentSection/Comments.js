import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection.css';

function Comments(props) {
	return (
		<div className="comments">
			<p>
				<span className="comments-username">{props.comment.username}</span>
				<span>{props.comment.text}</span>
			</p>
		</div>
	);
}

Comments.propTypes = {
	username: PropTypes.string,
	text: PropTypes.string,
};

export default Comments;
