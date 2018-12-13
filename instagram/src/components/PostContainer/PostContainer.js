import React from "react";
import "./PostContainer.css";
import PostHeader from "./PostHeader";

const PostContainer = props => {
  return (
    <div className={"post-container"}>
      <PostHeader className={"post-header"} data={props.data} />
      <img
        src={props.data.imageUrl}
        alt={"the post"}
        className={"posted-image"}
      />
    </div>
  );
};

export default PostContainer;
