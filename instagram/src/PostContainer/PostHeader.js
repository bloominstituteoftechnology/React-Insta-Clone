import React, { Component } from "react";
import styled from "styled-components";
const PostHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;
const PostHeaderP = styled.p`
  font-weight: bold;
`;
const PostHeaderImg = styled.img`
  width: 5%;
  height: auto;
  border-radius: 50%;
  margin-right: 2%;
`;
const PostHeader = prop => {
  return (
    <PostHeaderDiv className="post-header">
      <PostHeaderImg src={prop.thumbnailUrl} />
      <PostHeaderP> {prop.username}</PostHeaderP>
    </PostHeaderDiv>
  );
};
export default PostHeader;
