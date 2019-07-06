import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";
import styled, { css } from "styled-components";
import { UserName } from "../PostContainer/PostHeader";

const commentContainer = styled.div`
  display: flex;
  line-height: 5px;
  ${props => props};
`;

const CommentParagraph = styled.p`
  font-size: 1rem;
`;

const Comment = props => {
  return (
    <commentContainer>
      <UserName>{props.comment.username}</UserName>
      <CommentParagraph>{props.comment.text}</CommentParagraph>
    </commentContainer>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
