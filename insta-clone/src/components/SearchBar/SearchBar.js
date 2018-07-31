import React from 'react';
import './SearchBar.css';


const SearchBar = () => {
    return (
        <div className="search-bar-top">
            <div className="logos-wrapper">
                <i className="fab fa-instagram"></i>
                <img src = {require("/Users/bryceevans/Desktop/LambdaSchool/React-Insta-Clone/insta-clone/src/assets/insta.png")} alt="logo" className="insta-words" />
            </div>
            <div className="search-bar-wrapper">
                <span className="fa fa-search"></span>
                <input type="text" placeholder="Search" className="search-bar" />
            </div>
            <div className="social-wrapper">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
};

export default SearchBar;