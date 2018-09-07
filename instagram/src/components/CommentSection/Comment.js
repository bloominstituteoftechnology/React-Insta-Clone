import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection';

import styled from 'styled-components';
import Username from '../../Styles/Reusables';

const CommentText = styled.span`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
`

const CommentSpan = styled.div`
  font-weight: 300;
  font-size: 14px;
`

const Comment = props => {
  return (
    <CommentText>
      <CommentSpan>{props.comment.text}</CommentSpan>{' '}
      <Username>-{props.comment.username}</Username>
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