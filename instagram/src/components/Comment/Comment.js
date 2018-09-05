import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
	return (
		<div className="Comment" id={props.comment.username + '/' + Date.now()}>
			<a href="/" className="username">
				{props.comment.username}
			</a>
			<span className="comment-text">{props.comment.text}</span>
			{props.comment.username === 'You' && (
				<button id="delete-comment" title="Delete Comment" className="sprite" />
			)}
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	})
};

export default Comment;
