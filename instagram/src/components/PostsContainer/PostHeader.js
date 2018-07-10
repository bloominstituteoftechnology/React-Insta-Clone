import React from "react";
// import "./Posts.css";
import styled from "styled-components";

const PostHeaderStyled = styled.div`
  display: flex;
`;

const PostThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
`;

const PostThumb = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const PostHeader = props => {
  return (
    <PostHeaderStyled>
      <PostThumbWrapper>
        <PostThumb
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </PostHeaderStyled>
  );
};

export default PostHeader;
