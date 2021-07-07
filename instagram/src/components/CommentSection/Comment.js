import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled, {css} from 'styled-components';

const CommentText = styled.section`
    text-align: left;
    padding: 2px;
    margin-left: 4px;
    font-size: 1.2rem;

`;

const UserText = styled.span`
  font-weight: 300;
  font-size: 14px;
`;

const Comment = props => {
  return (
    <CommentText >
      <UserText ><strong>{props.comment.username}</strong></UserText>{' '}
      <UserText >{props.comment.text}</UserText>
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