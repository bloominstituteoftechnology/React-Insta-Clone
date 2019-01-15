import React from "react";
import PostHeader from "./PostHeader";
import PostPicture from "./PostPicture";
import PostIcons from "./PostIcons";
import CommentContainer from "../CommentSection/CommentContainer";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container-wrapper">
      <PostHeader data={props.data} />
      <PostPicture data={props.data} />
      <PostIcons data={props.data} />
      <CommentContainer data={props.data} />
    </div>
  );
};

export default PostContainer;
