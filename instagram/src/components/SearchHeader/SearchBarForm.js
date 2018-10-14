import React from 'react';
//import SearchHeader from './SearchHeader.js';
const SearchBarForm= props => {
console.log(props)
  return (
    <div>
     
      <form id="style"> 
          <input type="text" placeholder="Search" onKeyDown={props.searchPosts}/>
      </form>
    </div>
  );
};

export default SearchBarForm;

// <SearchHeader></SearchHeader>