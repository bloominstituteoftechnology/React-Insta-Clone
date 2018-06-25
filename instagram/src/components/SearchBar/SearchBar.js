import React from 'react';

const SearchBar = props => {
    return (
        <form>
            <input
                //onChange={props.searchContent}
                type="text"
                placeholder="Search"
                value={props.value}
            >
            </input>
            <button>Search</button>
        </form>    
    );
};

export default SearchBar;