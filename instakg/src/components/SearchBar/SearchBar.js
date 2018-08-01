import React from 'react';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

import './SearchBar.css';


 const SearchBar = (props) =>{
   return(
    <div className="borderBox">
        <div className="searchBarContainer"> 
        <div className="logo"><img src={logo}  alt="logo" /> </div>
        <span className="splitBar"> </span> 
        <span className="logoText"> InstaKG  </span> 
        <input onChange={props.methods} id='search' placeholder="   &#128269; Search" type="text"/>
        <div><FontAwesomeIcon className="icon" icon={faCompass} /></div>
        <div><FontAwesomeIcon className="icon" icon={faHeart} /></div>
        <div onClick={function(event){event.currentTarget.childNodes[1].classList.toggle('visible')}} className='dropDown'>
        <FontAwesomeIcon  className="icon" icon={faUser} />
        <div className='dropDownBox' onClick={props.logout}>Logout</div>
         </div>
        </div>  
        </div>   
  )
}


export default SearchBar;