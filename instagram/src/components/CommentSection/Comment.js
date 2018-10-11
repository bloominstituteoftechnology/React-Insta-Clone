import React from 'react';
import PropTypes from 'prop-types';

import { StyledCommentText, StyledUsername } from './CommentSectionStyle';

import './CommentSection.css';

const Comment = props => {
  return (
    <StyledCommentText>
      <StyledUsername>{props.comment.username}</StyledUsername>
      <span className="comment">{props.comment.text}</span>{' '}
    </StyledCommentText>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
