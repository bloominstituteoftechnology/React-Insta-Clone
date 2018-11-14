import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
const Header = props =>{
    return(
    <header className="app-header">
        <div className="logo-div">
            <img
                className="logo"
                    src={require("../../images/instagram-logo.png")}
                alt="logo"
            />
            <img
                className="logo-text"
                src={require("../../images/instagram-text.png")}
                alt="instagram"
            />
        </div>
            <div>
                <input
                    type="text"
                    placeholder='Search'
                    onChange={props.searchHandler}
                />
            </div>
        <div className="right-logo-div">
            <img
                className="explore-logo"
                    src={require("../../images/explore-logo.png")}
                alt="explore logo" />
            <img
                className="heart-logo"
                    src={require("../../images/instagram-heart.png")}
                alt="explore logo" />
            <img
                className="explore-logo"
                    src={require("../../images/instagram-profile.png")}
                alt="explore logo" />
        </div>
    </header>
    )
}

export default Header