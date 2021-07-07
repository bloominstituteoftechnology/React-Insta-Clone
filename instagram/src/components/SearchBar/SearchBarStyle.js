import React from 'react';
import styled from 'styled-components';

export const HeaderNav = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;
    background: white;
    top: 0px;

`;

export const NavFlexWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`;

export const LogoAndIcon = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledInput = styled.input`
    width: 200px;
    height: 20px;
    border-radius: 5px;
`;

export const StyledNavIcon = styled.i`
    font-size: 200px;
`;

export const StyleImg = styled.img`
    margin-left: -15px;
    width: 200px;
`;