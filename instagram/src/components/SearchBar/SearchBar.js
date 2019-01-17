import React from 'react'
import PropTypes from 'prop-types'
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
          <i className="far fa-user fa-2x" onClick={props.logout}></i>
        </div>
      </div>


    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  logout: PropTypes.func,
}
export default SearchBar
