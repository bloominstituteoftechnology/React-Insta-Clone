import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";
import styled, { css } from "styled-components";
import { UserName } from "../PostContainer/PostHeader";

const commentSectionContainer = styled.div`
  padding-bottom: 4%;
`;

const commentContainer = styled.div`
  display: flex;
  line-height: 5px;
`;

const CommentParagraph = styled.p`
  font-size: 1rem;
`;

const Comment = props => {
  return (
    <commentSectionContainer>
      <commentContainer>
        <UserName>{props.comment.username}</UserName>
        <CommentParagraph>{props.comment.text}</CommentParagraph>
      </commentContainer>
    </commentSectionContainer>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
