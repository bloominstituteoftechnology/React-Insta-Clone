import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return(
        <div>
            <input 
                type = 'text'
                placeholder = 'Input Search'
            />
        </div>
    )
}

export default SearchBar;