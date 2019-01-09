import React from 'react';
import './searchBar.css';


const SearchBar = props => {
    console.log(props)
    return (
    <div>
        <section className="searchBarContainer">
         
            <div className="instagramSearchBar">
            </div>
            <input placeholder="Search"
                type="text"
                className="searchInput"
                onKeyUp={props.searchFilteredPosts}
            />
            <div className="instagramSearchAction">
            </div>
        </section>
    </div>
    )
}

export default SearchBar;