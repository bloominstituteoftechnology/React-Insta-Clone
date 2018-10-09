import React from 'react'
import logo from '../../img/glyph-logo_May2016.png'

import './SearchBar.css'

const SearchBar = () => (
  <div className="search-bar">
    <img className="logo" src={logo} alt="instagram" />
    <p>Instagram</p>
    <input type="text" placeholder="Search" />
  </div>
)

export default SearchBar
