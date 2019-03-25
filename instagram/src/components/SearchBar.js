import React from 'react';



const SearchBar = () => {
  return (
      <div className="search">
        <i class="fab fa-instagram"></i> Instagram 
        <input 
        type="text" 
        placeholder="Search"
        />
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
      </div>
      
  );
};

export default SearchBar;