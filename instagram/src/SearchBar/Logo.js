
import React from 'react';
import Instagram from '../icons/Instagram Word Logo.png';
import styled from 'styled-components';

const LogoStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 40%;
`;

const Grey = styled.p`
    color: lightgrey;
    font-size: 25px;
`;
const Wordlogo = styled.img`
    height: 7vh;
    margin-top: 5px;
`;

const Camera = styled.i`
    color: lightgray;
    font-size: 24px;
`;

const Logo = () => {
        return (
            <LogoStyle>

                <a href="#"> <Camera className="fab fa-instagram camera"></Camera> </a>

                <Grey>|</Grey>

                <Wordlogo src={Instagram} alt='logo'></Wordlogo>

            </LogoStyle>
        )
};

export default Logo;





