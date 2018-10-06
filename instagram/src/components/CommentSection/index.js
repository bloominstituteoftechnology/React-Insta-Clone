import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const CommentSection = props => {
    return (
		<div className='comment-section'>
			<div className='user-comment-section'>
				<span className='comment-username'>{props.comment.username}</span>
				<span>{props.comment.text}</span>
			</div>

		</div>
    )
}

CommentSection.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default CommentSection;
