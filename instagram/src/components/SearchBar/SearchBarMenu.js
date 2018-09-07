import React from 'react';
import styled from 'styled-components';

const SearchBarMenuContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-right: 5%;
`;

const SocialDiv = styled.div`
    width: 50px;
`;

function SearchBarMenu(props) {
    return (
        <SearchBarMenuContainer>
            <SocialDiv>
                <i className="far fa-compass" />
            </SocialDiv>
            <SocialDiv>
                <i className="far fa-heart" />
            </SocialDiv>
            <SocialDiv>
                <i className="far fa-user-circle" />
            </SocialDiv>
        </SearchBarMenuContainer>
    );
}

export default SearchBarMenu;