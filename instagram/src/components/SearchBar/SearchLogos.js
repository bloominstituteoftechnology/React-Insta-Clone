import React from 'react';
import styled from 'styled-components';

const LogosContainer = styled.div`
display: flex;
`;
const CameraIcon = styled.i`
font-size: 2.5rem;
padding-right: 6%;
border-right: 1px solid lightgrey;

`;

const LogoHeader = styled.h1`
font-family: serif;
font-size: 3rem;
font-weight: bold;
padding-left: 6%;
`;
const SearchLogos = (props) => {
    return (
        <LogosContainer>
            <CameraIcon className="fas fa-camera-retro"></CameraIcon>
            <LogoHeader>Simogram</LogoHeader>
        </LogosContainer>
    )
}

export default SearchLogos;