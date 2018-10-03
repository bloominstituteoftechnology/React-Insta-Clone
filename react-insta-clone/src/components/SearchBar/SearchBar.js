import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Instagram from './instagram-brands.svg';

const SearchBar = (props) => {
  return (
    <section className='search-bar'>
      <section className='search-logo'>
        <img src={Instagram} alt='logo'></img>
        <p>|</p>
        <h1>Instagram</h1>
      </section>
      <section className='search-input'>
          <input placeholder='Search'></input>
      </section>
      <section className='nav-icons'>
        <FontAwesomeIcon icon='compass'/>
        <FontAwesomeIcon icon='heart'/>
        <FontAwesomeIcon icon='user'/>
      </section>
    </section>
  );
}

export default SearchBar;
