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
    thumbnail: PropTypes.string,
    user: PropTypes.string
};

export default PostHeader;