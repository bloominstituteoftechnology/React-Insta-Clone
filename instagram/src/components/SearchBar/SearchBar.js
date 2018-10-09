import React from "react";
import logo from "../../images/instagram-new-logo.png"
import "./SearchBar.css";

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div className="left">
                <i className="fa fa-2x fa-instagram" aria-hidden="true"></i>
                <img src={logo} alt="logo"></img>
            </div>
            <div className="center">
            <form onSubmit={props.searchPosts}>
            <input 
                className="fa fa-search"
                name= "search" 
                placeholder="&#xF002; Search" 
                value={props.search}
                onChange={props.searchInputHandler}
                type="text"
                />
            </form>
            </div>
            <div className="right">
                <i className="fa fa-2x fa-compass" aria-hidden="true"></i>
                <i className="fa fa-2x fa-heart-o" aria-hidden="true"></i>
                <i className="fa fa-2x fa-user-o" aria-hidden="true"></i>
            </div>
            
        </div>
    );
}

export default SearchBar;