import React from 'react';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBar';



const PostPage = props => {
    return (
        <div>
        <SearchBar />
        <PostsContainer posts={props.posts}  />
      </div>
    )

};

export default PostPage;
