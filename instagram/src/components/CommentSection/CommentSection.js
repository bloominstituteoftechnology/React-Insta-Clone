import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";
import PropTypes from "prop-types";
import CommentIcons from "./CommentIcons";
import CommentLikes from "./CommentLikes";
import CommentTimeStamp from "./CommentTimeStamp";

const CommentSection = props => {
  return (
    <div>
      <CommentIcons />
      <CommentLikes />
      <div className="comment-section">
        {props.post.comments.map(comment => (
          <Comment comment={comment} key={Math.random()} />
        ))}
      </div>
      <CommentTimeStamp />
    </div>
  );
};

CommentSection.propTypes = {
  comment: PropTypes.object
};

export default CommentSection;
