import React from "react";
import "./CommentSection.css";
import { FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";

const CommentSection = props => {
  return (
    <div className={"comments-container"}>
      <div className={"icon-container"}>
        <FiHeart className={"icon"} />
        <FiMessageCircle className={"icon"} />
        <FiSend className={"icon"} />
      </div>
      <h3 className={"likes"}>{props.data.likes} likes</h3>
      {props.data.comments.map((comments, index) => {
        return (
          <div className={"comments-field"} key={index}>
            <span className={"comment-username"}>{comments.username}</span>
            <p className={"comment-content"}>{comments.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
