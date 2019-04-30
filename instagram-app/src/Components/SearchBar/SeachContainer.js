import React from 'react';
import SearchLogo from './SearchLogo';
import SearchBtn from './SearchBtn';
import SearchIcons from './SearchIcons';


const SearchContainer = () => {
    return(
        <div className="search-container">
        <SearchLogo />
        <SearchBtn />
        <SearchIcons />
        </div>
    )
}

export default SearchContainer;