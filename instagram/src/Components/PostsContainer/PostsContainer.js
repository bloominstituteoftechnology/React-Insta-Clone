import React from 'react';
import './Posts.css';
import Post from './Post';

const PostsContainer = props => {
    return (
        <div className="posts-container">
         {props.posts.map(p => <Post post={p} />)}
        </div>
    );
};

export default PostsContainer;