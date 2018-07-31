import React from 'react';
import './search-bar.css';

const SearchBarContainer = props => {
  return (
    <div className="main-header__searchbar-container">
      <form onSubmit={props.onSubmit} action="submit">
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
      </form>
    </div>
  );
}

export default SearchBarContainer;