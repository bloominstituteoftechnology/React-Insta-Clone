import React from 'react';

const SearchBar = props => {
  return (
    <div className="searchbar">
      <img src="img/logo.png" alt="Instagram logo" />
      <input className="search-input" placeholder =" "/>
      <div className="search-icons">
        <img src="img/compass.png" alt="Compass icon" />
        <img src="img/large-heart.png" alt="Heart icon" />
        <img src="img/person.png" alt="Person icon" />
      </div>
    </div>
  );
}

export default SearchBar;
