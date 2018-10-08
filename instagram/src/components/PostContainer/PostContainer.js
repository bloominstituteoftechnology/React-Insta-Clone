import React from 'react';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return(
        <div/>
    )
}

PostContainer.propTypes = {
    obj: PropTypes.shape ({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        posts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))

    })
}
export default PostContainer;