import React from 'react';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';


 const SearchBar = (props) =>{
   return(
    <div className="borderBox">
        <div className="searchBarContainer"> 
        <div className="logo"><img src={logo}  alt="logo" /> </div>
        <span className="splitBar"> </span> 
        <span className="logoText"> InstaKG  </span> 
        <input id='search' placeholder="   &#128269; Search" type="text"/>
        <FontAwesomeIcon className="icon" icon={faCompass} />
        <FontAwesomeIcon className="icon" icon={faHeart} />
        <FontAwesomeIcon className="icon" icon={faUser} />

        </div>  
        </div>   
  )
}


export default SearchBar;