import './searchBar.css';
import React from 'react';

const SearchBar = (props) => {
  return (
    <div className={props.Container}>
      <div className={props.iconContainer}><i className={props.icon}></i></div>
      <h2 className={props.logo}>Instagram</h2>
      <input
      className={props.input}
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
