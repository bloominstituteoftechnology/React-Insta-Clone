import React from 'react';
import styled from 'styled-components';

import LogoPicture from '../../img/glyph-logo_May2016.png';

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    min-width: 29px;
    min-height: 29px;
    height: 60px;
    margin-right: 30px;
    padding-right: 30px;
    border-right: 1px solid #383838;
    width: auto;
`;


const Instagram = styled.h1`
    font-family: 'Grand Hotel', cursive;
    font-size: 4.8rem;
`;

const Logo = props => {
    return (
        <LogoWrapper>
            <Image src={LogoPicture} alt="Instagram logo" />
            <Instagram>Instagram</Instagram>
        </LogoWrapper>
    );
}

export default Logo;