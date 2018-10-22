import React from 'react';

const SearchBar = props => {
    return(
        <div>
        <input onKeyDown={props.handleSearch} type='text' placeholder='Search' />
        </div>
    )
}
export default SearchBar 