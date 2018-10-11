import React from "react";
import { User } from "react-feather";
import { Instagram } from "react-feather";
import { Compass } from "react-feather";
import { Heart } from "react-feather";

import "./SearchBar.css";

const SearchBar = props => {
    return (
        <header className="search">
            <div className="home">
                <Instagram />
                <h1>Instagram</h1>
            </div>
            <form className="search">
                <input type="text" placeholder="Search" />
            </form>
            <div className="icons">
                <Compass className="compass" />
                <Heart className="heart" />
                <User onClick={props.logout} className="user" />
            </div>
        </header>
    );
};

export default SearchBar;