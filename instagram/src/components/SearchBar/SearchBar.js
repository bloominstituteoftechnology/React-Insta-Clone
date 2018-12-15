import React from 'react';
import './SearchBar.css';
/*At the end of Day I there will be a single instance of the Search Bar being rendered at the top of the page */
const SearchBar = () => {
    return (
        <div className="search-header-wrapper">
            <div className="lsearch">
                <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram logo" id="insta-logo"/>
                <h1 className="title">Instagram</h1>
            </div>
            <div className="msearch">
                <input id="search-bar" type="text" placeholder="Search" />
            </div>
            <div className="rsearch">
                <img src="#" alt="Search"/>
                <img src="#" alt="like"/>
                <img src="#" alt="profile"/>
            </div>
        </div>
    )
}
export default SearchBar 

