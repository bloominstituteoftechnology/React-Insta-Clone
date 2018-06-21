import React from 'react';
import styled from 'styled-components';

const PostHeaderUsernameSpan = styled.span`
  font-weight: 600;
`;

const PostHeaderUsername = (props) => {
  return(
    <PostHeaderUsernameSpan>{props.username}</PostHeaderUsernameSpan>
  );
};

export default PostHeaderUsername;