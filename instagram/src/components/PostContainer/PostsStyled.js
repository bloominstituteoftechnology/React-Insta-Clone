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

export const UserThumbnail = styled.img`
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

export const PostComment = styled.div`
    margin-top: 15px;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
`;

export const PostIconsContainer = styled.div`
    text-align: left;
    margin-bottom: 15px;
`;

export const Timestamp = styled.p`
    text-align: left;
    font-size: 1.2rem;
    color: #77787a;
    margin-top: 15px;
    text-transform: uppercase;
`;

export const FormInputContainer = styled.form`
    text-align: left;
    margin-left: 20px;
    margin-top: 25px;
    border-top: 1px solid #eee;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;

`;

export const InputAddComent = styled.input`
    background: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    border: none;
    text-align: left;
    font-size: 1.5rem;
`;

export const CommentWrapper  = styled.div`
    text-align: left;
`;

export const CommentText = styled.p`
    margin-bottom: 10px;
    font-size: 1.6rem;
`;

export const CommentHeading = styled.span`
    font-weight: 700;
    font-size: 1.6rem;
    margin-right: 10px;

`;
