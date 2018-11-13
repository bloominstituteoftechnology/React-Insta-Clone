import React from 'react';
import Post from './Post.js';

const PostsContainer = props => {
    return (
        <div className="posts-container">
            {props.posts.map( (postMap) => (
                <Post key={postMap.timestamp} post={postMap} />

            ))}
        </div>
    )
}

export default PostsContainer;
