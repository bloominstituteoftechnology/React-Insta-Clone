import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar">
        <input className="search" placeholder="&#x1f50d; &nbsp; Search" type="text" onChange={props.searchHandler}></input>
    </div>
  );
};

export default SearchBar;
