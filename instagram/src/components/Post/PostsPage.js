import React from "react";
import SearchBar from "../SearchBar/SearchBarContainer.js";
import PostsContainer from "./PostsContainer.js";

const PostsPage = props => {
  console.log(props);
  return (
    <div>
      <SearchBar search={props.search} handleChange={props.handleChange} />
      <PostsContainer posts={props.posts} />
    </div>
  );
};

export default PostsPage;
