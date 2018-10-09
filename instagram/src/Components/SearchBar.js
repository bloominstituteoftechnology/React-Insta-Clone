import React from 'react'
import '../App.css';

const SearchBar = props => {
    return (
        <div className="search-container">
            <div className="left">
                <p>
                <i class="fab fa-instagram"></i> | Instagram
                </p>
            </div>
            <div className="middle">
                <input type="text" placeholder="Search"/>
            </div>
            <div className="right">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar