import React from 'react';
import "./SearchBar.css";
import logo from "../../assets/iglogo.png";

const SearchBar = props => {
    return(
        <div className="search-container">
            <div className="logo-container">
                <img alt="logo" src={logo} className="logo" />
            </div>
            <input type="text" placeholder="Search" name="search" value={props.search} onChange={props.inputHandler}/>
            <div className="icons">

            </div>
        </div>
    )
}

export default SearchBar;