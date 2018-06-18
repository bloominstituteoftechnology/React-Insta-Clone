import React from 'react';
import './Search.css';
import SearchLogos from './SearchLogos';
import SearchBox from './SearchBox';
import SearchIcons from './SearchIcons';

const SearchContainer = (props) => {
    return (
        <div className = 'search-container'>
            <SearchLogos />
            <SearchBox />
            <SearchIcons />
        </div>
    );
}

export default SearchContainer;