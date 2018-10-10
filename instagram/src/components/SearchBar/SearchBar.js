import React from 'react';

const SearchBar = (props) => {
  return <div>
      <input 
        type="text" 
        placeholder="Search"
        onKeyDown={props.search}
        />
      
    </div>;
}

export default SearchBar;