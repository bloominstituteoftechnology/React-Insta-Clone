import React, { Component } from 'react';
import './Post.css';
import SearchBar from '../SearchBar/SearchBar';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            <div>PostContainer is showing</div>
            <SearchBar />
            <CommentSection />
        </div>
    )    
}

export default PostContainer;