import React from 'react';
import PropTypes from 'prop-types';

const PostContent = ({url}) => {
    return (
        <div className="post-content">
            <img src={url} alt="post-content" />
        </div>
    );
}

PostContent.protoTypes = {
    url: PropTypes.string.isRequired,
}

export default PostContent;
