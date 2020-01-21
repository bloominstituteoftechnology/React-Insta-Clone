import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./Comment.css";

const CommentText = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
  width: 80%;
`;

const User = styled.span`
  font-weight: 700;
  font-size: 1rem;
`;

const CommentWrapper = styled.span`
  font-weight: 300;
  font-size: 1rem;
`;

const Comment = props => {
  return (
    <CommentText>
      <User>{props.comment.username} </User>
      <CommentWrapper>{props.comment.text}</CommentWrapper>{" "}
    </CommentText>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
