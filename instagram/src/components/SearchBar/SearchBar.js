import React from "react";
import PropTypes from "prop-types";
import NavLogo from "./NavLogo";
import SearchInput from "./SearchInput";
import NavIcons from "./NavIcons";

const SearchBar = props => {
  return (
    <div className="nav">
      <div className="search-bar">
        <NavLogo />
        <SearchInput searchPost={props.searchPost} />
        <NavIcons />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchPost: PropTypes.func
};

export default SearchBar;
