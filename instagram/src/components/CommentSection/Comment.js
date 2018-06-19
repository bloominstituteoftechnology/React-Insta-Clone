import React from "react";
import { CardText } from "reactstrap";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <CardText>
      <strong>{props.comment.username}</strong> {props.comment.text}
    </CardText>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
