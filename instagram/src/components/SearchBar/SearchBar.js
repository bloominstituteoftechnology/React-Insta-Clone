import React from 'react';
import '../instagram.css';


const SearchBar = (props) => {

  return (
    <div>{
      <div>
        <i className="fas fa-search"></i>
        <form onSubmit={props.searchHandler}>
        <input type="search" name="searchTerm" id="searchBar" placeholder="Search" onChange={props.changeHandler} />
        </form>
        <button onClick={props.handleLogout}>Log Out</button>
        </div>
      }
    </div>
  )
}

export default SearchBar;
