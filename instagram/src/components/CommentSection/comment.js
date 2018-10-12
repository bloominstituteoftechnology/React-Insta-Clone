import React from "react";
import PropTypes from "prop-types";
import "./commentsection.css";

const Comment = props => {
  return (
    <div className="d-flex align-items-center">
      <div className="comment">
        <span className="username">{props.username}</span>
        {props.text}
      </div>
    </div>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;
