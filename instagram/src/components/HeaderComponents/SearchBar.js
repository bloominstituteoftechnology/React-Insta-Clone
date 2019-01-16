import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const SearchBar = props => {
  return (
    <div className="ig-search">
      <input 
        className="ig-search-bar" 
        type="search" 
        placeholder="&#xf002; Search"
        value={props.postQueryInput}
        name="postQueryInput"
        onChange={props.handleChange} />
    </div>
  )
};

SearchBar.propTypes = {
  postQueryInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchBar;