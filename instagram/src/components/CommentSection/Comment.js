import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment">
      <p className="text">
        <b>{props.user}</b> &nbsp;
        {props.text}
      </p>
    </div>
  );
};

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;
