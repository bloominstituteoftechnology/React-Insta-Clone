import React from 'react';
import SearchLogo from './SearchLogo';
import './SearchBar.css'
import SearchInput from './SearchInput';
import SearchIcons from './SearchIcons';

function SearchBarContainer(props) {
    return (
        <div className="search-bar-container">
            <div className="logo">
                <SearchLogo />
            </div>
            <div className="search-input">
                <SearchInput hdlSearch={props.hdlSearch}/>
            </div>
            <div>
                <SearchIcons />
            </div>
        </div>
    )
}

export default SearchBarContainer;