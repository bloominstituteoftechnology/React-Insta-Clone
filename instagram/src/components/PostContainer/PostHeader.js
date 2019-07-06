import React from "react";
import "./PostContainerStyle.css";
import styled, { css } from "styled-components";

const PostHeaderDiv = styled.div`
  display: flex;
  padding: 10px;
  height: 175px;
  align-items: baseline;
  justify-content: space-between;
`;

const PostThumbWrapper = styled.div`
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  padding: 20px;
`;

const PostHeader = props => {
  return (
    <PostHeaderDiv>
      <PostThumbWrapper>
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <UserName bold>{props.username}</UserName>
    </PostHeaderDiv>
  );
};

export default PostHeader;
