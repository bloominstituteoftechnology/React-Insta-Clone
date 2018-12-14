import React from "react";
import PropTypes from "prop-types";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

const CommentSection = props => {
  return <Comment className="post__comment" comments={props.comments} />;
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CommentSection;
