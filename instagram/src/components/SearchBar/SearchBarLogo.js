import React from 'react';
import instaLogo from './Instagram_logo.png';

const SearchBarLogo = () => {
  return (
    <div className="search-bar-logo">
      <i className="fab fa-instagram" />
      <div className="vertical-line" />
      <img src={instaLogo} alt="logo" />
    </div>
  );
}

export default SearchBarLogo;
