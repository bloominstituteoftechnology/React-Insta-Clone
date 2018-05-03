import React, { Component } from 'react';
import Post from './Post';

const PostContainer = ({ posts, handleLike, handleSubmit }) => {
    return (
    <div>
        {posts.map((post, i) => 
            <Post 
                key={i} 
                id={post.id}
                username={post.username}
                thumnnailUrl={post.thumnnailUrl}
                imageUrl={post.imageUrl}
                likes={post.likes}
                timestamp={post.timestamp}
                comments={post.comments}
                handleLike={handleLike}
                handleSubmit={handleSubmit}
            />
        )}
    </div>
    )
}

export default PostContainer;
