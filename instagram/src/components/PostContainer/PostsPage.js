import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import './PostContainer.css'

const PostsPage = props => {
    return (
        <div className="App">
            <SearchBar />
            <PostContainer posts={props.data} />
        </div>
    )
}

export default PostsPage;