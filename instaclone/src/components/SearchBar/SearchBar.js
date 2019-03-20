import React from 'react';
import "./SearchBar.css";
import logo from "../../assets/iglogo.png";
import userIcon from '../../assets/user-icon.svg';
import compassIcon from '../../assets/compass.svg';
import heartIcon from '../../assets/heart.svg';



const SearchBar = props => {
    return(
        <div className="search-container">
            <div className="logo-container">
                <img alt="logo" src={logo} className="logo" />
            </div>
            <form onChange={props.searchPosts}>
            <input type="text" placeholder="Search" name="search" value={props.search} onChange={props.inputHandler}/></form>
            
            <div className="search-bar-icons">
                    <img className="search-bar-icon" src={compassIcon} alt="compass icon" />
                    <img className="search-bar-icon heart-icon" src={heartIcon} alt="heart icon" />
                    <img className="search-bar-icon user-icon" src={userIcon} alt="user icon" />
                </div>
            
        </div>
    )
}

export default SearchBar;