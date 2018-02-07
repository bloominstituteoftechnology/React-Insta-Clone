import React from 'react';

function SearchBar() {
    return <form>
    <label htmlFor="search"></label>
    <input
      type="text"
      placeholder="Search"
    />
  </form>;
}

export default SearchBar;