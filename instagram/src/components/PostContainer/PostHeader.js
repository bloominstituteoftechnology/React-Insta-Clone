import PropTypes from 'prop-types';
import React from 'react';
import './PostContainer.css'

const PostHeader = props => {
    return (
        <div>
            <div className='post-header'>
            <img 
            className='thumbnail-img'
            alt='profile pic'
            src={props.thumbnailUrl}
            />
            <h3
            className='post-username'>
            {props.username}
            </h3>
            </div>
        </div>
    )
}

PropTypes.PostHeader = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
}

export default PostHeader;