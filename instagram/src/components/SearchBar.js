import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faInstagram, faCompass, faHeart, faUser} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from './@fortawesome/react-fontawesome'

// library.add(faInstagram, faCompass, faHeart, faUser)


const SearchBar = props => {
  return(
    <div className="search">
      <div className="search-left">
        <i className="fab fa-instagram fa-2x"></i>
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
        <i className="far fa-compass fa-2x"></i>
        <i className="far fa-heart fa-2x"></i>
        <i className="far fa-user fa-2x"></i>
      </div>
    </div>
  )
}

//<FontAwesomeIcon icon=/>
export default SearchBar