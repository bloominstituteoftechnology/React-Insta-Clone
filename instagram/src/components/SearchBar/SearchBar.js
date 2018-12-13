import React from "react";
import Search from "./Search/Search";
import Nav from "./Nav/Nav";
import Brand from "./Brand/Brand";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <Brand />
      <Search />
      <Nav />
    </div>
  );
};

export default SearchBar;
