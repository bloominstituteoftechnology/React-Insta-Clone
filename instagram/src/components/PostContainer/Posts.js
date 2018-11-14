import React from 'react';
import PropTypes from 'prop-types';

const Posts = props => {
    return (
        <div className='posts'>
            Posts Here
        </div>
    )
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })),
        imageUrl: PropTypes.string,
        likees: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string
    }))
}

export default Posts;