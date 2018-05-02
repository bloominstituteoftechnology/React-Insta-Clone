
import React from "react";
//import logo from "./logo.svg";
//import compass from "./compass.svg";
//import heart from "./heart.svg";
//import person from "./user-circle.svg";

const SearchBar = () => {
    return (
        <div className="flex search">
            <div className="flex div-25">
                <img className="imageLogo" src='./logo.svg'/>
                <hr/>
                <h4 className="" >Instagram</h4>
            </div>
            <div className="div-50">
                <input className="searchBox" type="text" placeholder="Search"/>
            </div>
            <div className="div-25">
                <img className="searchImgs" src='./compass.svg'/>
                <img className="searchImgs" src='./heart.svg'/>
                <img className="searchImgs" src= './user-circle.svg'/>
            </div>
        </div>
    );
}

export default SearchBar