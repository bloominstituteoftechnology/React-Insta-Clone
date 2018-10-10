import React from 'react';
import Post from './Post';
import './Posts.css'

const PostsContainer = (props) => {
    return (
        <div className="post-container">
            {props.posts.map( post => <Post key={post.imageUrl} post={post} />)}
        </div>
    )
}





export default PostsContainer;