import React  from 'react';
import './SearchBar.css';
const SearchBar = (props) => {
    return (
        <div className="searchBar">
            <div className="searchbar__iconset">
                <div className="searchBar__icon">
                    <img src="http://hotpenguin.net/wp-content/uploads/2014/02/look-at-this-instagram-nickelback.jpg" alt="Instagram Logo" height="45px"/>
                </div>

                <div className="searchBar__logo">
                    InstaGam
                </div>
            </div>

            <div className="searchbar__input">
                <form><input className="searchbar__input__field" placeholder="Search InstaGam"/><i></i></form>
            </div>
            
        </div>
    );
}

export default SearchBar;