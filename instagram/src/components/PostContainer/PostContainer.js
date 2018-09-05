import React, { Component } from 'react';
import Post from './Post.js'

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.posts.map(post => (
                <Post
                    post={post}
                    key={post.timestamp}
                />
                
            ))}
        </div>);
}

export default PostContainer;