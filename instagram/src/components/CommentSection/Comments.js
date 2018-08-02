import React from "react";
// import PropTypes from 'prop-types';
import "./CommentSection.css";
import styled from "styled-components";

const CommentsListDiv = styled.div``;
const CommentsListH4 = styled.h4`
  padding: 0 0 0 1rem;
  margin-top: 1rem;
`;
const CommentsListSpan = styled.span`
  color: #403f44;
`;

const Comments = props => {
  return (
    <CommentsListDiv className="commentsListDiv">
      <CommentsListH4>
        {props.comment.username}{" "}
        <CommentsListSpan>{props.comment.text}</CommentsListSpan>
      </CommentsListH4>
    </CommentsListDiv>
  );
};

export default Comments;
