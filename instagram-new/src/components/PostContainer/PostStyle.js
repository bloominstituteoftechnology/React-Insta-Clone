import React from 'react';
import styled from 'styled-components';

export const PostContainer = styled.div`
    width: 550px;
    box-shadow: 0px 0px 1px 1px #ccc;
    margin: 0 auto;
    margin-bottom: 4rem;
`;

export const PostHeader = styled.div`
    height: 3.1rem;
    display: flex;
    width: 100%;
    align-items: center;
`;

export const PostHeaderThumbnail = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2rem;
    margin-left: .8rem;
    margin-right: .5rem;
`;

export const BigImage = styled.img`
    height: 30rem;
    width: 100%;
`;

export const CommentsContainer = styled.div`
    margin: 0 2.5%;
    text-align: start;
`;

export const InteractiveButtonsContainer = styled.div`
    height: 2.2rem;
`;

export const LikesInfo = styled.p`
    font-size: .75rem;
    font-weight: bold;
    margin-bottom: .5rem;
    
`;

export const ContentContainer = styled.div`
    margin-top: 12rem;
    
`;

export const OverallHolder = styled.div`
    margin: 0 auto;
`;