import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import UserThumbnail from "./UserThumbnail";
import PostImage from "./PostImage";

const PostContainer = () => {
  return (
    <div className="post-container">
      <UserThumbnail />
      <PostImage />
      {/* <PostCaption />
      <CommentSection />
      <TimeStamp />
      <CommentArea /> */}
    </div>
  );
};

export default PostContainer;
