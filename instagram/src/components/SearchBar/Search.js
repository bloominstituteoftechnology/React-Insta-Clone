import React from 'react';
import './searchbar.css';


const Search = (props) => {

    return (
        <input type="search" placeholder = " Search... " onKeyDown = {props.searchHandler} />
    )
}



export default Search;