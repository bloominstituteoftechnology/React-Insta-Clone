import React from 'react';
import SearchBarForm from './SearchBarForm.js';
import SearchIcons from './SearchIcons.js';
import SearchLogo from './SearchLogo.js';

const SearchHeader= props => {
  console.log(props)
  return (
    <div id="searchHeader">
        <SearchBarForm searchPosts={props.searchPosts} ></SearchBarForm>
        <SearchIcons></SearchIcons>
       <SearchLogo></SearchLogo>
    </div>
  );
};

export default SearchHeader;
