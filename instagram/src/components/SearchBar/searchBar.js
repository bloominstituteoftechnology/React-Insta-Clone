import React from 'react';
import './searchBar.css';

function SearchBar(props) {
  return (
    <div className="searchBar">
    <img className="logo" src='https://c1.staticflickr.com/6/5515/10094221256_eb08c5088d_b.jpg' alt="logo"/>
    <form>
      <input 
        type="text" 
        value='' 
      /> 
    <button type="submit">Search</button>
  </form></div>
  )
}

export default SearchBar;