import React from 'react';
import './SearchBar.css';

const SearchBar = props => (
    <div className="search-bar">
        <div className="logo">
            <i className="fab fa-instagram"></i>
            <img src="https://3rockmarketing.com/wp-content/uploads/2016/09/instagram-logo.png" alt=""/>
        </div>
        <div className="search-input">
            <form>
                <input 
                    type="text" 
                    placeholder="search"
                    onChange={props.filterPosts}
                />
            </form>
        </div>
        <div className="navigation-logos">
            <i className="far fa-compass"></i>
            <i className="far fa-heart thisheart"></i>
            <i className="far fa-user"></i>
        </div>
    </div>
)

export default SearchBar