import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Username from '../../Styles/Username';

const CommentContainer = styled.div`
  margin-bottom: 1rem;
`;

const Comment = props => {
  return (
    <CommentContainer>
      <Username>{props.comment.username}</Username> {props.comment.text}
    </CommentContainer>
  );
};

// PropTypes
Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
