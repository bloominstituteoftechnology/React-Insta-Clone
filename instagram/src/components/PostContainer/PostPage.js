import React from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const PostPage = props => {
  return (
    <div className="App">
      <SearchBar
        handleInputChange={props.handleInputChange}
        filterItems={props.filterItems}
        filter={props.filter}
      />
      <PostContainer
        data={props.data}
        comments={props.comments}
        likes={props.likes}
      />
    </div>
  );
};

export default PostPage;
