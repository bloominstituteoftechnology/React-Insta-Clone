import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import UserThumbnail from "./UserThumbnail";
import PostImage from "./PostImage";
import Likes from "./Likes";
import AddComment from "./AddComment";

const PostContainer = () => {
  return (
    <div className="post-container">
      <UserThumbnail />
      <PostImage />
      <div className="comments-container">
        <Likes />
        {/* <PostCaption />
      <CommentSection />
      <TimeStamp />
      <CommentArea /> */}
        <div className="timestamp">2 hours ago</div>
        <AddComment />
      </div>
    </div>
  );
};

export default PostContainer;
