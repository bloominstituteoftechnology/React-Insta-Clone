import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
  return (
    <div className='search-bar'>
      <div className='logo'>
        <p>logo holder</p>
      </div>
      <input type='text' name='search' value={props.input} onChange={props.handleSearch} placeholder='Search' />
      <div className='icons'>
        <p>icon</p>
        <p>icon</p>
        <p>icon</p>
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string
}

export default SearchBar;
