import React from 'react';
import styled from 'styled-components';

const LikeSectionDiv = styled.div`
height: 20px;
width: 30px;
margin: 10px;
padding-bottom: 10px;
`;

export default function LikeSection(props) {
    return (

      <LikeSectionDiv
        onClick={props.incrementLikes}
      >
        <div className="like-section-wrapper">{props.likes} likes</div>
      </LikeSectionDiv>
      
             
    )
}