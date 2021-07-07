import React from "react";
import { User } from "react-feather";
import { Instagram } from "react-feather";
import { Compass } from "react-feather";
import { Heart } from "react-feather";

// import "./SearchBar.css";
import { SearchHeader } from "../../styles";

const SearchBar = props => {
    return (
        <SearchHeader>
            <div className="home">
                <Instagram />
                <h1>Instagram</h1>
            </div>
            <form className="search">
                <input type="text" placeholder="Search" />
            </form>
            <div className="icons">
                <Compass className="icon" />
                <Heart className="icon" />
                <User onClick={props.logout} className="icon" />
            </div>
        </SearchHeader>
    );
};

export default SearchBar;