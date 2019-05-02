import React from "react";
import './SearchBar.css'; 

const SearchBar = (props) => {
  return (
    <div className="headerContainer">
      
      <div className="logoTitleWrapper">
        
        <div className="logo">
          <i className="fab fa-instagram"></i>
        </div>
       
        <div className="logoTitle">
          <h2>Dollygram</h2>
        </div>
      </div>

      <div className="searchBarContainer">
        <input
          className="searchBar"
          type="text"
          name="search"
          placeholder="...Search"
          onKeyDown={props.searchPosts}
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
