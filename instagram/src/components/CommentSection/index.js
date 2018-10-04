import React from 'react';
// import React, { Component } from 'react';

const CommentSection = props => {
    return (
		<div className='comment-section'>
			<header>
				Heart Icon  Speech Bubble
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