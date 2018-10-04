import React from 'react';
import './SearchBar.css';

const SearchBar = () =>{
    return(
        <div className='searchBar'>
            <div className='logo'>
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
            </div>
            <div className='search'>
                <input value='search'/>
            </div>
            <div className='buttons'>
                <i class="fas fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar