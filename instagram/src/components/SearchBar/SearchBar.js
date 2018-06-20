import React from 'react';
import './searchBar.css';

const SearchBar = (props)=>{
    return(
        <div className="search">
            <div className="search__container">
                <div className="left">
                    <i className="fab fa-instagram"></i>
                    <a href="#">Instagram</a>
                </div>
                <div className="center">
                    <input type="text" className="search__input" id="search__input" placeholder="search" />
                </div>
                <div className="right">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-user"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
