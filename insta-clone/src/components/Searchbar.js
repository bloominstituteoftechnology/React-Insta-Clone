//Searchbar
import React from 'react';
import Camera from './img/icons8-instagram-48.png';
import './SearchBar.css';

const SearchBar = props => {
  return(
    <div className="search-container">
      <div className="logo">
        <img src={Camera} alt="instagram camera"/>
      </div>
      <form className="search">
        <input type="text" placeholder="search" value={props.search} onChange={props.change}/>
      </form>
      <div className="searchButton">
        <button onClick={props.searchGram}>enter</button>
      </div>
    </div>
  )
}

export default SearchBar;
