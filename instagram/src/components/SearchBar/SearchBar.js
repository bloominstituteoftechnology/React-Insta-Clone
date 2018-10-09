import React from "react";
import NavLogo from "./NavLogo";
import SearchInput from "./SearchInput";
import NavIcons from "./NavIcons";

const SearchBar = () => {
  return (
    <div className="nav">
      <div className="search-bar">
        <NavLogo />
        <SearchInput />
        <NavIcons />
      </div>
    </div>
  );
};

export default SearchBar;
