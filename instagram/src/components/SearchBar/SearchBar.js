import React from "react";
import "./SearchBar.css";
import instalogo from "../../assets/instalogo.png";

const SearchBar = props => {
  return (
    <div>
      <img className="instalogo" src={instalogo} />
    </div>
  );
};

export default SearchBar;
