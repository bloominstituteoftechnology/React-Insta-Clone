import React from 'react'
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome'


const SearchBar = props => {
  return(
    <div className="search">
      <div className="search-left">
          <FontAwesomeIcon icon="fab fa-instagram fa-2x" />
          <p className="line">|</p>
          <p className="instagram"> Instagram</p>
      </div>
      <input 
        className="search-input"
        type="text"
        name="filterTarget"
        placeholder="search"
        value={props.filterTarget}
        onChange={props.changeHandler}
      />
      <div className="right-icons">
        <FontAwesomeIcon icon="far fa-compass fa-2x"/>
        <FontAwesomeIcon icon="far fa-heart fa-2x"/>
        <FontAwesomeIcon icon="far fa-user fa-2x"/>
      </div>
    </div>
  )
}

export default SearchBar