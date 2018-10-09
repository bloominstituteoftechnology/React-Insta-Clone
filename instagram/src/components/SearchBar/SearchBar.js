import React from 'react';
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="SearchBar">
      <input 
      type="text" 
      value={props.searchText} 
      onChange={props.updateSearchText} 
      placeholder="Search"
      />
    </div>
  )
}

export default SearchBar;