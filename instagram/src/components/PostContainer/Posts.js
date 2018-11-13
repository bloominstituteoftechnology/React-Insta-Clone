import React from 'react';
import PropTypes from 'prop-types';

const Posts = props => {
    return(
        <h1>Posts</h1>
    )
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string, 
        thumbnail: PropTypes.string, 
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    }))
}

export default Posts;