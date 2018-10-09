import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  console.log("Search bar props are:", { props });
  console.log("Search bar props are:", { props });
  return (
    <div className="SearchBar">
      <img className="IG-logo" src='./images/instagramlogo.svg' alt="IG logo Test"/>
      <h1>I am a Search Bar</h1>
    </div>
  );
};

export default SearchBar;
