import React  from 'react';
import './SearchBar.css';
const SearchBar = (props) => {
    return (
        <div className="searchBar">
            <div className="searchbar__iconset">
                <div className="searchBar__icon">
                    <img src="https://visualpharm.com/assets/360/Instagram-595b40b65ba036ed117d1e38.svg" alt="Instagram Logo" height="45px"/>
                </div>

                <div className="searchBar__logo">
                    Johnstagram
                </div>
            </div>

            <div className="searchbar__input">
                <form><input className="searchbar__input__field" placeholder="Search Instagram"/><i></i></form>
            </div>
            
        </div>
    );
}

export default SearchBar;