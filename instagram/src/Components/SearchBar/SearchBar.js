import React, { Component } from 'react';

const SearchBar = props =>{
  return (
    <div className="searchBar">
      <div className="logo">
        <i id="icon-logo" class="fab fa-instagram"></i>
        <p className="split"> | </p>
        <h1>Instagram</h1> 
      </div> 
      <form>
        <input placeholder = "search"></input> 
      </form> 
      <div> 
      <i id="icon" class="far fa-compass"></i>
      <i id="icon"class="far fa-heart"></i>
      <i id="icon"class="fas fa-user-alt"></i>
      </div>  
    </div>
  )
}


export default SearchBar; 