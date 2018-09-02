import React from 'react';
import PropTypes from 'prop-types';
import './searchbar.css';

function SearchBar(props) {
    return (
        <div className='search-bar'>
            <span>img </span><span>| Lambdagram </span>
            <input name='searchInput' type='text' value={props.searchData} onChange={props.searchHandler} />
            <span> img </span><span>img </span><span>img </span>
        </div>
    );
}

SearchBar.propTypes = {
    searchData: PropTypes.string.isRequired,
    searchHandler: PropTypes.func.isRequired
}

export default SearchBar;
