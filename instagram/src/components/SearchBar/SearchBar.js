import React from "react";
import instacam from "./instacam.png";
import insta from "./insta.png";

const SearchBar = () => {
  return (
    <div className="head">
      <img className="instacam" src={instacam} alt="instacam" />
      <div>
        <img className="insta" src={insta} alt="insta" />
      </div>
      <div className="center">
	<input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
  
