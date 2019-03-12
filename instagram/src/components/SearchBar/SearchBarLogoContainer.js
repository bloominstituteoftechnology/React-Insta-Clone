import React from 'react';
import {LogoHeader, LogoImage , LogoHeading} from './SearchBarStyled';

const SearchBarLogoContainer = () => {
  return (
    <LogoHeader>
        <LogoImage><i className="fab fa-instagram"></i></LogoImage>
        <LogoHeading>Instagram</LogoHeading>
    </LogoHeader>
  );
};

export default SearchBarLogoContainer;