import React, { Fragment } from "react";
import data from "../../dummy-data";
import "./PostContainer.css";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const SinglePost = props => {
  const username = props.match.params.username;
  const singlePost = data.find(post => `${post.username}` === username);
  return (
    <Fragment>
      <SearchBar />
      <PostContainer
        key={singlePost.imageUrl}
        post={singlePost}
        postId={singlePost.username}
      />
    </Fragment>
  );
};

export default SinglePost;
