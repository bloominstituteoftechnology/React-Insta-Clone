import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = props => {
    return (
        <div className="App">
            <SearchBar />
            <PostContainer posts={props.data} />
        </div>
    )
}

export default PostsPage;