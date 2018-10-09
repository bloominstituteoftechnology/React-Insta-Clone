import React from "react";
import NavLogo from "./NavLogo";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* Logo component */}
      <NavLogo />
      {/* Search component */}
      <SearchInput />
      {/* Icons component */}
    </div>
  );
};

export default SearchBar;
