import React from "react";
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className = "search-container">
        <div className = "instagram">
        <i className="fab fa-instagram"></i>
        <img alt="instagram logo" src="https://raw.githubusercontent.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png" className="logo" />
        </div>
        <form onSubmit={props.searchPosts}>
        <input  type="text"
                className="fa fa-input"
                placeholder="&#xf002; Search"
                onChange={props.searchInputHandler}
                />
        </form>
        <div>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
        </div>
        </div>
    )
}

export default SearchBar;