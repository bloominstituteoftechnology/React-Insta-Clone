import React from "react";
import SearchLeftLogo from "./SearchLeftLogo";
import SearchMidForm from "./SearchMidForm";
import SearchRightIcons from "./SearchRightIcons";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="insta-nav">
      <SearchLeftLogo />
      <SearchMidForm />
      <SearchRightIcons />
    </div>
  );
};

export default SearchBar;
