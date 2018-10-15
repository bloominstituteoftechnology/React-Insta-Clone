import React from 'react';

const SearchBar = (props) => {
    return (
        <div> 
            <form>
                <input value={props.value} onChange={props.inputHandler}></input>
            </form>
        </div>
    )
}

export default SearchBar;