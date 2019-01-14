import React from 'react';

import './Header.css';

import HeaderLogos from './HeaderLogos.js';
import SearchBar from './SearchBar.js';
import HeaderIcons from './HeaderIcons.js';

const HeaderContainer = props => {
  return (
    <div className="header">
      <HeaderLogos />
      <SearchBar />
      <HeaderIcons />
    </div>
  );
};

export default HeaderContainer;