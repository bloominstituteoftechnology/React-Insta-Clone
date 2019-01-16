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
        <input type="text" onChange={props.onChange} name="searchValue" value={props.value}/>
        <div className="search-actions">
          <i className="far fa-compass fa-2x"></i>
          <i className="far fa-heart fa-2x"></i>
          <i className="far fa-user fa-2x"></i>
        </div>
      </div>


    </div>
  )
}


export default SearchBar
