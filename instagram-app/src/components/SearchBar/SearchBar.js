import React from "react";
import './SearchBar.css'; 

const SearchBar = () => {
  return (
    <div className="headerContainer">
      
      <div className="logoTitleWrapper">
        
        <div className="logo">
          <i className="fab fa-instagram"></i>
        </div>
       
        <div className="logoTitle">
          <h2>Insta-Clone</h2>
        </div>
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
        <i className="fas fa-map-marker-alt"></i>
        <i className="far fa-heart"></i>
        <i className="fas fa-user"></i>
      </div> 
    
    </div>
  );
};

export default SearchBar;
