import React from 'react';
import './Searchbar.css';
import IconSearchBar from './IconSearchbar';
import SearchInput from './SearchInput';
import NavigationSearchBar from './NavigationSearchBar';


const SearchBarContainer = (props) => {
    return(
        <div className="search-bar-container">
            <IconSearchBar />
            <SearchInput onChange={props.onChange} value={props.value} />
            <NavigationSearchBar />
        </div>
    )
}

export default SearchBarContainer;
