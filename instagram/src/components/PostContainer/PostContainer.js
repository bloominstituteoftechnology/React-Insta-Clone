import React, { Component } from 'react';
// import dummyData from './dummy-data.js';
import './Post.css';
import Post from './Post';

const PostContainer = props => {
    return (
<div className="post-container">
    {props.posts.map(p => <Post key={p.imageURL} post={p} />)}
</div>
    );
};


export default PostContainer;