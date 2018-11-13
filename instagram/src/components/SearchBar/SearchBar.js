import React from "react";
import IconLinks from "./IconLinks";
import SearchField from "./SearchField";
import Branding from "./Branding";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <header className="searchbar-container">
      <Branding />
      <IconLinks />
      <SearchField search={props.search} onChange={props.onChange} />
    </header>
  );
};

export default SearchBar;
