import React from 'react';

function SearchInput(props) {
    return <input onChange={props.handleInput} type="search" placeholder="search" value={props.inputText}/>
}

export default SearchInput;