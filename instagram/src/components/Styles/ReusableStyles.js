import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`

`;

const SearchBarContainer = styled.div`
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    margin: 20px auto;
    border-bottom: 1px solid lightgrey;
`;

const SearchBarHeader = styled.div`
    width: 200px;
    display: flex;
    font-size: 26px;
    font-family: 'Lobster', cursive;

    div {
        padding: 0 20px;

        &:first-child {
            border-right: 2px solid grey;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

const SearchBarSearch = styled.div`
    input {
        height: 26px;
        text-align: center;
        font-size: 18px;
        border: 1px solid lightgrey;
        border-radius: 5px;
    }
`;

const SearchBarNav = styled.div`
    font-size: 24px;
    width: 200px;
    display: flex;
    justify-content: flex-end;

    div {
        padding: 0 20px;

        i:hover {
            cursor: pointer;
        }

        &:last-child {
            font-family: 'Lobster', cursive;
        }

        &:last-child:hover {
            cursor: pointer;
        }
    }
`;

const PostsContainer = styled.div`
    max-width: 540px;
    margin: 20px auto;
    border-radius: 5px;
`;

const PostContainer = styled.div`
    max-width: 100%;
    margin: 20px auto;
    border: 1px solid lightgrey;
    border-radius: 5px;
`;

const PostHeader = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    margin: 20px auto;

    div:last-child {
        font-weight: bold;
        font-size: 20px;
    }

    img {
        height: 50px;
        border-radius: 50%;
        margin: 0 20px;
    }
`;

const PostImage = styled.div`
    img {
        width: 100%;
    }
`;

const PostNav = styled.div`
    font-size: 28px;
    width: 150px;
    display: flex;
    margin: 10px 20px;

    div {
        &:first-child {
            margin-right: 20px;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

const PostLikes = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin: 10px 20px;
`;

const CommentSectionContainer = styled.div`
    max-width: 100%;
    margin: 20px auto;
    border-radius: 5px;
`;

const CommentSectionTimestamp = styled.div`
    margin: 10px 20px;
`;

const CommentFormContainer = styled.div`
    max-width: 100%;
    margin: 30px auto 20px;
    border-radius: 5px;

    form {
        display: flex;
        justify-content: space-between;
        margin: 0 20px;

        input {
            font-size: 18px;
            border: 0;
        }

        button {
            background: white;
            border: 0;
            font-size: 18px;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;

const CommentContainer = styled.div`
    font-size: 18px;
    display: flex;
    margin: 10px 20px;

    span:first-child {
        font-weight: bold;
        margin: 0 8px 0 0;
    }
`;

const LoginContainer = styled.div`
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    margin: 20px auto;
    border-bottom: 1px solid lightgrey;

    form {
        width: 410px;
        display: flex;
        justify-content: space-between;
        

        button:hover {
            cursor: pointer;
        }
    }
`;

const LoginHeader = styled.div`
    width: 200px;
    display: flex;
    font-size: 26px;
    font-family: 'Lobster', cursive;

    div {
        padding: 0 20px;

        :first-child {
            border-right: 2px solid grey;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

export {
    AppContainer,
    SearchBarContainer,
    SearchBarHeader,
    SearchBarSearch,
    SearchBarNav,
    PostsContainer,
    PostContainer,
    PostHeader,
    PostImage,
    PostNav,
    PostLikes,
    CommentSectionContainer,
    CommentSectionTimestamp,
    CommentFormContainer,
    CommentContainer,
    LoginContainer,
    LoginHeader
};