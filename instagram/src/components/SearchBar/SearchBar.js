import React from 'react';



const SearchBar = (props) => {
  return (
      <div className="search">
        <i className="fab fa-instagram"></i> | Instagram 
        <input 
        type="text" 
        placeholder="Search" 
        />
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
      
  );
};

export default SearchBar;