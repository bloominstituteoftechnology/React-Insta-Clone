import React from "react";
import styled, { css } from "styled-components";

const PostHeaderContainer = styled.div`
  display: flex;
`;
const PostThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
`;
const PostThumb = styled.div`
  height: 100%;
  border-radius: 50%;
`;

const PostHeader = props => {
  return (
    <PostHeaderContainer>
      <div className="post-header">
        <PostThumbWrapper>
          <div className="post-thumb-wrapper">
            <PostThumb>
              <img
                alt="post header"
                className="post-thumb"
                src={props.thumbnailUrl}
              />
            </PostThumb>
          </div>
        </PostThumbWrapper>
        <div>{props.username}</div>
      </div>
    </PostHeaderContainer>
  );
};

export default PostHeader;
