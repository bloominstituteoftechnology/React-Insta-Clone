import React from "react";
import PropTypes from "prop-types";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="posts">
      <Comment className="post__comment" comments={props.comments} />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CommentSection;
