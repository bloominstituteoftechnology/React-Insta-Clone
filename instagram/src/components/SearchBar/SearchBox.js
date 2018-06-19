import React from 'react';
import './Search.css';


const SearchBox = (props) => {
    return <input className='search-box'
        type='search'
        placeholder='&#128269; Search'
        onChange={(e) => {
            props.searchHandler(e)
        }} />
}

export default SearchBox;