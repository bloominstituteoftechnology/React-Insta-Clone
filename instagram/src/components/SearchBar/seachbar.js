import React from 'react';
import iglogo from '../../img/iglogo.png';
import instacamera from '../../img/instacamera.png';
import './SearchBar.css';


const SearchBar = props=>{

    return(
    <div className='insta-header'>
        <div className='cam-logo'>
        <img className= 'instacam' alt= 'instagram camera' src = {instacamera}/>
        <h2>|</h2>
        <img className= 'instalogo' alt= 'instagram logo' src = {iglogo}/>
        </div>
        <input
        placeholder= 'search'>
        </input>
        <div className="all-icons">
        <div className="icons">
          <i className="fa fa-compass" />
        </div>
        <div className="icons">
          <i className="fa fa-heart" />
        </div>
        <div className="icons">
          <i className="fa fa-user-circle" />
        </div>
        </div>
        
    </div>
    )
}





export default SearchBar;