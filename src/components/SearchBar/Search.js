import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className="Search">
      <div className="navLogo">
        <i className="fab fa-instagram navLogo1"></i>
        <span className="cookieFont navLogo2">Instagram</span>
      </div>


      <div className="navSearch">
        <input className="navSearch-input" placeholder="🔍 Search" />
      </div>

      <div className="navIcons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  )
}

export default Search
