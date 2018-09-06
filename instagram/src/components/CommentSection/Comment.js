import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled, { css } from "styled-components";

const CommentText = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
`;

const Comment = props => {
  return (
    < CommentText>
      <span className="comment">{props.comment.text}</span>{' '}
      <span className="user">-{props.comment.username}</span>
    </ CommentText>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
