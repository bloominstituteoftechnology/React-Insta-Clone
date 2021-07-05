import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled from 'styled-components';

const CommentText = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
`;

const User = styled.span`
  font-weight: 500;
  font-size: 12px;
`;

const SomeComment = styled.span`
  font-weight: 300;
  font-size: 14px;
`;

const Comment = props => {
  return (
    <CommentText>
      <SomeComment>{props.comment.text}</SomeComment>{' '}
      <User>-{props.comment.username}</User>
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
