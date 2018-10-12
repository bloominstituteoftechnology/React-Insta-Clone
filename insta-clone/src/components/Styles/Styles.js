import React from 'react';
import styled from 'styled-components';

export const CommentWrap = styled.div`
    font-size: 1.6rem;
    line-height: 2rem;
    display: flex;
    justify-content: flex-start;
`;

export const CommentInput = styled.div`
    display: inline-block;
    font-size: 1.5rem;

    ${props => (props.type === 'user' ? `font-weight: bold;` : null)}
    ${props => (props.type === 'comment' ? `padding-left: 0.5rem;` : null)}
    
`;

export const LikeCount = styled.div`
    margin-top: 0.5rem;
    text-align: left;
`;

export const CommentWrapper = styled.div`
    padding: 0 1.8rem;
    text-align: left;
`;

export const TimeStamp = styled.div`
    width: calc(100% - 3.6rem);
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: left;
    padding: 1rem 0;
    margin: 0 auto;
    border-bottom: 1px solid lightgray;
`;

export const NewCommentSection = styled.div`
    width: calc(100% - 3.6rem);
    padding: 0.5rem 0;
    margin: 0 auto;
    line-height: 4rem;
    display: flex;
    justify-content: space-between;

    form {
        width: 100%;

        input {
            padding-left: 1rem;
            width: 100%;
            border: none;
            line-height: 4rem;

            &:focus {
                background-color: white;
                border: none;
            }
        }
    }

    button {
        text-align: right;
        font-weight: bold;
        font-size: 2rem;
        line-height: 4rem;
        background-color: white;
        padding: 0;
        margin: 0;
        border: none;
    }

`;

export const LikeCommentIcons = styled.div`
    display: flex;
    font-size: 2.4rem;

    img {
        margin-right: 1.5rem;
    }
`;

export const PostPageContainer = styled.div`
    margin: 0 auto;
    text-align: center;
`;

export const PostImage = styled.div`
    img {
        padding: 0.25rem;
        max-width: 100%;
        height: auto;
    }
`;

export const PostWrapper = styled.div`
    margin: 1.5rem auto;
    width: 60.5rem;
    padding: 0 0.25rem;
    border: 0.1rem solid lightgray;

    header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem 0;

        img {
            max-width: 3rem;
            margin: 0.75rem 0 0 1.75rem;
            height: auto;
            border-radius: 50%;
        }

        p {
            padding-top: 0.25rem;
            margin-left: 1rem;
        }
    }
`;

export const LikeSection = styled.div`
    padding: 0 1.8rem;
    margin-bottom: 0.5rem;
`;

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;

    form {
        display: flex;
        flex-direction: column;

        input {
            font-size: 1.8rem;
            padding: 0.5rem 1rem;
            margin: 0.75rem 0;
            border-radius: 0.6rem;
        }
    }
`;

export const SearchHeader = styled.div`
    width: 100%;
    max-width: 97rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.7rem;
    border-bottom: 1px solid lightgray;
    background-color: white;
    padding: 0 1.6rem;
    margin: 0 auto;

    .branding {
        display: flex;
        align-items: center;

        .instaCam {
            width: 3rem;
            height: auto;
            margin-right: 1.8rem;
        }

        .instaScript {
            padding: 0.5rem 2rem;
            border-left: 1px solid black;
        }
    }

    input {
        background-image: url("../../img/insta_search.png");
        background-position: 30% 50%;
        background-size: 6%;
        background-repeat: no-repeat;
        padding: 0.5rem;
        text-align: center;
        width: 24rem;
        line-height: 2.4rem;
        border: 0.1rem solid lightgray;
        border-radius: 0.6rem;

        &:focus {
            background-image: none;
            text-align: left;
        }
    }

    .searchIcons {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;

        img {
            margin-right: 2.5rem;
        }
    }
`;
 
