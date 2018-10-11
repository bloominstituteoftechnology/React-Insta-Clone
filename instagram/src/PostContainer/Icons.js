import React, {Component} from 'react';
import styled from 'styled-components';
const IconDiv= styled.div `
margin-left:3.5%;
    width: 15%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const IconImg =styled.img `
width:30%;
height:auto;
`;
const LikeDiv= styled.div `
margin-left: 4%;
width: 15%;
display: flex;
align-items: flex-start;
`
const Icons =(prop)=>{
    return (
        <div className='icon-container'>
            <IconDiv>
                <IconImg src="https://image.ibb.co/etjUB9/heart.png" alt="heart"/>
                <IconImg src="https://image.ibb.co/cymLJp/comment.png" alt="comment"/>
            </IconDiv>
            <LikeDiv>
                {prop.like} likes
            </LikeDiv>
        </div>
    )
}
export default Icons;