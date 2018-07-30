import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div>
            <input placeholder="&#8981; Search" />
            <span>
                <i className="fa fa-user-circle" />
            </span>
        </div>

    );
};

export default SearchBar;