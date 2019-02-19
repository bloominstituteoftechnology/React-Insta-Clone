import React from 'react';
import './search-bar.css';


// import PropTypes from "prop-types";

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
            <div className="lefthandle">
                <i className=""><img src='iglogo.png' alt="a string"/></i>
                <h1> | INSTAclone</h1> 
            </div>
            <input type="text" placeholder="Search" />
                <i className="fa-compass"></i>
                <i className="fa-heart"></i>
                <i className="fa-user"></i>
        </div>
                                                                    );
                                                                    };
export default SearchBar;








