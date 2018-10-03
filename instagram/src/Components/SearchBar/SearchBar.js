import React, { Component } from 'react';

const SearchBar = props =>{
  return (
    <div className="searchBar">
      <div className="logo">
        <i class="fab fa-instagram"></i>
        <p> | </p>
        <h1>Instagram</h1> 
      </div> 
      <form>
        <input placeholder = "text here"></input> 
      </form> 
      <div> 
      <i class="far fa-compass"></i>
      <i class="far fa-heart"></i>
      <i class="fas fa-user-alt"></i>
      </div> 
    </div>
  )
}


export default SearchBar; 