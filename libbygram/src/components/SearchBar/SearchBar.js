import React from 'react';
import './SearchBar.css';
// import logo from "./libbygram/assets/instagram-user.png";

const SearchBar = props => {
    return (
<div className="searchbar-wrapper">
<div className="searchbar-left">
<i className="fa fa-instagram"></i>
<div className="divider">|</div>
{/* <img className="logo" src={require('./components/assets/logo.svg.png')} alt="Instagram" /> */}
</div>
<div className="searchbar-center">
<input placeholder="Search"></input>
</div>
<div className="searchbar-right">
<i className="fa fa-compass"></i>
<i className="fa fa-heart"></i>
<i className="fa fa-user"></i>
</div>
</div>
    );
}


export default SearchBar;