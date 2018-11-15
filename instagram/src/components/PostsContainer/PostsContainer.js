import React from 'react';
import Post from './Post/Post.js';
import PropTypes from 'prop-types';

const PostsContainer = props => {
    return (
        <div className="posts-container">
            {props.posts.map( (postMap) => (
                <Post key={postMap.timestamp} post={postMap} />

            ))}
        </div>
    )
}

PostsContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.string,
        imageURL: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
        })
    )
}

export default PostsContainer;
