import React from 'react';
import PropTypes from 'prop-types';

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
        </div>
    )
}

SinglePost.PropTypes = {
	thumbnailUrl: PropTypes.img,
	username: PropTypes.string,
	imageUrl: PropTypes.img,
}

export default SinglePost;