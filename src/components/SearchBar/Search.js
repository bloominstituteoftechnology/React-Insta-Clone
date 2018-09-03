import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className="Search">
      <i className="fab fa-instagram"></i>
      <p>Instagram</p>
      <input placeholder="🔍 Search" />
      <div className="iconNav">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  )
}

export default Search
