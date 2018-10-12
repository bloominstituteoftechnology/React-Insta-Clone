import React from 'react';
import SearchBarForm from './SearchBarForm.js';
import SearchIcons from './SearchIcons.js';
import SearchLogo from './SearchLogo.js';

const SearchHeader= props => {
  
  return (
    <div id="searchHeader">
        <SearchBarForm></SearchBarForm>
        <SearchIcons></SearchIcons>
       <SearchLogo></SearchLogo>
    </div>
  );
};

export default SearchHeader;
