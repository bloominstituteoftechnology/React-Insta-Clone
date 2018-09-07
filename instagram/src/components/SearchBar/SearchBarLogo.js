import React from 'react';
import styled from 'styled-components';

const SearchBarLogoContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 5%;
    width: 25%;
`;

const Divider = styled.span`
    width: 5px;
`;

const LogoText = styled.p`
    width: 50px;
    margin-left: 5%;
    font-weight: bold;
`;

const SocialDiv = styled.div`
    width: 50px;
`;

function SearchBarLogo(props) {
    return(
        <SearchBarLogoContainer>
            <SocialDiv>
                <i class="fab fa-instagram"></i>
            </SocialDiv>

            <Divider>|</Divider>

            <LogoText> 
                Instagram
            </LogoText>
        </SearchBarLogoContainer>
    )
}

export default SearchBarLogo;