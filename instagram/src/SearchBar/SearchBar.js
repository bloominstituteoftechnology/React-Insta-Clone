import React from 'react';
import './searchBar.css';

const SearchBar =  props => {
    return (
        <div className='search-bar'>
            <form>
                <input 
                    type="text"
                    name="searchText"
                    placeholder="&#x2315; Search"
                    value={props.searchText}
                    onChange={props.handlesChanges}
                />
            </form>
        </div>
    );
}

export default SearchBar;