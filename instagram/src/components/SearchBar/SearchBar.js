import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  console.log("Search bar props are:", { props });
  console.log("Search bar props are:", { props });
  return (
    <div className="SearchBar">
      <img className="IG-logo" src='./images/instagramlogo.svg' alt="IG logo Test"/>
      <img className="IG-logo" src='./images/ig_search_bar.png' alt="IG Written Logo"/>
      <input className="search-bar" type="text" placeholder='Search...'/>
      <img className="compass" src='./images/compass.svg' alt="compass"/>
      <img className="heart" src='./images/heart.svg' alt="heart"/>
      <img className="user" src='./images/user.svg'  alt="user"/>

    </div>
  );
};

export default SearchBar;
