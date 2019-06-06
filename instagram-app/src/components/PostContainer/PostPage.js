import React from 'react';
import SearchBar from "../SearchBar/SearchBar.js";
import PostContainer from './PostContainer';


const PostPage = ({
    handleSearch,
    search,
    posts
}) => {
    return (
        <div>
            <SearchBar search={search} handleSearch={handleSearch} />
      {posts.map((userPost, index) => {
        return <PostContainer 
        key={index} 
        props={userPost} 

        />;
      })}
        </div>
    );
}

export default PostPage;