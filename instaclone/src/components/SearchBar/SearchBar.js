import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="searchBar">
      <div className="instaLogo">
        <i className="fab fa-instagram"> | Instagram</i>
      </div>
      <input type="text" name="search" value={props.search} onChange={props.onInputChange} placeholder="Search"/>
      <div className="instaIcons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func
}

export default SearchBar;