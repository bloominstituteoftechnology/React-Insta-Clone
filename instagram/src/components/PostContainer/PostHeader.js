import React from "react";
import styled from 'styled-components';

const HeaderDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 15px 0;
`
const Img = styled.img`
border-radius: 50%
width: 20%
`
const PostHeader = props => {
  return (
    <HeaderDiv>
      <div className="post-thumb-wrapper">
        <Img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <strong>{props.username}</strong>
    </HeaderDiv>
  );
};

export default PostHeader;
