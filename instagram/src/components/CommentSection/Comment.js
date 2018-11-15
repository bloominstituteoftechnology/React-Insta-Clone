import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComment = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  span {
    font-weight: bold;
  }
`;

const StyledCommentText = styled.div`
`;

const StyledCommentButton = styled.div`
  cursor: pointer;
  color: gray;
  &:hover {
    color: black;
    transform: scale(1.5);
  }
  
`;

const Comment = props => {
  return (
    <StyledComment className="comment">
      <StyledCommentText className="comment--text">
        <span>{props.comment.username}</span> {props.comment.text}
      </StyledCommentText>
      <StyledCommentButton
        className="comment--btn"
        onClick={() => props.handleRemoveComment()}
      >
        x
      </StyledCommentButton>
    </StyledComment>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  handleRemoveComment: PropTypes.func.isRequired,
}

export default Comment;