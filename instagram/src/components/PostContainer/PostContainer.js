import React, { Component } from 'react';
import Post from './Post';

const PostContainer = ({ posts }) => {
    return (
    <div>
        {posts.map((post, i) =>
            <Post 
                key={i} 
                username={post.username}
                thumnnailUrl={post.thumnnailUrl}
                imageUrl={post.imageUrl}
                likes={post.likes}
                timestamp={post.timestamp}
                comments={post.comments}
            />
        )}
    </div>
    )
}

export default PostContainer;
