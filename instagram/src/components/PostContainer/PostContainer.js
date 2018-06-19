import React from 'react';
import Post from '../PostContainer/Post';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.posts.map(post => (
                <Post key={post.imageUrl} post={post} />
            ))}
        </div>
    );
};



export default PostContainer;