import React from 'react';

const SearchBar = props => {
  return (
    <div>
      <input name="SearchBar" 
      type="text" 
      value={props.searchText} 
      onChange={props.updateSearchText} 
      placeholder="Search"
      />
    </div>
  )
}

export default SearchBar;