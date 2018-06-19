import React from 'react';
import './SearchBar.css';
import SearchBarLogos from './SearchBarLogos';
import SearchBarForm from './SearchBarForm';
import SearchBarActions from './SearchBarActions';

const SearchBar = (props) => {
  return(
    <div className="search-bar">
      <SearchBarLogos />
      <SearchBarForm searchPosts={props.searchPosts} />
      <SearchBarActions />
    </div>
  );
};

export default SearchBar;