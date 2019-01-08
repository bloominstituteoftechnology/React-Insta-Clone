import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => { 
    return (
        <div>
            <input 
                placeholder="search for a post"
                onKeyDown={props.searchUser}
            />
        </div>
    )
}

export default SearchBar;