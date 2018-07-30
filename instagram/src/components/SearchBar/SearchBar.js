import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar-wrap" >
            <input placeholder="&#8981; Search" />
            <span>
                <i className="fa fa-compass " />
            </span>
            <span>
                <i className="fa fa-heart" />
            </span>
            <span>
                <i className="fa fa-user-circle" />
            </span>
        </div>

    );
};

export default SearchBar;