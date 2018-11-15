import React from 'react';
import './searchBar.css';
import PropTypes from 'prop-types';

const SearchBar =  props => {
    return (
        <div className='search-bar'>
            <form>
                <div className="input-field">
                    <i className={props.isSelected ? "fas fa-search icon-left": "fas fa-search"}></i>
                    <input className={props.isSelected ? "input-box move-left" : "input-box center"}
                        type="text"
                        name="searchText"
                        placeholder={props.isSelected ? props.searcText : "   Search"}
                        value={props.searchText}
                        onChange={props.handlesChanges}
                        onClick={props.hasBeenClicked}
                    />
                    <i 
                        className={props.isSelected ? "fas fa-times-circle" : "hide"}
                        onClick={props.clearSearchText}></i>
                </div>
            </form>
        </div>
    );
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    hanldesChanges: PropTypes.func,
}

export default SearchBar;