import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const SinglePost = props => {
	return (
		<div>
			<header className='user-info'>
				<img src={props.userData.thumbnailUrl} alt='user thumbnail' />
				<p>{props.userData.username}</p>
			</header>

			<div className='post-container-main-img'>
				<img src={props.userData.imageUrl} alt='user posted img' />
			</div>

			<div className='interactive-action-buttons'>
				<img src='https://techflourish.com/images/instagram-icon-clipart-panda-18.jpg' alt='Heart Icon' />
				<img src='https://static.thenounproject.com/png/9654-200.png' alt='Speech Bubble' />
			</div>

			<div className='likes'>
				<p>{props.userData.likes} likes</p>
			</div>
		</div>
	)
}

SinglePost.PropTypes = {
	thumbnailUrl: PropTypes.img,
	username: PropTypes.string.isRequired,
	imageUrl: PropTypes.img,
}

SinglePost.defaultProps = {
	thumbnailUrl: <img src='http://momentohospitality.com.au/bella-vista-hotel/wp-content/uploads/sites/3/2017/05/Grey-Box.jpeg' alt='grey box' />,
	imageUrl: <img src='http://momentohospitality.com.au/bella-vista-hotel/wp-content/uploads/sites/3/2017/05/Grey-Box.jpeg' alt='grey box' />,
}

export default SinglePost;