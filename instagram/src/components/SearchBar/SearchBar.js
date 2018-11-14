import React from 'react';
//import PropTypes from 'prop-types';
import './Style.css';

const SearchBar = props => {
  return (
    <input
      type="search"
      id="SearchBar"
      placeholder="Search"
      results="0"
      onChange={(e) => props.setSearchResults(e)}
    />
  )
}

// SearchBar.propTypes = {
//   setSearchResults: PropTypes.func
// }

export default SearchBar;