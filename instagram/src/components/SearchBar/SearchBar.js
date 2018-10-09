import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  console.log("Search bar props are:", { props });
  return (
    <div className="SearchBar">
      <img className="IG-logo" src='../images/ig_search_bar' alt="IG logo"/>
      <h1>I am a Search Bar</h1>
    </div>
  );
};

export default SearchBar;
