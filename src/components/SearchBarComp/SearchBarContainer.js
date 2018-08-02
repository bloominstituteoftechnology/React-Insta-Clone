import React from 'react';
import './search-bar.css';

const SearchBarContainer = props => {
  return (
    <section className="main-header__searchbar">
      <label htmlFor="searchinput"></label>
      <input 
        id="searchinput" 
        name="search"
        className="main-header__searchbar" 
        type="text" 
        placeholder="Search"
        value={props.searchValue}
        onChange={props.onChange}
        required
      />
    </section>
  );
}

export default SearchBarContainer;