import React from 'react';

const SearchInput = props => {
    
    return (
        <form onSubmit={(event) => props.searchUsername(event, "Sarah")}>
            <input
                type="text"
                placeholder="Search"
                value={props.searchValue}
                onChange={props.searchChangeHandler}
            ></input>
        </form>
    );
}

export default SearchInput;