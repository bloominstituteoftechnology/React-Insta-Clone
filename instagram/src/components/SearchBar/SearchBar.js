import React from 'react';
import './SearchBar.css'

const SearchBar = () =>{
    return(
        <div className = "search-bar">
            <div className = "sb-title">
                <i className = "fas fa-camera-retro fa-2x"></i>
                <span className = "title">Instagram</span>
            </div>
            
            <div className = "search-box">
                <i className = "fas fa-search"></i>
                <input type="search" placeholder = "Search"></input>
            </div>       
            <div className = "sb-icons">
                <i className = "far fa-compass fa-2x"></i>
                <i className = "far fa-heart fa-2x"></i>
                <i className = "far fa-user fa-2x"></i>
            </div>     
                        
        </div>
    )
}

export default SearchBar;