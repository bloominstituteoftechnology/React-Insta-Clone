import React from "react";
import styled, { css } from "styled-components";

const LikeContainer = styled.div`
  display: flex;
  ${props =>
    props &&
    css`
      line-height: 8px;
    `};
`;
const LikeSectionDiv = styled.div`
  height: 20px;
  width: 20px;
  margin: 10px;
  padding-bottom 10px;
`;

const LikeSection = props => {
  return [
    <LikeContainer
      key="likes-icons-container"
      onClick={props.incrementLike}
      comment
    >
      <LikeSectionDiv>
        <i className="far fa-heart" />
      </LikeSectionDiv>
      <LikeSectionDiv>
        <i className="far fa-comment" />
      </LikeSectionDiv>
    </LikeContainer>,
    <LikeContainer key="likes-container" comment>
      <LikeSectionDiv>{props.likes}</LikeSectionDiv>
    </LikeContainer>
  ];
};

export default LikeSection;
