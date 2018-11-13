import React from 'react';
import './SearchBar.css';

import Logo from './Logo';
import SearchBox from './SearchBox';
import NavBar from './NavBar';

const SearchBar = props => {
  return (
    <div className="search-bar--container">
      <div className="search-bar">
        <Logo />
        <SearchBox />
        <NavBar />
      </div>
    </div>
  );
}

export default SearchBar;
