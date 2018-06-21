import React from 'react';
import styled from 'styled-components';

const PostLikesDiv = styled.div`
  padding: 0 15px;
  font-weight: 600;
  margin: 0 0 15px 0;
`;

const PostLikes = (props) => {
  return(
    <PostLikesDiv>{props.likes} likes</PostLikesDiv>
  );
};

export default PostLikes;