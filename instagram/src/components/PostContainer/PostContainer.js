import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import './PostContainer.css';
import CommentSection from './CommentSection/CommentSection';

const PostContainer = props => {
    return (
<div className="post-container">
    <h2>{props.postUser}</h2>
</div>
    );
};


export default PostContainer;