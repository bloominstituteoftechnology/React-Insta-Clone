import React from "react";
import PropTypes from "prop-types";
import { CommentP, I } from "./Styles";

const Comment = props => (
  <CommentP>
    <strong>{props.comment.username}</strong> {props.comment.text}{" "}
    <I
      className="fas fa-minus-circle"
      onClick={() => props.deleteComment(props.i)}
    />
  </CommentP>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    deleteComment: PropTypes.func
  })
};

export default Comment;
