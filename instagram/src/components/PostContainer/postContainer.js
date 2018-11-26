import React from "react";
import PostsHeader from "./PostsHeader";
import Post from "./Post";
import './PostContainer.css'



const PostContainer = props => {
    return (
        <div className='post-container'>
        This is the PostContainer
        <PostsHeader />
        
        {props.posts.map(p =>
            <Post key={p.imageUrl} post={p} /> )}
        </div>
        
    );
}

export default PostContainer;