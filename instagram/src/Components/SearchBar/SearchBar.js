import React from 'react'
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className="search-container">
            <div className="left">
                <p>
                <i className="fab fa-instagram"></i> | Instagram
                </p>
            </div>
            <div className="middle">
                <input type="text" placeholder="Search"/>
            </div>
            <div className="right">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar