import React, {Component} from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="insta-header">
            <span className="header-title">
            <i class="fab fa-instagram camera"></i>
               <span className="line">|</span> Instagram
            </span>
                <input type="text" placeholder="Search" className="header-input"></input>
            <span>
                <i class="far fa-compass"></i>
                <i class="far fa-heart heart"></i>
            </span>
        </div> 
    )
}

export default Search;