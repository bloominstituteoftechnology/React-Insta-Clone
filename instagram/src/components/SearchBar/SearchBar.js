import React from 'react';
import './SearchBar';

const SearchBar = (props) => {
  return (
      <div className="search-bar">
      <input type="text" placeholder="Search" onKeyDown={props.search}/> 
            <i className="fas fa-search" />
        
            <i className="far fa-compass" />
            <i className="far fa-heart" />
            <i className="far fa-user" />    
      </div>
  );
}

export default SearchBar;