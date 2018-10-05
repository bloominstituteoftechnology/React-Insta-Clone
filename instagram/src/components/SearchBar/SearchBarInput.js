import React from 'react';

const SearchBarInput = () => {
  return (
    <div className="search-bar-input">
      <i className="fas fa-search" />
      <input 
        type="search" 
        name="search" 
        placeholder="Search" />
    </div>
  );
}

export default SearchBarInput;
