import React from 'react';

function SearchBar (props) {  
    return (
        <div className= "search-bar">
            <img src="instagram-logo.png" alt="Instagram Logo" width="30px" height="30px"/>
            <img src="insta_script.png" alt="Instagram Script" width="10%" height="10%"/>
            <input
                type="text"
                placeholder="Search"
            />
            <img src="insta_search.png" alt="Find Friends" width="3%" height="3%" />
            <img src="insta_like.png" alt="Likes" width="3%" height="3%" />
            <img src="insta_follower.jpg" alt="Followers" width="3%" height="3%" />
        </div>
    )

}

export default SearchBar;