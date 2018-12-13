import React from "react";
import Posts from "../Posts/Posts";
import "./PostContainer.css";

const PostContainer = props => {
  let arr = props.posts.map((e, i) => <Posts key={i} post={e} />);
  return <div className="posts">{arr}</div>;
};

export default PostContainer;
