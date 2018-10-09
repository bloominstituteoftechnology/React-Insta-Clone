import React from 'react';
import PropTypes from 'prop-types';

import '../PostContainer/PostContainer.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img src={props.thumbnail} className="thumbnail" />
            <h1>{props.username}</h1>
        </div>
    );
}

PostHeader.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string
}

export default PostHeader;