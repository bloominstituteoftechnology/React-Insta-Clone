import React, { Component } from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const PostsPage = props => {
  return (
    <>
      <SearchBar
        filterSearch={props.filterSearch}
        searchText={props.searchText}
      />
      {props.postsData.map((post, idx) => {
        return <PostContainer post={post} key={idx} id={idx} />;
      })}
    </>
  );
};

export default PostsPage;
