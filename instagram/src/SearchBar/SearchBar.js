import React from 'react';
import './searchBar.css';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    hanldesChanges: PropTypes.func,
}

export default SearchBar;