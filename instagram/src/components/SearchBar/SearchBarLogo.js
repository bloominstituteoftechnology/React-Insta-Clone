import React from 'react';
import instaLogo from './Instagram_logo.png';

import styled from 'styled-components';

const SearchBarLogoHeader = styled.header`
  align-items: center;
  display: flex;
`;

const SearchBarLogoHeaderCamera = styled.span`
  font-size: 62px;
`;

const SearchBarLogoHeaderImage = styled.img`
  height: 80px;
  margin-top: 10px;
`;

const SearchBarVerticalLine = styled.div`
  border-left: 1px solid black;
  height: 62px;
  margin: 0 20px;
`;

const SearchBarLogo = () => {
  return (
    <SearchBarLogoHeader>
      <SearchBarLogoHeaderCamera>
        <i className="fab fa-instagram" />
      </SearchBarLogoHeaderCamera>
      <SearchBarVerticalLine />
      <SearchBarLogoHeaderImage alt="logo" src={instaLogo} />
    </SearchBarLogoHeader>
  );
}

export default SearchBarLogo;
