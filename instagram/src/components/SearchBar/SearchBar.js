import React from 'react';
import './SearchBar.css';

const SearchBar = props =>{
    return(
            <div className="searchLogo">
                <div className="logo">
                    <a href="/instagram/public/index.html">
                        <div className="insta"></div>
                    </a>
                    <a href="/instagram/public/index.html">
                        <span className="divider">|</span>
                    </a>
                    <a href="/instagram/public/index.html">
                        <div className="instagram"></div>
                    </a>

                </div>
                <div>
                    <form>
                        <input className="search-logo" value={props.inputText} onChange={props.handle} placeholder="Search" />
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