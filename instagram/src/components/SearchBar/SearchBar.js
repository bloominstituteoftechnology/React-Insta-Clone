import React from "react";
import "./SearchBar.css"

const SearchBar = props => (
    <div className="search-bar"> {/*Container which contains the entire search bar content*/}
        <div className="logo-container"> {/*Contains all the elements that make up the logo*/}
            <img className="camera-image" src="./img/camera_logo.png"></img> {/*Camera picture part of logo*/}
            <div className="dividing-bar"></div> {/*Dividing bar between logo elements*/}
            <img className="instagram-text-logo" src="./img/text_logo.png"></img> {/*Text logo of Instagram*/}
        </div> {/*End logo container*/}
        <input type="text" className="search-bar" placeholder="Search..."></input> {/*Search bar*/}
        <nav className="menu-navigation"> {/*Contains navigation icon buttons*/}
            <img className="navigation-compass" src="./img/compass_icon.png"></img> {/*Compass menu icon*/}
            <img className="navigation-heart" src="./img/heart_icon.png"></img> {/*Heart menu icon*/}
            <img className="navigation-person" src="./img/person_icon.png"></img> {/*Person menu icon*/}
        </nav> {/*End menu navigation*/}
    </div> 
);

{/*SEARCH BAR HAS NO PROPS TO VALIDATE, NO PROP TYPE CHECK*/}

export default SearchBar;