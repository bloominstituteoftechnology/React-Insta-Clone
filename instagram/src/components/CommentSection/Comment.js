import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentContent = styled.div`
  display: flex;
`;

const UserNameBlock = styled.div`
  margin-right: 1rem;
  font-weight: bold;
`;

const UsersComment = styled.div`

`;

const Comment = props => {
  return (
    <CommentContent>
      <UserNameBlock>{props.comment.username}</UserNameBlock>
      <UsersComment>{props.comment.text}</UsersComment>{' '}
    </CommentContent>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;