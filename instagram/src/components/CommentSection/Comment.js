import React from 'react';
import PropTypes from 'prop-types';
import "./comment.css";




const Comment = (props) => {
	return (
		<div>
		<p><span className="make-bold">{props.comment.username}</span> {props.comment.text}</p>
		</div>
	)
}

Comment.propTypes = {
	comment: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
		username: PropTypes.string,
	})
}

export default Comment;