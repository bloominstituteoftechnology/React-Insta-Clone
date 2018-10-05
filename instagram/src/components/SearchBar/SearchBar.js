import React from "react";
import "./SearchBar.css"

const SearchBar = props => (
    <div className="search-bar"> {/*Container which contains the entire search bar content*/}
        <div className="logo-container"> {/*Contains all the elements that make up the logo*/}
            <div className="camera-image"></div> {/*Camera picture part of logo*/}
            <div className="dividing-bar-image"></div> {/*Dividing bar between logo elements*/}
            <div className="instagram-text-logo-image"></div> {/*Text logo of Instagram*/}
        </div> {/*End logo container*/}
        <div className="search-bar"></div> {/*Search bar*/}
        <nav className="menu-navigation"> {/*Contains navigation icon buttons*/}
            <div className="navigation-compass"></div> {/*Compass menu icon*/}
            <div className="navigation-heart"></div> {/*Heart menu icon*/}
            <div className="navigation-person"></div> {/*Person menu icon*/}
        </nav> {/*End menu navigation*/}
    </div> 
);

{/*SEARCH BAR HAS NO PROPS TO VALIDATE, NO PROP TYPE CHECK*/}

export default SearchBar;