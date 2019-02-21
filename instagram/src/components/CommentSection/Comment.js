import React from 'react';
import PropTypes from 'prop-types';
import { CommentBlock, CommentUserName, CommentText } from '../styles/CommentSectionStyles';

const Comment = props => {
  return (
    <CommentBlock>
      <CommentUserName bold>{props.comment.username}</CommentUserName>
      <CommentText>{props.comment.text}</CommentText>
    </CommentBlock>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment;