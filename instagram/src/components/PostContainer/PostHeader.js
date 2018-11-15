import React from 'react';
import './PostHeader.css';
import PropTypes from 'prop-types';

const PostHeader = props => {
    return(
        <div className='post-header'>
            <img src={props.thumbnail} className='avatar' alt="User Avatar"/>
            <p>{props.userName}</p>
        </div>
    );
}

PostHeader.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
}

export default PostHeader;