import React from "react";
import PropTypes from "prop-types";

import { CommentInstance, CommentText } from "../Styles/Styles";
import { Username } from "../Styles/Reusables";

const Comment = props => {
  return (
    <CommentInstance>
      <CommentText>
        <Username>{props.comment.username}</Username>
        {props.comment.text}
      </CommentText>
    </CommentInstance>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
