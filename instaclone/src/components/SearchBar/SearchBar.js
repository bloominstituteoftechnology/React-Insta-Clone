import React from 'react';
import './search-bar.css';

// import PropTypes from "prop-types";

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
            <div className="lefthandle">
            <i className="fab fa-instagram" />
                <h1> | INSTAclone</h1> 
            </div>
            <input  type="text" placeholder="Search" />
            <div className="righthandle">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
                                                                    );
                                                                    };
export default SearchBar;