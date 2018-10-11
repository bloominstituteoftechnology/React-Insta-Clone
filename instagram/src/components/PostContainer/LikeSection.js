import React from 'react';
import "@fortawesome/fontawesome-free";
import styled from 'styled-components';

const LikesSection = styled.div`
    display: flex;
    width: 10%;
    `;

const LikeWrapper = styled.div`
    height: 10px;
    width: 15px;
    margin: 10px;
    `;

const LikeSection = props => {
    return [
      <LikesSection
        key="likes-icons-container"
        onClick={props.incrementLike}
      >
        <LikeWrapper>
            <i className="fa fa-heart" />
        </LikeWrapper>
        <LikeWrapper>
          <i className="fa fa-comment" />
        </LikeWrapper>
      </LikesSection>,
      <LikesSection key="likes-container">
        <LikeWrapper>{props.likes}</LikeWrapper>
      </LikesSection>
    ];
  };
  
  export default LikeSection;