import React from 'react';

const SearchBar = props => {
  return (
    <div className="searchBar">
      <img className="icon icons_compass" src={require("../../Images/magnifying-glass.png")}/>
      <input type="text" placeholder="Search"/>
    </div>
  )
}

export default SearchBar;