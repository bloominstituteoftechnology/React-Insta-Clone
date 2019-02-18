import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsContainer = props =>{
    return (
        <div className = "posts-container-wrapper">
         {props.posts.map(p => <Post key={p.imageurl} post = {p} /> )}
         </div>
         );
        
        }

        
export default PostsContainer;