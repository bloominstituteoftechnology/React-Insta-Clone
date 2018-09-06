import React from 'react';
import './SearchBar.css';
import IGLogo from '../../assets/iglogo.png';
import SearchForm from './SearchForm';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div className="logo">
        <i className="fab fa-instagram" />{' '}
        <img src={IGLogo} className="logo-image" alt="logo" />
      </div>
      <SearchForm search={props.search} handleChange={props.handleChange} />
      <div className="other-icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
}

export default SearchBar;
