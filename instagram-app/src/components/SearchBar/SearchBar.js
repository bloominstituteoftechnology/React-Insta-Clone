import React from "react";

const SearchBar = () => {
  return (
    <div class="headerContainer">
      <div class="logo">
        <i class="fab fa-instagram"></i>
      </div> 

      <div class="logoTitle">
        <h2>Insta-Clone</h2>
      </div>

      <div class="searchBarContainer">
        <input
          className="searchBar"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>

      <div class="icons" >
        <i class="fas fa-map-marker-alt"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-user"></i>
      </div> 
    
    </div>
  );
};

export default SearchBar;
