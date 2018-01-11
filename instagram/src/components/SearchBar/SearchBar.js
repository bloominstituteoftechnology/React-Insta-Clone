import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <input type="text" placeholder="Search (doesn't work yet...)" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;