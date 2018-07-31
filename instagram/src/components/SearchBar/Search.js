import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = (props) => {
    
    return (
        <div className="search-container">
            <div className="logo">
                logo
            </div>
            <div className="input-container">
            <form onSubmit={props.handleSearchSubmit}>
                <input placeholder="Search names..." onChange={props.handleSearchString}/>
            </form>
                
            </div>
            <div className="options-container">
                <div className="options-item"></div>
                <div className="options-item"></div>
                <div className="options-item"></div>
            </div>
        </div>
    )
}

export default Search;