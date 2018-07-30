import React from 'react';
import './searchbar.css';



const SearchBar = props => {

  
    return(
        <div className="search">

        <i className="fab fa-instagram"></i>

        <input className="search-bar" placeholder="Search" type="text"/>
        
        <div className="icons">
        <i className="fas fa-map-marker-alt"></i>
        <i className="fas fa-heart"></i>
        <i class="fas fa-user-friends"></i>
        </div>


        </div>
    );
};



export default SearchBar;