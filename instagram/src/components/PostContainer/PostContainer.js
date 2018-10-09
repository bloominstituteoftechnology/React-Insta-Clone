import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import UserThumbnail from "./UserThumbnail";

const PostContainer = () => {
  return (
    <div className="post-container">
      <UserThumbnail />
      {/* <PostImage />
      <PostCaption />
      <CommentSection />
      <TimeStamp />
      <CommentArea /> */}
    </div>
  );
};

export default PostContainer;
