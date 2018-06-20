import React from 'react';
import '../instagram.css';


const SearchBar = (props) => {

  return (
    <div>{
      <div>
        <i className="fas fa-search"></i>
        <input type="search" name="search" id="searchBar" placeholder="Search" />
        <button onClick={props.handleLogout}>Log Out</button>
        </div>
      }
    </div>
  )
}

export default SearchBar;
