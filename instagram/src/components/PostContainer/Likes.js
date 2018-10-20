import React from "react";
import styled from "styled-components";

const LikesWrapper = styled.div`

`;

const SocialWrapper = styled.div`
    display: flex;
`;

const Social = styled.div`
    display: flex;
`;

const Lykes = styled.h2`
  font-weight: bold;
`;

const Likes = props => {
  return (
    <LikesWrapper>
        <SocialWrapper onClick = {props.incrementHandler}>
      <Social>
          <i className="far fa-heart fa-2x" />
        </Social>
        <Social>
          <i className="far fa-comment fa-2x" />
        </Social>
      </SocialWrapper>
      <Lykes>{props.likes} likes</Lykes>
    </LikesWrapper>
  );
};

export default Likes;
