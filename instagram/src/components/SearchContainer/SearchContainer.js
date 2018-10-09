import React from 'react';
import './SearchContainer.css';
import LogoContainer from '../LogoContainer/LogoContainer';
import SearchBar from '../SearchBar/SearchBar';
import ActionsContainer from '../ActionsContainer/ActionsContainer';



const SearchContainer = props => {
    return(
        <div className='search-container'>
            <LogoContainer />
            <SearchBar />
            <ActionsContainer />
        </div>
        
    )
}

export default SearchContainer;