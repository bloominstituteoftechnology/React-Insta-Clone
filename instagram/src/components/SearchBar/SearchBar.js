import React from 'react';

import './SearchBar.scss';

import logo from './logo.png';

export default function SearchBar() {

  return (

    <div className='search-bar'>

      <div>

        <p className="fab fa-instagram"></p>
        <p className='divider'>|</p>
        <img className='logo' src={logo} alt='logo'></img>

      </div>

      <div>

        <div className='input'>

          <input type='text' placeholder='Search' />
          <p className='fas fa-search'></p>

        </div>

      </div>

      <div>

        <p className='right far fa-compass'></p>
        <p className='right far fa-heart'></p>
        <p className='right far fa-user'></p>

      </div>

    </div>

  )

}
