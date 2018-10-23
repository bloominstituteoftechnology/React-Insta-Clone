import React from "react";
import styled from "styled-components";

const PostHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 3%;
`;

const PostThumb = styled.img`
  border-radius: 50%;
  width: 2em;
`;

const PostHeader = props => {
  return (
    <PostHeaderWrapper>
      <div className="post-thumb-wrapper">
        <PostThumb alt="" src={props.thumbnailUrl} />
      </div>
      <div>{props.username}</div>
    </PostHeaderWrapper>
  );
};

export default PostHeader;
