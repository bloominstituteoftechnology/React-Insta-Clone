import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
	return (
		<div
			className="Comment"
			id={
				props.comment.id ||
				props.comment.username + '/' + Math.round(Math.random() * 1000000)
			}
		>
			<div className="comment-container">
				<a href="/" className="username">
					{props.comment.username}
				</a>
				<span className="comment-text">{props.comment.text}</span>
			</div>

			{props.comment.username === 'You' && (
				<button
					id="delete-comment"
					title="Delete Comment"
					className="sprite"
					onClick={() => props.deleteComment(props.comment.id)}
				/>
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
