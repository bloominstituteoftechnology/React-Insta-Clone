import React, { Component } from 'react';

function SearchBar(props) {
    return (
        <nav>
            <div>
                <h2>Search Bar</h2>
                <input value={props.searchInput} onChange={props.handleSearchInput} placeholder="search here..." type="text" />
                <button onClick={props.searchData} type='button'>Sumbit</button>
            </div>
        </nav>
    )
}

export default SearchBar