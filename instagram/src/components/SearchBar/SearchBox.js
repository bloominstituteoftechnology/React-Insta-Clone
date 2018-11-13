import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = props => {
  return (
    <input 
      type="text"
      className="fa fa-input"
      placeholder=" Search"
      value={props.searchText}
      onChange={(e) => props.handleSearch(e)}
    />
  );
}

SearchBox.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
}

export default SearchBox;