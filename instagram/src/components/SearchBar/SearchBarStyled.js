import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
    background: #fff;
    border-bottom: 1px solid #eee;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;

`;

export const SearchbarContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;

`;


export const ContainerFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const LogoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 2.8rem;
    color: #2f2f30;

`;

export const LogoImage = styled.p`
    padding-right: 20px;
`;

export const LogoHeading = styled.p`
    font-family: 'Lobster Two', cursive;
    font-weight: 700;
    padding-left: 20px;
    border-left: 1.3px solid black;
`;

export const Input = styled.input`
    width: 220px;
    height: 28px;
    font-size: 1.5rem;
    border: 1px solid #dbdbdb;
    color: #000;
    background: #fafafa;
    border-radius: 2px;
    text-align: center;
    font-family: "Font Awesome\ 5 Free", 'Roboto';
`;

export const IconsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 130px;
    font-size: 2.1rem;
    color: #000;
`;