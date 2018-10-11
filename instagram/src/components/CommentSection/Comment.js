import React from 'react';
import PropTypes from 'prop-types';
import { CommentBody, CommentText } from './CommentsStyles';

const Comment = props => {
  const { username, text } = props.comment;

  return (
    <CommentBody>
      <CommentText type="username">{username}</CommentText>
      <CommentText>{text}</CommentText>
    </CommentBody>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
