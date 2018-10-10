import React from 'react';
import Post from './Post';
import SearchBar from './SearchBar/SearchBar';

const PostPage = props => {
    return (
        <div>
        <SearchBar
      posts={props.posts}
      handleFilter={props.handleFilter}
      />
        {props.posts.map((post, index) =>
        <Post 
        key={index}
        post={post}
        />
        )}  
        </div>
    )
}

export default PostPage;