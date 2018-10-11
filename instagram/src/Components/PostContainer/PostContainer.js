import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = ({posts}) => {
    return (
        <div className="post-container" >
            {
                !posts.length 
                ? <h2>Loading Posts...</h2>
                : posts.map((post, i) => <Post content={post} key={i} index={i}/>)
            }
        </div>
    );
}

PostContainer.protoTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
    })),
}

export default PostContainer;
