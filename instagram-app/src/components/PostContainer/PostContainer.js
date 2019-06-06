import React from 'react';
import Post from './Post';



export default function PostContainer(props) {
    return (
        props.posts.map(post => 
        <Post
          key={post.postId}
          post={post}
        />
    ))
}