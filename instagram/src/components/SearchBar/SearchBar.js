import React from 'react';
import './SearchBar.css';

const SearchBar = props => {

    return(
    
        <div className='searchBar'>
            <div className='instaLogo'>
                <img src='InstagramIcon.png' alt="instaLogo"></img>
            </div>
         
            <input type="text" name="search" value={props.search} 
                onChange={props.onInputChange} placeholder="Search"/>
           
            <div className='icons'>
                <i className="far fa-compass"></i>
                <i className="far fa-heart" ></i>
    
                <i className="far fa-user"></i>
             </div>
        </div>

    );
}



export default SearchBar;