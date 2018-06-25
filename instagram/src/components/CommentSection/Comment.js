import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import { UserName } from '../PostContainer/Post';
import styled, { css } from 'styled-components';

export const FlexWrapper = styled.span`
  display: flex;
  ${props =>
    props &&
    css`
      text-align: left;
      padding: 2px;
      margin-left: 4px;
    `};
`;

const CommentText = styled.span`
  font-weight: 400;
  font-size: 13px;
  padding: 0 5px;
  line-height: 25px;
`;



const Comment = props => {
  return (
    <FlexWrapper>
        <UserName bold>{props.comment.username}</UserName>{' '}
      <CommentText>{props.comment.text}</CommentText>
    </FlexWrapper>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;