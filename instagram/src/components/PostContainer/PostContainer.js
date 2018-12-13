import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import TimePosted from "./TimePosted";
import { Input } from "reactstrap";

const PostContainer = props => {
  return (
    <div className={props.className}>
      <PostHeader className={"post-header"} data={props.data} />
      <img
        src={props.data.imageUrl}
        alt={"the post"}
        className={"posted-image"}
      />
      <CommentSection data={props.data} />
      <TimePosted timestamp={props.data.timestamp} />
      <Input placeHolder={"Add comment..."} />
    </div>
  );
};

export default PostContainer;
