import React from 'react';
import './searchbar.css';





const SearchBar = () => {
    return (
        <div classname= 'main-header'>
            <div classname= 'left-icons'>
                <i class="fab fa-instagram"></i>
                <p>|</p>
                <h1 classname= 'instagram'>Instagram</h1>
            </div>
            <input className= 'search'  placeHolder= 'Search'></input>
            <div classname= 'right-icons'>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    );
}

export default SearchBar;