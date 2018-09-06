import React from "react";
import styled, { css } from "styled-components";

const PostHeaderContainer = styled.div`
  display: flex;
`;
const PostThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
`;


const PostHeader = props => {
  return (
    <PostHeaderContainer>

      <PostThumbWrapper>
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </PostHeaderContainer>
  );
};

export default PostHeader;
