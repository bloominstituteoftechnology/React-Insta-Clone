import React from 'react';

const SearchBar = (props) => {
    function clearDefaultText(event) {
        if (event.target.value === 'search') {
            event.target.value = '';
        }
    }
    return (
        <div className='searchbar'>
            <input onClick={clearDefaultText} onChange={props.changeSearchTerm} className='search' defaultValue='search' />
        </div>
    )
}

export default SearchBar;