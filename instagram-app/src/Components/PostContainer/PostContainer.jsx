import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div className="PostContainer">
      <img src={props.Data.thumbnailUrl} alt="users" />
      <div>{props.Data.username}</div>
      <img src={props.Data.imageUrl} alt="posted pic" />
      <div>{props.Data.timestamp}</div>
      <div>{props.Data.likes}</div>
      <CommentSection comments={props.Data.comments} />
    </div>
  );
};

export default PostContainer;
