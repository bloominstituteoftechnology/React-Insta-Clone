import React from 'react';

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="company-logo">
        <span><i className="fab fa-instagram"></i></span>
        <h2>Instagram</h2>
      </div>
      <input 
        type="text" 
        placeholder="Search" 
        onChange={props.handleOnSearch}
      />
      <div className="control-nav">
        <span><i className="far fa-compass"></i></span>
        <span><i className="far fa-heart"></i></span>
        <span><i className="far fa-user"></i></span>
      </div>
    </div>
  )
}

export default SearchBar;