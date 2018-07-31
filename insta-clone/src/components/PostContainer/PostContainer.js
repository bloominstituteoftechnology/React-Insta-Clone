import React from 'react';
import Post from './Post.js';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = (props) => {
    return(
        <div className="post-container container">
            {props.posts.map(post => <Post key={post.timestamp} post={post} />)}
        </div>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object),
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string
    }))
}

export default PostContainer;