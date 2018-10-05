import React from 'react';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';


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

// class CommentSection extends Component {
// 	render() {
// 		return (
// 			<div className='comment-section'>
// 				<header>
// 					Heart Icon  Speech Bubble
// 				</header>
// 				<div className='likes'>
// 					x likes
// 				</div>
// 				<div className='user-comment-section'>
// 				Username CommentSection
// 				</div>
// 				<div className='post-time'>
// 					x time ago
// 				</div>
// 				<div className='comment-bar'>
// 					Form box 3 dots
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default CommentSection;