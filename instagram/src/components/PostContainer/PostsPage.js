import React from 'react';
import PostList from './PostList';
import SearchBar from './../SearchBar/SearchBar';


const PostsPage = props => {
    return (
        <>
            <PostList posts={props.posts} />
            <SearchBar />
        </>
    );
};

export default PostsPage;