import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentsWrapper = styled.div`
  display: flex;
`;
const CommentText = styled.h2`
  font-weight: normal;
`;

const Comments = props => {
  return (
    <CommentsWrapper>
      <h2 className="comment-user-name">{props.comment.username}</h2>
      <CommentText>{props.comment.text}</CommentText>
    </CommentsWrapper>
  );
};

Comments.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comments;
//`Comment` component with the username of the poster as well as the post's text.
