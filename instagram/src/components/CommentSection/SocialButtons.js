import React from 'react';
import styled from 'styled-components';

const SocialButtons = (props) => {
  return (
    <ButtonWrapper>
      <div className="like-button" onClick={props.increaseLikes}>
        <i className="far fa-heart" />
      </div>
      <div className="comment-button">
        <i className="far fa-comment" />
      </div>
      <LikesCounter>{props.likes} likes</LikesCounter>
    </ButtonWrapper>
  );
};

export default SocialButtons;

const ButtonWrapper = styled.div`
  margin: 10px 0 10px 30px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  i {
    font-size: 1.6rem;
    margin-right: 20px;
  }
`;

const LikesCounter = styled.h1`
  font-size: 1rem;
  margin-top: 10px;
  margin-left: 0px;
  width: 100%;
`;
