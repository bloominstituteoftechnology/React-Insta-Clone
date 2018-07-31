import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img className="thumbnail-img" src={props.thumbnail} alt={`${props.user}'s thumbnail.`} />
            <span className="user">{props.user}</span>
        </div>
    );
};

PostHeader.propTypes = {
    user: PropTypes.string,
    thumbnail: PropTypes.string
};

export default PostHeader;