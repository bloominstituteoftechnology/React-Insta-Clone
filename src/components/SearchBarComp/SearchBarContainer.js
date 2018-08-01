import React from 'react';
import './search-bar.css';

const SearchBarContainer = props => {
  return (
    <section className="main-header__searchbar">
      <label htmlFor="searchinput"></label>
      <input 
        id="searchinput" 
        className="main-header__searchbar" 
        type="text" 
        placeholder="Search"
        value={props.input}
        onChange={props.onChange}
        required
      />
    </section>
  );
}

export default SearchBarContainer;