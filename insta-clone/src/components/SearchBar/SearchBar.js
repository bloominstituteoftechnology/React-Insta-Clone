import React from "react";

// this file will contain the search bar
const SearchBar = props => {
  return (
    <form onSubmit={props.searchPosts} onChange={props.handleChange}>
    <input
  type="text"
  onSubmit={props.searchPosts}
  onChange={props.handleChange}
  name="search"
  placeholder="Search..."
   />
   </form>
 )
};

export default SearchBar;
