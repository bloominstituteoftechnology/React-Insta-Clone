import React from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const PostsPage = props => {
  return (
    <div>
      <SearchBar />

      <PostContainer posts={props.posts} />
    </div>
  );
};

export default PostsPage;
