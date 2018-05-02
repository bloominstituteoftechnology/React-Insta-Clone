
import React from "react";
//import logo from "";
//import compass from "";
//import heart from "";
//import person from "";

const SearchBar = () => {
    return (
        <div className="flex search">
            <div className="flex div-25">
                <img className="imageLogo" src={logo}/>
                <hr/>
                <h4 className="" >Instagram</h4>
            </div>
            <div className="div-50">
                <input className="searchBox" type="text" placeholder="Search"/>
            </div>
            <div className="div-25">
                <img className="searchImgs" src={compass}/>
                <img className="searchImgs" src={heart}/>
                <img className="searchImgs" src={person}/>
            </div>
        </div>
    );
}

export default SearchBar