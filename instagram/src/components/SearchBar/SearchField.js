import React from "react";
import "./SearchBar";

const SearchField = props => {
  return (
    <div className="search-field">
      <input
        type="text"
        placeholder="&#x1F50D; Search"
        value={props.search}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchField;
