import React from "react";
import "./CommentSection.css";
import { FiHeart, FiMessageCircle } from "react-icons/fi";

const CommentSection = props => {
  return (
    <div className={"comments-container"}>
      <div className={"icon container"}>
        <FiHeart className={"icon"} />
        <FiMessageCircle className={"icon"} />
      </div>
    </div>
  );
};

export default CommentSection;
