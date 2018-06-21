import React from "react";
import styled from "styled-components";

const StyledLikeSection = styled.div`
  displey: flex;
`;

const LikeSectionWrapper = styled.div`
  height: 10px;
  width: 10px;
  margin: 10px;
`;

const LikeSection = props => {
  return [
    <StyledLikeSection
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <LikeSectionWrapper>
        <i className="far fa-heart" />
      </LikeSectionWrapper>
      <LikeSectionWrapper>
        <i className="far fa-comment" />
      </LikeSectionWrapper>
    </StyledLikeSection>,
    <LikeSectionWrapper key="likes-container">
      <LikeSectionWrapper>{props.likes}</LikeSectionWrapper>
    </LikeSectionWrapper>
  ];
};

export default LikeSection;
