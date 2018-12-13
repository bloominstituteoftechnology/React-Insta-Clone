import React from 'react';
import './SearchBar.css';

const SearchBar = props =>{
    return(
            <div className="searchLogo">
                <div className="logo">
                    <div className="insta"></div>
                    <span className="divider">|</span>
                    <div className="instagram"></div>
                </div>
                <div>
                    <form>
                        <input className="search-logo" value="search" />
                    </form>
                </div>
                <div className="icons">
                    <div className="explore"></div>
                    <div className="heart"></div>
                    <div className="profile"></div>
                </div>
            </div>
    )
}

export default SearchBar;