import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
    return(
        <p>Post</p>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string, 
        thumbnail: PropTypes.string, 
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })) 
    })
}

export default Post;