import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoName from '../../assets/instagram.png';
import styled from 'styled-components';

// CSS Styles:
const WrapperLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const LogoName = styled.img`
    height: 28px;
    align-self: flex-end;
    border-left: 2px solid gray;
    padding-left: 15px;
    margin-left: 10px;
`;

const Logo = () => {
    // 29x29 halfwidth on all sides
    return(
        <WrapperLogo>
            <FontAwesomeIcon icon={['fab','instagram']} size='2x' />
            <LogoName src={logoName} alt=''/>
        </WrapperLogo>
    );
};

export default Logo;