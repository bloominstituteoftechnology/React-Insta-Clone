import React from "react";
import PropTypes from "prop-types";

const SearchBar = props => {
    return (
        <div className="search">
            <div className="search-left">
        <i class="fab fa-instagram fa-2x"></i>
        <p className="line">|</p>
            <p className="insta-border"> Instagram</p>
            </div>
        <input placeholder="Search" type="text" className="search-input" />
        <div className="right-icons">
        <i class="far fa-compass fa-2x"></i>
        <i class="far fa-heart fa-2x"></i>
        <i class="far fa-user fa-2x"></i>
        </div>
        </div>
    )
}

export default SearchBar;