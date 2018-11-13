import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

import Logo from './Logo';
import SearchBox from './SearchBox';
import NavBar from './NavBar';

const SearchBar = props => {
  return (
    <div className="search-bar--container">
      <div className="search-bar">
        <Logo />
        <SearchBox
          searchText={props.searchText}
          handleSearch={(e) => props.handleSearch(e)}
        />
        <NavBar />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
}

export default SearchBar;
