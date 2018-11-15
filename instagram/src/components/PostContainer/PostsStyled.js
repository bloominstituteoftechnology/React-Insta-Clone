import React from 'react';
import styled from 'styled-components';

export const PostWrapper = styled.div`
    max-width: 980px;
    margin: 0 auto;

`;

export const PostItem = styled.div`
    max-width: 660px;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid #dbdbdb;
    background: #fff;
    border-radius: 3px;
`;

export const PostHeader = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const PostUserLogo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 15px;
`;

export const PostHeadingBold = styled.p`
    font-weight: 700;
    font-size: 1.6rem;
    text-align: left;
    margin-left: 20px;
`;

export const PostImg = styled.img`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
`;