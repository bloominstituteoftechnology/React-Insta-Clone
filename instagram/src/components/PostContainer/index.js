import React from 'react';
// import React, { Component } from 'react';
import CommentSection from '../CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
		<div className='post-container'>
			<header className='user-info'>
				{/* <img src={props.userData.thumbnailUrl} alt='user thumbnail' />
				<p>{props.userData.username}</p> */}
				User logo + Username
			</header>
			<div className='post-container-main-img'>
				{/* <img src={props.userData.imageUrl} alt='user posted img' /> */}
				Main IMG
			</div>
			<CommentSection />
		</div>
    )
}


PostContainer.PropTypes = {
	thumbnailUrl: PropTypes.string,
	username: PropTypes.string,
	imageUrl: PropTypes.string,
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