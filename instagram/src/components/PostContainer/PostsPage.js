import React, { Component } from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

function PostsPage (props) {
    return (
        <>
            <SearchBar 
                handleSearch={props.handleSearch}
                searchText={props.searchText} 
            />
            <PostContainer 
                postsData={props.postsData}
                commentText={props.commentText} 
                handleComment={props.handleComment}
                addComment={props.addComment}
            />
        </>
    )
}

export default PostsPage;