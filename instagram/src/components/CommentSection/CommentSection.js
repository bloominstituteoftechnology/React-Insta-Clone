import React from "react";
import PropTypes from "prop-types";
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

CommentSection.propTypes = {
  data: PropTypes.shape({
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};

export default CommentSection;
