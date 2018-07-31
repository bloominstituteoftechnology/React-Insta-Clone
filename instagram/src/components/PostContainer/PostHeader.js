import React from 'react';
import './PostHeader.css';
import PropTypes from 'prop-types';


const PostHeader = props => {
    return (
        <div className='post-header'>
            <img className='thumbnail-img' src={props.thumbnail} alt='' />
            <p className='user'>{props.user}</p>
        </div>
    );
};

export default PostHeader;