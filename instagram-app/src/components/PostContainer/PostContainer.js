import React from 'react';
import Post from './Post';
import uuid from 'uuid';



export default function PostContainer(prop) {
    return (
        prop.posts.map(post => 
        <Post
          key={uuid()}
          post={post}
        />
    ))
}