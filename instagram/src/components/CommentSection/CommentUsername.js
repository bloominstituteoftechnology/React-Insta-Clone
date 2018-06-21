import React from 'react';
import styled from 'styled-components';

const CommentUsernameSpan = styled.span`
  font-weight: 600;
  margin: 0 8px 0 0;
`;

const CommentUsername = (props) => {
  return(
    <CommentUsernameSpan>{props.username}</CommentUsernameSpan>
  );
};

export default CommentUsername;