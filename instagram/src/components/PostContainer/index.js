import React from 'react';
// import React, { Component } from 'react';
import CommentSection from '../CommentSection';

const PostContainer = props => {
    return (
		<div className='post-container'>
			<header>
				User logo + Username
			</header>
			<div className='post-container-main-img'>
				Main IMG
			</div>
			<CommentSection />
		</div>
    )
}

export default PostContainer;

// class PostContainer extends Component {
// 	render() {
// 		return (
// 			<div className='post-container'>
// 				<header>
// 					User logo + Username
// 				</header>
// 				<div className='post-container-main-img'>
// 					Main IMG
// 				</div>
// 				<CommentSection />
// 			</div>
// 		);
// 	}
// }

// export default PostContainer;