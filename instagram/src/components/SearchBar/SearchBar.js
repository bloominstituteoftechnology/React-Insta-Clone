import React from 'react';
import './searchBar.css';


const SearchBar = props => {
    return (
    <div>
        <section className="searchBarContainer">
         
            <div className="instagramSearchBar">
            </div>
            <input placeholder="Search"
                className="searchInput"
                />
            <div className="instagramSearchAction">
            </div>
        </section>
    </div>
    )
}

export default SearchBar;