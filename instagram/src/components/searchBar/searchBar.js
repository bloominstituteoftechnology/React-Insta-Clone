import './searchBar.css';
import React from 'react';

const SearchBar = (props) => {
  return (
    <div className='Container'>
      <div className='iconContainer'><i className="fab fa-instagram icon heart"></i></div>
      <h2 className='logo'>Instagram</h2>
      <div className="inputContainer">
        <input
          className='input'
          placeholder="Search"
        />
      </div>
      <div className="iconsContainer">
        <i className="far fa-compass icons"></i>
        <i className="far fa-heart icons"></i>
        <i className="far fa-user icons"></i>
      </div>
    </div>
  );
}

export default SearchBar;
