import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div>
            <input
                className="fa fa-input header__search"
                placeholder="&#xf002; Search"
                onChange={props.handleInputChange}
                value={props.filter}
                name="filter"
            />
        </div>
    );
}

export default SearchBar;