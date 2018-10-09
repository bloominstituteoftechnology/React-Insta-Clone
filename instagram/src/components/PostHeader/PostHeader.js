import React from 'react';
import './PostHeader.css';
import PropTypes from 'prop-types';


const PostHeader = props =>{
    return (
        <div className='post-header-container'>
            <img className='post-header-img' src={props.data.thumbnailUrl} alt='avatar'></img>
            <p className='post-header-username'>{props.data.username}</p>
        </div>
    )
}

PostHeader.propTypes = {
    thumbnailUrl:PropTypes.string,
    username:PropTypes.string
}

export default PostHeader;