import React, { Component } from 'react';
import './SearchBar.css'

// var FuzzySearch = require("react-fuzzy-search")

const SearchBar = props => {
    return (
        <div className='search-bar-container'>
            <div className='logo-and-text'>
                <i className="fab fa-instagram"></i>
                <h1 className='logo-text'>Instagram</h1>
            </div>
            <div>
            {/* <form onSubmit={props.filterComments} className="search"> */}
            <form className="search">
                <input className="search-input" 
                type="text" placeholder="Search.." 
                name="search" 
                value={props.filterInput}
                onChange={props.filterComments}
                />            
            </form>
            </div>
            <div className='icons'>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;