import React from "react";

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
      <img alt="instagram logo" src="" className="logo-image"/>
      </div>
      <input placeholder="search" onKeyDown={props.searchPosts}/>
    </div>
  );
};

export default SearchBar;
