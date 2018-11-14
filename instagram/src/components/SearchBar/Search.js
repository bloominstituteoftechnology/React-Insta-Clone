import React from 'react';

const Search = (props) => {

    return (
        <input className = "searcBarImput" type="search" placeholder = " Search... " onKeyUp = {props.searchHandler} />   
    )
}



export default Search;