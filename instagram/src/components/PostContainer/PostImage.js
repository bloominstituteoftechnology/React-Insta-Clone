import React from 'react';
import styled from 'styled-components';

const PostImageImg = styled.img`
  align-self: center;
  width: 100%;
  margin: 0 0 15px 0;
`;

const PostImage = (props) => {
  return(
    <PostImageImg alt="My post" src={props.imageUrl} />
  );
};

export default PostImage;