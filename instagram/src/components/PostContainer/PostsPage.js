import React, { Component } from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const PostsPage = props => {
  return (
    <>
      <SearchBar
        handleSearch={props.handleSearch}
        searchText={props.searchText}
        searchPosts={props.searchPosts}
      />
      {props.postsData.map((post, idx) => {
        return <PostContainer post={post} key={idx} />;
      })}
    </>
  );
};

export default PostsPage;
