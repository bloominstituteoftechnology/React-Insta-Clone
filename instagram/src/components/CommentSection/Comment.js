import React from 'react';
import PropTypes from 'prop-types';
//import './Comment.css';
import styled from 'styled-components';

const Comment = props => {
  return (
    <CommentText className="comment-text">
      <CommentSpan className="comment">{props.comment.text}</CommentSpan>{' '}
      <User className="user">-{props.comment.username}</User>
    </CommentText>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

const CommentText = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
`;

const CommentSpan = styled.span`
  font-weight: 300;
  font-size: 14px;
`;

const User = styled.span`
  font-weight: 500;
  font-size: 12px;
`;

export default Comment;
