import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const CommentSection = props => {
    return (
		<div className='comment-section'>
			<header>
			<img src='https://techflourish.com/images/instagram-icon-clipart-panda-18.jpg' alt='Heart Icon' />
			<img src='https://static.thenounproject.com/png/10342-200.png' alt='Speech Bubble' />
			</header>

			<div className='likes'>
				x likes
			</div>

			<div className='user-comment-section'>
				{/* <span className='username'>{props.comment.username}</span>
				<span>{props.comment.text}</span> */}
			Username CommentSection
			</div>

			<div className='post-time'>
				x time ago
			</div>

			<div className='comment-bar'>
				Form box 3 dots
			</div>
		</div>
    )
}

// CommentSection.propTypes = {
// 	username: PropTypes.string,
// 	text
// }

export default CommentSection;
