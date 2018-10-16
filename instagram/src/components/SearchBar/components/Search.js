import React from 'react';
import './search.css';

const Search = () => {
    return (
        <div class="searchHeader">
            <img class="instaLogo" src="https://png.icons8.com/ios/1600/instagram-new.png" />
            <form> 
                <input class="searchBar" type="text" placeholder="search"></input>
            </form>
            <div class="searchButtons">
                <img class= "searchNav" src="https://cdn1.iconfinder.com/data/icons/superthick-app-ui/128/explore-compass-travel-512.png" />
                <img class="searchHeart" src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png" />
            </div>
        </div>
    )
}

export default Search;