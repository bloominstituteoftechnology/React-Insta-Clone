import React from 'react'



const SearchBar = () => {
    return (
        <div className="searchBarDiv">
            <div className="logoContainer">
                <div className="IGWidget"></div>
                <div className="lineSpacer"></div>
                <div className="IGLogo"></div>
            </div>

         <input placeholder="search" className="searchInput"></input>

            <div className="iconContainer">
                <i className="far fa-circle"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;