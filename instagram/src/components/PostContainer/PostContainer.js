import React from "react";
import "./PostContainer.css";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div className={"post-container"}>
      <PostHeader className={"post-header"} data={props.data} />
      <img
        src={props.data.imageUrl}
        alt={"the post"}
        className={"posted-image"}
      />
      <CommentSection />
    </div>
  );
};

export default PostContainer;
