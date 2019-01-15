import React from 'react'
import igLogo from './img/insta-logo.png'
import './SearchBar.css'

const SearchBar = (props) => {
    return(
        <div className="search-bar">
            <div className="left-side">
            <i className="fab fa-instagram"></i>
            <div className="line"></div>
            <img className="ig-logo" src= {igLogo} alt="insta logo" />
            </div>
            <div className= "input-wrap">
            
            <input className = "input-box" type="text" placeholder = "       🔍 Search"/>
            
            </div>
            <div className="search-icons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
            
        </div>
    )
}

export default SearchBar
