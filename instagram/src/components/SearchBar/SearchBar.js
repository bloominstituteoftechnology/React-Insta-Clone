import React from 'react';

const SearchBar = (props) => {
    return(
        <div className="search-bar">
            <div className="left">
                <i class="fab fa-instagram fa-2x"></i>
                <span></span>
                <h1 className="instagram-logo">instagram</h1>
            </div>

            <input type="text" placeholder="Search" className="search-input" onKeyDown={props.searchPosts}/>

            <div className="right">
                <i class="far fa-compass fa-2x"></i>
                <i class="far fa-heart fa-2x"></i>
                <i class="far fa-user fa-2x"></i>
            </div>
        </div>
    );
}
export default SearchBar;