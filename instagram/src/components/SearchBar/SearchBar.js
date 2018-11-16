import React from 'react';

function SearchBar(props){
    return(
        <form>
            <input onChange={props.search}></input>
        </form>
    );
}

export default SearchBar;