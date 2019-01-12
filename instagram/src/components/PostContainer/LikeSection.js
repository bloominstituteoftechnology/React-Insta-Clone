import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LikeSectionContainer = styled.div`
  display: flex;
`;
const LikeIconContainer = styled.div`
  display: flex;
`;
const LikeSectionWrapper = styled.div`
  height: 9px;
  width: 9px;
  margin: 9px;
  margin-bottom: 10px;
`;

const LikesCounter = styled.div`
  display: flex;
  width: 20%;
  margin: 5px 0 15px 1%;
  font-weight: 700;
`;

const LikeSection = props => {
  return [
    <LikeSectionContainer>
      <LikeIconContainer
        key="likes-icons-container"
        onClick={props.incrementLike}
      >
        <LikeSectionWrapper>
          <i className="far fa-heart" />
        </LikeSectionWrapper>
      </LikeIconContainer>
      <LikeSectionWrapper>
        <i className="far fa-comment" />
      </LikeSectionWrapper>
    </LikeSectionContainer>,
    <div key="likes-container">
      <LikesCounter>
        {props.likes} likes
      </LikesCounter>
    </div>
  ];
};

LikeSection.propTypes = {
  incrementLike: PropTypes.func,
  likes: PropTypes.number
};

export default LikeSection;
