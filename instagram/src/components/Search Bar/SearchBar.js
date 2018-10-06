import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
const SearchBar = () => {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon="search" className="search-icon" />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
