import React from "react";

import "./SearchBar.css";

const SearchBar = props => {
    return (
        <header className="search">
            <div className="home">
                <h1>Instagram</h1>
            </div>
            <form className="search">
                <input type="text" />
            </form>
            <div className="icons">
            
            </div>
        </header>
    );
};

export default SearchBar;