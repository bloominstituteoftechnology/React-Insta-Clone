import React from "react";

const SearchBar = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <i class="fab fa-instagram"></i>
      </div> 

      <div className="logoTitle">
        <h2>Insta-Clone</h2>
      </div>

      <div className="searchBarContainer">
        <input
          className="searchBar"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>

      <div className="icons" >
        <i class="fas fa-map-marker-alt"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-user"></i>
      </div> 
    
    </div>
  );
};

export default SearchBar;
