//SearchBar.js
import React from "react";
import instacam from "./instacam.png";
import insta from "./insta.png";

const SearchBar = () => {
  return (
    <div className = "head">
      <div className="head left">
	<img className="images" src={instacam} alt="instacam" />
	<hr />
        <img className="images-insta" src={insta} alt="insta" />
      </div>
      <div className="head center">
	<input className="searchbar" type="text" placeholder="search" />
      </div>
    </div>
  );
};

export default SearchBar;
  
