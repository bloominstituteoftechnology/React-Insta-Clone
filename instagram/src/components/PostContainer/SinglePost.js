import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Username from '../Styles/Reusables.js';
import './index.css';

const PostHeader = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 40%;
	margin-bottom: 10px;
`;

const PostHeaderImg = styled.img`
	border-radius: 50%;
	height: 40px;
	margin-right: 15px;
	margin-left: 10%;
`;

const PostMainImg = styled.img`
	margin-bottom: 20px;
	width: 100%;
	max-width: 1024px;
`;

// const SinglePost = props => {
// 	return (
// 		<div key = {props.userData.username + props.userData.timestamp}>
// 			<header className='user-info'>
// 				<img src={props.userData.thumbnailUrl} alt='user thumbnail' />
// 				<p>{props.userData.username}</p>
// 			</header>

// 			<div className='post-container-main-img'>
// 				<img src={props.userData.imageUrl} alt='user posted img' />
// 			</div>
// 		</div>
// 	)
// }

// SinglePost.propTypes = {
// 	thumbnailUrl: PropTypes.img,
// 	username: PropTypes.string,
// 	imageUrl: PropTypes.img,
// }

// SinglePost.defaultProps = {
// 	thumbnailUrl: <img src='http://momentohospitality.com.au/bella-vista-hotel/wp-content/uploads/sites/3/2017/05/Grey-Box.jpeg' alt='grey box' />,
// 	imageUrl: <img src='http://momentohospitality.com.au/bella-vista-hotel/wp-content/uploads/sites/3/2017/05/Grey-Box.jpeg' alt='grey box' />,
// 	username: 'default User',
// }

// export default SinglePost;

const SinglePost = props => {
	return (
		<div key = {props.userData.username + props.userData.timestamp}>
			<PostHeader>
				<PostHeaderImg src={props.userData.thumbnailUrl} alt='user thumbnail' />
				<Username>{props.userData.username}</Username>
			</PostHeader>
			<PostMainImg src={props.userData.imageUrl} alt='user posted img'/>
		</div>
	)
}

SinglePost.propTypes = {
	thumbnailUrl: PropTypes.img,
	username: PropTypes.string,
	imageUrl: PropTypes.img,
}

SinglePost.defaultProps = {
	thumbnailUrl: <img src='http://momentohospitality.com.au/bella-vista-hotel/wp-content/uploads/sites/3/2017/05/Grey-Box.jpeg' alt='grey box' />,
	imageUrl: <img src='http://momentohospitality.com.au/bella-vista-hotel/wp-content/uploads/sites/3/2017/05/Grey-Box.jpeg' alt='grey box' />,
	username: 'default User',
}

export default SinglePost;