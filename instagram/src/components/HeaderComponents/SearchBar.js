import React from 'react';

import './Header.css';

const SearchBar = props => {
  return (
    <div className="ig-search">
      <input className="ig-search-bar" type="search" placeholder="&#xf002; Search"/>
    </div>
  )
};

export default SearchBar;