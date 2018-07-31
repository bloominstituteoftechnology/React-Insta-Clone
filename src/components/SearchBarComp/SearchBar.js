import React from 'react';
import './search-bar.css';

const SearchBar = () => {
  return (
    <div className="main-header__searchbar-container">
     <form action="submit">
      <label htmlFor="searchinput"></label>
      <input id="searchinput" className="main-header__searchbar" type="text" placeholder="Search"/>
     </form>
    </div>
  );
}

export default SearchBar;