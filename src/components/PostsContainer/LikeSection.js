import React from 'react';
import styled from 'styled-components';

import HeartIcon from '../../Images/heart-icon.png';
import CommentIcon from '../../Images/comment-icon.png';


const Container = styled.div`
display: flex;
margin-bottom: 25px;
 `;

const Wrapper = styled.div`
 height: 10px;
 width: 10px;
 margin: 10px 22px 22px 10px;
`
const CommentImg = styled.img`
  height: 24px;
  width: 28px;
  display-inline;
`
const Likes = styled.div`
  height: 24px;
  width: 28px;
  margin-bottom : 115px;
`
const Icons = styled.div`
  height: 24px;
  width: 20%;
  `



const LikeSection = props => {
  return [
    <Container>
      <Wrapper>
        <Icons>
          <CommentImg src={HeartIcon} alt="Heart Icon" onClick={props.incrementLike} />
          <CommentImg src={CommentIcon} alt="Comment" />
        </Icons>
        <Likes>{props.likes} </Likes>
      </Wrapper>
    </Container>
  ];
};

export default LikeSection;