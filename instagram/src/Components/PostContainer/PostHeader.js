import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({thumbnail, username}) => {
    return (
        <div className="post-header">
            <img src={thumbnail} alt="thumbnail" className="post-thumbnail" />
            <h2>{username}</h2>
        </div>
    );
}

PostHeader.protoTypes = {
    thumbnail: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
}

export default PostHeader;
