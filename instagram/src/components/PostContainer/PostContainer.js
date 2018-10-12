import React from "react";
import Post from "./Post";
const PostContainer = props =>
  props.data.map((post, index) => <Post post={post} key={index} />);
export default PostContainer;
