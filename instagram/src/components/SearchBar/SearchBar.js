import React from 'react';

const SearchBar = props => {
  return (
    <div>
      <h2>Search Bar Component</h2>
      <input name="SearchBar" 
      type="text" 
      value={props.searchText} 
      onChange={props.updateSearchText} 
      />
    </div>
  )
}

export default SearchBar;