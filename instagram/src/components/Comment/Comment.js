import React from 'react';
import PropTypes from 'prop-types';
import {
  CommentContainer,
  CommentUsername,
  CommentText,
} from './CommentStyles';

const Comment = (props) => {
  return (
    <CommentContainer>
      <CommentUsername>{props.comment.username}</CommentUsername>
      <CommentText>{props.comment.text}</CommentText>
    </CommentContainer>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string,
};

export default Comment;
