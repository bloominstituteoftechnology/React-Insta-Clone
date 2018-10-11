import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px 0;
    border-bottom: 1px solid rgba(0,0,0,.0975);
`;

const PostDiv = styled.div`
    margin:0 auto;
    width:615px;
    margin-bottom:60px;
    border: solid 1px #dbdbdb; 
`;

const LogoHeader = styled.div` 
    display: flex;
    align-items: center;
`;

const Separator = styled.span` 
    border:1px solid black;
    height:20px;
    margin-left:10px;
    margin-right:10px;
`;

const InstagramLogo = styled.h1`
    margin:0;
    font-size:25px;
`

const Form = styled.div`
    margin:0 auto;
    border-top: solid 1px #dbdbdb;
    margin-top:10px;
    width:90%;

`;

const Inputs = styled.input`
    outline:0;
    ${props =>
        props.searchInput
        ? `
        text-align: center;
        padding:3px 10px;
        width:170px;
        background: #fafafa;
        border: solid 1px #dbdbdb;
        `
        : null
    }
     ${props =>
        props.commentInput
        ? `
        border: none;
        padding:20px 0;
        width:90%;
        margin:0 auto;
        font-size:15px;
        `
        : null
    }
`;


export {
    Header,
    PostDiv,
    LogoHeader,
    Separator,
    InstagramLogo,
    Inputs,
    Form
}
