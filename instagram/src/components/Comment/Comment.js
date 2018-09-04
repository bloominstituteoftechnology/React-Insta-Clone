import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

class Comment extends React.Component {
	render() {
		return (
			<div className="Comment">
				<a href="/" className="username">
					{this.props.comment.username}
				</a>
				<span className="comment-text">{this.props.comment.text}</span>
			</div>
		);
	}
}

Comment.propTypes = {
	comment: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	})
};

export default Comment;
