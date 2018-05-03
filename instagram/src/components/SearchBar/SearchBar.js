
import React from "react";
import logo from '../../logo.svg';
import compass from "../../compass.svg";
import heart from "../../heart.svg";
import person from "../../user-circle.svg";

const SearchBar = () => {
    return (
        <div className="flex search">
            <div className="flex div-25">
                <img className="search__Images search__Images-logo" src={logo}/>
                <hr/>
                <h4 className="" >Instagram</h4>
            </div>
            <div className="div-50">
                <input className="search__input" type="text" placeholder="Search"/>
            </div>
            <div className="div-25">
                <img className="search__Images search__Images-group" src={compass}/>
                <img className="search__Images search__Images-group" src={heart}/>
                <img className="search__Images search__Images-group" src={person}/>
            </div>
        </div>
    );
}

export default SearchBar