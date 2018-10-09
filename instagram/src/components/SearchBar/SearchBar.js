import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
  return (
    <div className='search-bar'>
      <div className='logo'>
        <i class="fas fa-camera-retro"/>
        <p>Instagram</p>
      </div>
      <input type='text' name='search' value={props.input} onChange={props.handleSearch} placeholder='Search' />
      <div className='icons'>
        <i className="far fa-compass"/>
        <i className="far fa-heart"/>
        <i className="far fa-user"/>
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string
}

export default SearchBar;
