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
      <CommentLikes likes={props.post.likes} />
      <div className="comment-section">
        {props.post.comments.map(comment => (
          <Comment comment={comment} key={Math.random()} />
        ))}
      </div>
      <CommentTimeStamp timestamp={props.post.timestamp} />
    </div>
  );
};

CommentSection.propTypes = {
  comment: PropTypes.object,
  timestamp: PropTypes.string,
  likes: PropTypes.number
};

export default CommentSection;
