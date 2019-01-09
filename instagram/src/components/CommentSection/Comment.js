import React from 'react';
import PropTypes from 'prop-types'

const Comment = props => {
	return (
		<div>
			<h4>{props.comment.text}</h4>
			<p> - {props.comment.username}</p>
		</div>
	)
}

Comment.propTypes = {
	comment: PropTypes.shape({
		text:PropTypes.string,
		username: PropTypes.string
	})
}


export default Comment;