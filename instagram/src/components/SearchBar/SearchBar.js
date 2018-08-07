import React from "react";
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="searchbar-wrapper">
            <div className="img-wrapper">

            </div>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="social-wrapper">
                <div className="social">
                    <i className="fa fa-compass" />
                </div>
                <div className="social">
                <i className="fa fa-heart" />
                </div>
                <div className="social">
                <i className="fa fa-user-circle"></i>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;