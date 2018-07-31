import React from 'react';
import './SearchBar.css'

const SearchBar = props =>{
    return(
        <div className = "search-bar">
            <div className = "sb-title">
                <i className = "fas fa-camera-retro fa-2x"></i>
                <span className = "title">Instagram</span>
            </div>
            
            <form className = "search-box" onSubmit = {props.handleSearch}>
                <i className = "fas fa-search"></i>
                <input type = "search" placeholder = "Search" onChange = {props.handleUpdateSearch} value = {props.value}></input>
            </form>       
            <div className = "sb-icons">
                <i className = "far fa-compass fa-2x"></i>
                <i className = "far fa-heart fa-2x"></i>
                <i className = "far fa-user fa-2x"></i>
            </div>     
                        
        </div>
    )
}

export default SearchBar;