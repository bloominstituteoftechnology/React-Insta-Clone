import React from 'react';

const SearchBar = props => {
    return (
        <div className="search-header-wrapper">

            <div className="left-search">
                <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram logo" id="insta-logo"/>
                <h1 className="title">Instagram</h1>
            </div>

            <div className="mid-search">
                <input id="search-bar" type="text" placeholder="Search" />
            </div>

            <div className="right-search">
                <img src="https://img.icons8.com/ios/50/000000/adventures.png" alt="explore icon"/>
                <img src="https://img.icons8.com/ios/50/000000/like.png" alt="like icon"/>
                <img src="https://img.icons8.com/ios/50/000000/user.png" alt="profile icon"/>
            </div>

        </div>
    )
}

export default SearchBar