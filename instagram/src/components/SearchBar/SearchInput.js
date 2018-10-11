import React from 'react';
import './SearchBar.css';

const SearchInput = (props) => {
    return (
        // <form >
            <input        
                onKeyUp={props.search}    
                type='search'
                placeholder='🔍 search'

            />
        // </form>
    )
}

export default SearchInput;