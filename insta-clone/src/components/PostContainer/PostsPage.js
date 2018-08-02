import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostsContainer from '../PostContainer/PostsContainer'

const PostsPage = props => {
    return (
        <div>
            <SearchBar />
            <PostsContainer 
            posts={props.posts}
            />
        </div>
    )
};

export default PostsPage;