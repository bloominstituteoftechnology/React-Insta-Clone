import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <h3>Instagram</h3>
      <input className='searchBar' type="text" placeholder="search" />
      <h3>Iconz</h3>
    </div>
    
  )
}

export default SearchBar;