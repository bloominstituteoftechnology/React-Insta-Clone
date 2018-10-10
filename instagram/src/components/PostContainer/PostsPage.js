import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = ({ filterPosts, posts }) => {

  return (
    <div className="app-container">
      <SearchBar onChange={filterPosts} />
      <PostContainer posts={posts} />
    </div>
  );
}

export default PostsPage;
