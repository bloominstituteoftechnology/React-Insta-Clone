import React from "react";
import IGLogo from "../../assets/IGLogo.png";
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className="searchbar-wrapper">
            <div className="img-wrapper">
            <img src={IGLogo} alt="Instagram logo" className="IG-Logo"/>
            </div>
            <div>
                <input className="searchbar" onChange={props.search} type="text" placeholder="Search" />
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
            <form>
                <button onClick={() =>props.handleCreds(null)}>Log Out</button>
            </form>
        </div>
    );
};

export default SearchBar;
