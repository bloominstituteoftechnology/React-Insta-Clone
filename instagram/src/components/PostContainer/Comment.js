import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

const Comment = props => (
  <div className="messageContainer">
    <div className="message">
      <span className="username">{props.comment.username}</span>
      <span className="text">{props.comment.text}</span>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.object)
};

export default Comment;
