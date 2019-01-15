import React from 'react'
import './search-bar.css'
const SearchBar = props => {
  return (
    <div className="search-container">
      <div className="search-item-container">
        <div className="search-heading">
          <i className="fas fa-camera fa-3x"></i>
          <h1>Instagram</h1>      
        </div>
        <input type="text" />
        <div className="search-actions">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>


    </div>
  )
}


export default SearchBar
