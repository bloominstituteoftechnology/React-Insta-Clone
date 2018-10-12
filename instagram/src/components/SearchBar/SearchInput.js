import React from 'react';
import './SearchBar.css';

const SearchInput = (props) => {
    return (
        <>
            <input 
             onKeyUp={props.search}
            type='text'
             placeholder='🔍 search'
              />
        </>
    )
}

export default SearchInput;