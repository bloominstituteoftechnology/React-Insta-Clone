import React from 'react';
import './SearchBar.css';

const SearchBar = () =>{

    return (
        <div className="sb-container">
            <div className="left">
                <i className="fab fa-instagram"></i>
                <p className="insta">Instagram</p>
            </div>
            <div className="middle">
                <i className="fas fa-search"></i>
                <input className="input" type="text" placeholder="                Search"/>
            </div>
            <div className="right">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )

}

export default SearchBar;