import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <form onSubmit={props.search} onChange={props.handleSearchInput}>
      <input type="text" placeholder="&#xf002; Search" />
    </form>
  );
}

export default SearchBar;
