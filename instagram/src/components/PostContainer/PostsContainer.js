import React from "react";
import Post from './Post'
import './Posts.css'

//#1 start here and pull in from Post.js
const PostsContainer = props => {
    return (
        <div className = "posts-container-wrapper">
        {props.posts.map(p=> <Post key={p.imageUrl} post = {p} />)}
        </div>
    )
}

export default PostsContainer