import React from 'react';
import './searchBar.css';


const SearchBar = props => {
    console.log(props)
    // const users = props.users;
    // const searchFilter = users.filter((user, index) => (
    //     <ul key={index} value={user}>{user.username} {user.text}</ul>
    // ))
    return (
    <div>
        <section className="searchBarContainer">
         
            <div className="instagramSearchBar">
            </div>
            <input placeholder="Search"
                className="searchInput"
                onKeyUp={props.searchFilteredPosts}
            />
            <div className="instagramSearchAction">
            {/* {searchFilter} */}
            </div>
        </section>
    </div>
    )
}

export default SearchBar;