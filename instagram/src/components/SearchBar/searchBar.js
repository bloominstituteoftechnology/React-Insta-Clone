import React from 'react';

const SearchBar = props => {
  return (
    <div className="searchBar">
      <img className="icon" src={require("../../Images/magnifying-glass.png")} alt="compas"/>
      <input type="text" placeholder="Search"/>
    </div>
  )
}

export default SearchBar;