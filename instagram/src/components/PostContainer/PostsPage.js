import React from "react";
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

const PostsPage = props => {
  return (
    <div>
      <SearchBar />

      <PostContainer posts={this.state.posts} />
    </div>
  );
};

export default PostsPage;
