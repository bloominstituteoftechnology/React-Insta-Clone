import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import UserThumbnail from "./UserThumbnail";
import PostImage from "./PostImage";
import Likes from "./Likes";
import AddComment from "./AddComment";

const PostContainer = props => {
  return (
    <div className="post-container">
      <UserThumbnail
        thumb={props.data.thumbnailUrl}
        username={props.data.username}
      />
      <PostImage />
      <div className="comments-container">
        <Likes />
        <CommentSection data={props.data} />
        <div className="timestamp">2 hours ago</div>
        <AddComment />
      </div>
    </div>
  );
};

export default PostContainer;
