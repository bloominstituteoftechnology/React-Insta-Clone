import React from 'react';
import './SearchBar.css';

import Logo from './Logo';
import SearchBox from './SearchBox';
import NavBar from './NavBar';

const SearchBar = props => {
  return (
    <div className="search-bar">
      <Logo />
      <SearchBox />
      <NavBar />
    </div>
  );
}

export default SearchBar;
