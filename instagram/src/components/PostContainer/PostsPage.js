import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

const PostsPage = props => {
  return (
    <div className="main-container">
      <SearchBar
        searchChange={props.filterChange}
        search={props.filterClick}
        searchValue={props.data.search}
      />
      {props.data.search
        ? props.data.searchList.map(item => (
            <PostContainer key={item.timestamp} posts={item} />
          ))
        : props.data.dummyData.map(item => (
            <PostContainer key={item.timestamp} posts={item} />
          ))}
    </div>
  );
};

export default PostsPage;