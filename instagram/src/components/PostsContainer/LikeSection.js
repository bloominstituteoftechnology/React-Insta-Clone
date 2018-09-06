import React from 'react';
import styled from 'styled-components';

const LikeSection = props => {
  return [
    <LikeSectionDiv
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <LikeSectionWrapper className="like-section-wrapper">
        <i className="far fa-heart" />
      </LikeSectionWrapper>
      <LikeSectionWrapper className="like-section-wrapper">
        <i className="far fa-comment" />
      </LikeSectionWrapper>
    </LikeSectionDiv>,
    <LikeSectionDiv className="like-section" key="likes-container">
      <LikeSectionWrapper className="like-section-wrapper">{props.likes}</LikeSectionWrapper>
    </LikeSectionDiv>
  ];
};

const LikeSectionDiv = styled.div`
  display:flex;
`;

const LikeSectionWrapper = styled.div`
  height: 10px;
  width: 10px;
  margin: 10px
`;

export default LikeSection;
