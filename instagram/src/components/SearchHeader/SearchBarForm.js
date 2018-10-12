import React from 'react';
//import SearchHeader from './SearchHeader.js';
const SearchBarForm= props => {

  return (
    <div>
     
      <form id="style"> 
          <input type="text" placeholder="Search" onChange={props.searchPosts}/>
      </form>
    </div>
  );
};

export default SearchBarForm;

// <SearchHeader></SearchHeader>