import React from 'react';
import styled from 'styled-components';

const PostHeaderThumbnailImg = styled.img`
  width: 30px;
  border-radius: 50%;
  margin: 0 10px 0 0;
`;

const PostHeaderThumbnail = (props) => {
  return(
    <PostHeaderThumbnailImg src={props.thumbnail} alt="My thumbnail" />
  );
};

export default PostHeaderThumbnail;