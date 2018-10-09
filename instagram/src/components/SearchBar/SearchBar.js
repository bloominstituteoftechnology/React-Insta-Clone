import React from "react";


import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="searchBar">
    <img src="../components/img/compass.svg" alt="insta" />
      <h1>Instagram</h1>
      <div className="searchFormDiv">
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
