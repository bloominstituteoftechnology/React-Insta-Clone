import React from 'react';

const SearchBarInput = props => {
  return (
    <div className="search-bar-input">
      <i className="fas fa-search"></i>
      <input 
        type="search" 
        name="search" 
        placeholder="Search" />
    </div>
  );
}

export default SearchBarInput;
