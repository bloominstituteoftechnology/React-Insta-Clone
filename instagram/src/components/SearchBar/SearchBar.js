import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="searchBar">
      <input type="text" value="Search here..."></input><button className="goButton">Go!</button>
    </div>
  );
}

export default SearchBar;