import React from 'react';
import styled from 'styled-components';

const ButtonsImg = styled.img `
    margin-top: 1px;
    width: 30px;
    height: 30px;
`

const LikesDiv = styled.div `
    margin-top: 3px;
    font-weight: bold;
`

function LikeSection(props) {
    return (
        <div className="Buttons">
            <ButtonsImg onClick={props.increaseLikes} src="https://static.thenounproject.com/png/682470-200.png" alt="" />
            <ButtonsImg src="https://static.thenounproject.com/png/682476-200.png" alt="" />
            <LikesDiv>{props.likes} likes</LikesDiv>
        </div>
        
    )
}

export default LikeSection;