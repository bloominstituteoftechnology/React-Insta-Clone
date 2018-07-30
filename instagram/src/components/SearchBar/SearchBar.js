import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src="../../logo.svg" alt="Logo Image" />
      <input className="search-bar-input" placeholder="What/who are you looking for?" />
      <div className="search-bar-icons"></div>
    </div>
  );
}
export default SearchBar;
