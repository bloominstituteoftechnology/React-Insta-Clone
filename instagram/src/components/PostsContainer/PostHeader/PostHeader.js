import React from 'react';
import PropTypes from 'prop-types';
import './PostHeader.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img src={props.thumbnailUrl} alt="profile pic"/>
            <h2>{props.username}</h2>
        </div>
    )
}

PostHeader.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string
}

export default PostHeader;