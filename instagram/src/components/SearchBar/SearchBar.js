import React from 'react';
import './SearchBar.css';

const SearchBar = () =>{
    return(
        <div className='searchBar'>
            <div className='logo'>
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
            </div>
            <div className='search'>
                <input value='search'/>
            </div>
            <div className='buttons'>
                <i className="fas fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar