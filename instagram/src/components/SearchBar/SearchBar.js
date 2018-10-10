import React from "react";
import { User } from "react-feather";

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
                <User onClick={props.logout} />
            </div>
        </header>
    );
};

export default SearchBar;