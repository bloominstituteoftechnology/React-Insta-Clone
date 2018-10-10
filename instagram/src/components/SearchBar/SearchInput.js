import React from 'react';
import './SearchBar.css';

const SearchInput = (props) => {
    return (
        <form>    
            <input type='text' placeholder='🔍 search' onChange={props.search} />
        </form>
    )
}

export default SearchInput;