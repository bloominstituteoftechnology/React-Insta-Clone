import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar">
       <InputGroup>
      <input
        className="search"
        placeholder="Search"
        type="text"
        onChange={props.searchHandler}
      />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
