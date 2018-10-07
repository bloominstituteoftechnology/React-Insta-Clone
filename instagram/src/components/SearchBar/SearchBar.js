import React from 'react';
import './SearchBar.css'

import SearchBarLogo from './SearchBarLogo';
import SearchBarInput from './SearchBarInput';
import SearchBarActions from './SearchBarActions';

import PropTypes from 'prop-types';

const SearchBar = ({ onChange }) => {
  return (
    <div className="search-bar-container">
      <SearchBarLogo />
      <SearchBarInput onChange={onChange} />
      <SearchBarActions />
    </div>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchBar;
