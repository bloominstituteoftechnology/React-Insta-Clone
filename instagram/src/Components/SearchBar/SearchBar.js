import React from 'react';
import './SearchBar.css';

const SearchBar = ({searchPost, value, logout}) => {
    return (
        <div className="searchbar-container">
            <div className="container">
                <div className="searchbar-logo">
                    <span className="logo-sprite sprite" ></span> 
                    <div className="split"></div>
                    <span className="logo-name-sprite sprite"></span> 
                </div>
                <div className="searchbar-input">
                    <input type="text" placeholder="Search" name="search" value={value} onChange={searchPost}/>
                </div>
                <div className="searchbar-icons">
                    <span className="icons-navigate sprite-core" ></span> 
                    <span className="icons-heart sprite-core" ></span> 
                    <span 
                        className="icons-user sprite-core" 
                        onClick={logout}
                    ></span> 
                </div>
            </div>
        </div>
    );
}



export default SearchBar;
