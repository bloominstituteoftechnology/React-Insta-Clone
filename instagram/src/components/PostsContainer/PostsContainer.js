import React from 'react';
import Post from './Post';
import './Post.css';

const PostsContainer = props => {

    // Each PostContainer component will then pass the array of 
    // comments on each post object as a prop to an instance of the CommentSection component.
    return (
        <div className = 'posts-container'>
        {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
        </div>
    )
}

export default PostsContainer;