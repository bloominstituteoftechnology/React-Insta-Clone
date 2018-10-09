import React from 'react'
import logo from '../../img/glyph-logo_May2016.png'

import './SearchBar.css'

const SearchBar = ({ searchParam, search, handleSearchInputChange }) => (
  <div className="search-bar">
    <img className="logo" src={logo} alt="instagram" />
    <p>Instagram</p>
    <form onSubmit={search}>
      <input
        type="text"
        placeholder="Search"
        value={searchParam}
        onChange={handleSearchInputChange}
      />
    </form>
  </div>
)

export default SearchBar
