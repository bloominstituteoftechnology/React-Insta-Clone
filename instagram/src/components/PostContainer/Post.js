import React from 'react';
import '../../../src/index.css';
import styled from 'styled-components';

const Images = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    margin: 0 auto;
`;

const ThumbNail = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    align-self: flex-start;
    margin-bottom: 15px;
    margin-top: 15px;
`;

const TopDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 100px;
    margin-left: 10%;
    margin-top: 20px;

`;

const Username = styled.div`
    align-self: center;
    margin-left: 20px;
`;

const Post = (props) => {
    return (
        <Images>
            <TopDiv>
                <ThumbNail src={props.thumbnail} alt="thumbnail icon" />
                <Username>{props.username}</Username>
            </TopDiv>
            <img src={props.image} alt="main post" />
        </Images>
    );
};

export default Post;
