import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width; 100%;
`;

const CommentText = styled.p`
  text-align: left;
  margin-bottom: 0px;
`;

const Comment = props => {
  return (
    <CommentContainer>
      <CommentText>
        <b>{props.user}</b> &nbsp;
        {props.text}
      </CommentText>
    </CommentContainer>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
